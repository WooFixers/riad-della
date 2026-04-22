"use server";

export async function sendReservationEmail(data: any) {
  const brevoApiKey = process.env.BREVO_API_KEY;
  if (!brevoApiKey) {
    console.warn("BREVO_API_KEY is not defined. Email simulation mode.");
    // Wait for 1 second to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, simulated: true };
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || "contact@riaddella.com";
  // The email address that should receive the reservations
  const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL || senderEmail;

  const isRoomBooking = data.source === "rooms-booking-form";
  const htmlContent = `
    <div style="font-family: sans-serif; color: #333;">
      <h2 style="color: #4A5D3E;">${isRoomBooking ? "New Room Booking Request" : "New Reservation Request"}</h2>
      <p><strong>Full Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      ${isRoomBooking ? `<p><strong>Room:</strong> ${data.room || "N/A"}</p>` : `<p><strong>Guests:</strong> ${data.guests || "N/A"}</p><p><strong>Room Preference:</strong> ${data.roomPreference || "No preference"}</p>`}
      <p><strong>Check-in:</strong> ${data.checkIn}</p>
      <p><strong>Check-out:</strong> ${data.checkOut}</p>
      ${data.specialOccasion && data.specialOccasion !== "none" ? `<p><strong>Special Occasion:</strong> ${data.specialOccasion}</p>` : ""}
      <br/>
      <p><strong>${isRoomBooking ? "Extras & Special Requests" : "Extra Message"}:</strong></p>
      <p style="white-space: pre-wrap;">${(isRoomBooking ? data.extras : data.message) || "None"}</p>
    </div>
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        sender: { name: "Riad Della Website", email: senderEmail },
        to: [{ email: recipientEmail }],
        subject: isRoomBooking ? `Room Booking Request – ${data.room} – ${data.fullName}` : `New Reservation Request – ${data.fullName}`,
        htmlContent,
        replyTo: { email: data.email, name: data.fullName },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error:", errorData);
      return { success: false, error: "Failed to send email." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending reservation email:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
