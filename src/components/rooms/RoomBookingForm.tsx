"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { format, startOfDay } from "date-fns";
import { CalendarIcon, ShieldCheck, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { sendReservationEmail } from "@/app/actions/contact";

const RoomBookingForm = () => {
  const t = useTranslations("RoomBookingForm");
  const [submitted, setSubmitted] = useState(false);
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);

  const formSchema = z.object({
    room: z.string().min(1, t("roomRequired")),
    fullName: z.string().trim().min(1, t("fullNameRequired")).max(100),
    phone: z.string().trim().min(1, t("phoneRequired")).max(30),
    email: z.string().trim().email(t("invalidEmail")).max(255),
    checkIn: z.date({ required_error: t("checkInRequired") }),
    checkOut: z.date({ required_error: t("checkOutRequired") }),
    specialOccasion: z.string().optional(),
    extras: z.string().trim().max(2000).optional(),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      room: "",
      fullName: "",
      phone: "",
      email: "",
      specialOccasion: "",
      extras: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitted(true);
    try {
      const res = await sendReservationEmail({
        ...data,
        checkIn: format(data.checkIn, "PPP"),
        checkOut: format(data.checkOut, "PPP"),
        source: "rooms-booking-form",
      });

      if (res.success) {
        toast({ title: t("toastTitle"), description: t("toastDescription") });
        form.reset();
        setSubmitted(false);
      } else {
        toast({ title: "Error", description: "Could not send request. Please try again.", variant: "destructive" });
        setSubmitted(false);
      }
    } catch {
      toast({ title: "Error", description: "An unexpected error occurred.", variant: "destructive" });
      setSubmitted(false);
    }
  };

  return (
    <section id="room-booking" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
          className="text-center mb-12"
        >
          <h2
            className="font-lora font-medium text-foreground leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            {t("heading")}
          </h2>
          <p className="font-sourcesans text-muted-foreground mt-3 leading-[1.7]">
            {t("subheading")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
        >
          {/* Direct Booking Guarantee */}
          <div className="mb-8 rounded-2xl bg-background/85 backdrop-blur-sm border border-primary/20 p-5 sm:p-6 shadow-[0_2px_12px_-4px_hsl(0_0%_0%/0.06)]">
            <div className="flex items-center gap-2 mb-4 text-primary font-medium font-lora text-base sm:text-lg">
              <Sparkles className="w-5 h-5 flex-shrink-0" />
              <span>{t("directBenefitsTitle")}</span>
            </div>
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-secondary/60">
              <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-sourcesans text-sm font-semibold text-foreground">{t("bestPriceTitle")}</p>
                <p className="font-sourcesans text-xs text-muted-foreground mt-0.5 leading-relaxed">{t("bestPriceSubtitle")}</p>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Room selection */}
              <FormField control={form.control} name="room" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("room")}</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder={t("roomPlaceholder")} /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="lina">{t("roomLina")}</SelectItem>
                      <SelectItem value="maya">{t("roomMaya")}</SelectItem>
                      <SelectItem value="amel">{t("roomAmel")}</SelectItem>
                      <SelectItem value="asma">{t("roomAsma")}</SelectItem>
                      <SelectItem value="della">{t("roomDella")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="fullName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fullName")}</FormLabel>
                    <FormControl><Input placeholder={t("fullNamePlaceholder")} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("phone")}</FormLabel>
                    <FormControl><Input placeholder={t("phonePlaceholder")} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              {/* Email */}
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl><Input type="email" placeholder={t("emailPlaceholder")} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="checkIn" render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>{t("checkIn")}</FormLabel>
                    <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : t("selectDate")}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                            if (date) {
                              setCheckInOpen(false);
                              const currentCheckOut = form.getValues("checkOut");
                              if (currentCheckOut && currentCheckOut <= date) {
                                form.setValue("checkOut", undefined as unknown as Date);
                              }
                              setTimeout(() => {
                                setCheckOutOpen(true);
                              }, 150);
                            }
                          }}
                          disabled={(date) => date < startOfDay(new Date())}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="checkOut" render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>{t("checkOut")}</FormLabel>
                    <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : t("selectDate")}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          defaultMonth={field.value || form.getValues("checkIn") || new Date()}
                          onSelect={(date) => {
                            field.onChange(date);
                            if (date) {
                              setCheckOutOpen(false);
                            }
                          }}
                          disabled={(date) => {
                            const checkIn = form.getValues("checkIn");
                            if (checkIn) {
                              return date <= checkIn;
                            }
                            return date < startOfDay(new Date());
                          }}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              {/* Special occasion */}
              <FormField control={form.control} name="specialOccasion" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("specialOccasion")}</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder={t("noOccasion")} /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="none">{t("noOccasion")}</SelectItem>
                      <SelectItem value="birthday">{t("birthday")}</SelectItem>
                      <SelectItem value="anniversary">{t("anniversary")}</SelectItem>
                      <SelectItem value="honeymoon">{t("honeymoon")}</SelectItem>
                      <SelectItem value="other">{t("other")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Extras */}
              <FormField control={form.control} name="extras" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("extras")}</FormLabel>
                  <FormControl><Textarea placeholder={t("extrasPlaceholder")} rows={4} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" size="lg" className="w-full" disabled={submitted}>
                {submitted ? t("submitted") : t("submit")}
              </Button>

              <p className="font-sourcesans text-sm text-muted-foreground text-center">
                {t("footer")}
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomBookingForm;
