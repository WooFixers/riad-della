"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { format, startOfDay } from "date-fns";
import { CalendarIcon, Sparkles } from "lucide-react";
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
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { sendReservationEmail } from "@/app/actions/contact";

const ReservationForm = () => {
  const t = useTranslations("ReservationForm");
  const [submitted, setSubmitted] = useState(false);
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);

  const formSchema = z.object({
    fullName: z.string().trim().min(1, t("fullNameRequired")).max(100),
    email: z.string().trim().email(t("invalidEmail")).max(255),
    phone: z.string().trim().max(30).optional(),
    checkIn: z.date({ required_error: t("checkInRequired") }),
    checkOut: z.date({ required_error: t("checkOutRequired") }),
    guests: z.string().min(1, t("guestsRequired")),
    roomPreference: z.string().optional(),
    message: z.string().trim().max(2000).optional(),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      guests: "",
      roomPreference: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitted(true);
    try {
      const res = await sendReservationEmail({
        ...data,
        checkIn: format(data.checkIn, "PPP"),
        checkOut: format(data.checkOut, "PPP"),
      });

      if (res.success) {
        toast({ title: t("toastTitle"), description: t("toastDescription") });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Could not send reservation request. Please try again.",
          variant: "destructive",
        });
        setSubmitted(false);
      }
    } catch (e) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
      setSubmitted(false);
    }
  };

  return (
    <section id="reservation-form" className="py-20 lg:py-28">
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
          {/* Direct Booking Advantage Banner */}
          <div className="mb-8 rounded-2xl bg-secondary/70 border border-primary/20 p-4 sm:p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5 text-primary font-medium font-lora text-base">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>{t("directBenefitsTitle")}</span>
            </div>
            <p className="font-sourcesans text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t("directBenefitsDescription")}
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="fullName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fullName")}</FormLabel>
                    <FormControl><Input placeholder={t("fullNamePlaceholder")} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl><Input type="email" placeholder={t("emailPlaceholder")} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("phone")}</FormLabel>
                    <FormControl><Input placeholder={t("phonePlaceholder")} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="guests" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("guests")}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder={t("guestsPlaceholder")} /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <SelectItem key={n} value={String(n)}>{n} {n === 1 ? t("guest") : t("guestsPlural")}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

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

              <FormField control={form.control} name="roomPreference" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("roomPreference")}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder={t("noPreference")} /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="no-preference">{t("noPreference")}</SelectItem>
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

              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("message")}</FormLabel>
                  <FormControl><Textarea placeholder={t("messagePlaceholder")} rows={4} {...field} /></FormControl>
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

export default ReservationForm;
