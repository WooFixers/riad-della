"use server";

import { Resend } from "resend";
import { getLocale } from "next-intl/server";

type Locale = "en" | "fr" | "es" | "it";

function buildClientEmailHtml(greeting: string, body: string, closing: string): string {
  return `
    <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #333;">
      <div style="background-color: #4A5D3E; padding: 24px 32px;">
        <h1 style="margin: 0; font-size: 22px; color: #ffffff; letter-spacing: 0.05em; font-weight: normal;">Riad Della</h1>
        <p style="margin: 4px 0 0; font-size: 12px; color: #c8d8b8; letter-spacing: 0.08em; text-transform: uppercase;">Marrakech, Morocco</p>
      </div>
      <div style="padding: 32px; background-color: #fafaf8; border: 1px solid #e8e4df; border-top: none;">
        <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.7;">${greeting}</p>
        <p style="margin: 0 0 24px; font-size: 15px; line-height: 1.7;">${body}</p>
        <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #4A5D3E;">${closing}</p>
      </div>
      <div style="padding: 16px 32px; text-align: center; font-size: 12px; color: #999;">
        Riad Della · Medina, Marrakech · contact@riaddella.com
      </div>
    </div>
  `;
}

const CLIENT_STRINGS: Record<Locale, { subject: string; html: string }> = {
  en: {
    subject: "We received your request – Riad Della",
    html: buildClientEmailHtml(
      "Dear Guest,",
      "Thank you for reaching out to Riad Della. We have received your reservation request and our team will get back to you within 24 hours.",
      "We look forward to welcoming you to our riad."
    ),
  },
  fr: {
    subject: "Votre demande a bien été reçue – Riad Della",
    html: buildClientEmailHtml(
      "Cher(e) Client(e),",
      "Nous vous remercions de votre intérêt pour Riad Della. Nous avons bien reçu votre demande de réservation et notre équipe vous répondra dans les 24 heures.",
      "Nous avons hâte de vous accueillir dans notre riad."
    ),
  },
  es: {
    subject: "Hemos recibido su solicitud – Riad Della",
    html: buildClientEmailHtml(
      "Estimado/a huésped,",
      "Gracias por contactar con Riad Della. Hemos recibido su solicitud de reserva y nuestro equipo le responderá en un plazo de 24 horas.",
      "Esperamos darle la bienvenida a nuestro riad."
    ),
  },
  it: {
    subject: "Abbiamo ricevuto la sua richiesta – Riad Della",
    html: buildClientEmailHtml(
      "Gentile Ospite,",
      "La ringraziamo per aver contattato Riad Della. Abbiamo ricevuto la sua richiesta di prenotazione e il nostro team la contatterà entro 24 ore.",
      "Non vediamo l'ora di darle il benvenuto nel nostro riad."
    ),
  },
};

function buildAdminHtml(data: any): string {
  const isRoomBooking = data.source === "rooms-booking-form";
  const isDialog = data.source === "booking-dialog";
  const guestsLine = isRoomBooking
    ? `<p><strong>Room:</strong> ${data.room || "N/A"}</p>`
    : `<p><strong>Guests:</strong> ${data.guests || "N/A"}</p>${
        !isDialog
          ? `<p><strong>Room Preference:</strong> ${data.roomPreference || "No preference"}</p>`
          : ""
      }`;
  const messageLine = isRoomBooking ? data.extras : data.message;
  return `
    <div style="font-family: sans-serif; color: #333;">
      <h2 style="color: #4A5D3E;">${isRoomBooking ? "New Room Booking Request" : "New Availability Request"}</h2>
      <p><strong>Full Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      ${guestsLine}
      <p><strong>Check-in:</strong> ${data.checkIn}</p>
      <p><strong>Check-out:</strong> ${data.checkOut}</p>
      ${data.specialOccasion && data.specialOccasion !== "none" ? `<p><strong>Special Occasion:</strong> ${data.specialOccasion}</p>` : ""}
      <br/>
      <p><strong>${isRoomBooking ? "Extras & Special Requests" : "Message"}:</strong></p>
      <p style="white-space: pre-wrap;">${messageLine || "None"}</p>
    </div>
  `;
}

export async function sendReservationEmail(data: any) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY is not defined. Email simulation mode.");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, simulated: true };
  }

  const fromAddress = process.env.EMAIL_FROM || "Riad Della <contact@riaddella.com>";
  const toAddress = process.env.EMAIL_TO || "contact@riaddella.com";
  const ccRaw = process.env.EMAIL_CC ?? "";
  const ccAddresses = ccRaw.split(",").map((s) => s.trim()).filter(Boolean);

  const rawLocale = await getLocale();
  const locale: Locale = (["fr", "es", "it"] as Locale[]).includes(rawLocale as Locale)
    ? (rawLocale as Locale)
    : "en";

  const isRoomBooking = data.source === "rooms-booking-form";
  const adminSubject = isRoomBooking
    ? `Room Booking Request – ${data.room} – ${data.fullName}`
    : `New Reservation Request – ${data.fullName}`;

  const resend = new Resend(resendApiKey);

  try {
    const [adminResult, clientResult] = await Promise.all([
      resend.emails.send({
        from: fromAddress,
        to: [toAddress],
        ...(ccAddresses.length > 0 ? { cc: ccAddresses } : {}),
        replyTo: `${data.fullName} <${data.email}>`,
        subject: adminSubject,
        html: buildAdminHtml(data),
      }),
      resend.emails.send({
        from: fromAddress,
        to: [data.email],
        subject: CLIENT_STRINGS[locale].subject,
        html: CLIENT_STRINGS[locale].html,
      }),
    ]);

    if (adminResult.error || clientResult.error) {
      console.error("Resend error — admin:", adminResult.error, "| client:", clientResult.error);
      return { success: false, error: "Failed to send email." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending reservation email:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
