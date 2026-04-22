"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { sendReservationEmail } from "@/app/actions/contact";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BookingDialogProps {
  children: React.ReactNode;
  onBeforeOpen?: () => void;
}

export function BookingDialog({ children, onBeforeOpen }: BookingDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const t = useTranslations("BookingDialog");

  const formSchema = z.object({
    fullName: z.string().trim().min(1, t("fullNameRequired")),
    email: z.string().trim().email(t("invalidEmail")),
    phone: z.string().trim().min(1, t("phoneRequired")),
    checkIn: z.date({ required_error: t("checkInRequired") }),
    checkOut: z.date({ required_error: t("checkOutRequired") }),
    guests: z.string().min(1, t("guestsRequired")),
    comment: z.string().trim().max(2000).optional(),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", email: "", phone: "", guests: "", comment: "" },
  });

  const handleOpenChange = (val: boolean) => {
    if (val && onBeforeOpen) onBeforeOpen();
    setOpen(val);
    if (!val) form.reset();
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const res = await sendReservationEmail({
        ...data,
        checkIn: format(data.checkIn, "PPP"),
        checkOut: format(data.checkOut, "PPP"),
        message: data.comment,
        source: "booking-dialog",
      });
      if (res.success) {
        toast({ title: t("toastTitle"), description: t("toastDescription") });
        setOpen(false);
        form.reset();
      } else {
        toast({ title: "Error", description: "Could not send your request. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "An unexpected error occurred.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-lora text-2xl font-medium">{t("title")}</DialogTitle>
          <DialogDescription className="font-sourcesans">{t("description")}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl><Input type="email" placeholder={t("emailPlaceholder")} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField control={form.control} name="checkIn" render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>{t("checkIn")}</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, "PPP") : t("selectDate")}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, "PPP") : t("selectDate")}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <FormField control={form.control} name="guests" render={({ field }) => (
              <FormItem>
                <FormLabel>{t("guests")}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder={t("guestsPlaceholder")} /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="comment" render={({ field }) => (
              <FormItem>
                <FormLabel>{t("comment")}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t("commentPlaceholder")} rows={3} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              {submitting ? t("submitting") : t("submit")}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
