import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Apartment } from "@shared/schema";
import { Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

const bookingFormSchema = z.object({
  name: z.string().min(2, "Введите ваше имя"),
  phone: z.string().min(5, "Введите номер телефона"),
  email: z.string().email("Введите корректный email").optional().or(z.literal("")),
  apartmentSlug: z.string().optional().or(z.literal("")),
  checkIn: z.string().optional().or(z.literal("")),
  checkOut: z.string().optional().or(z.literal("")),
  guests: z.coerce.number().min(1).max(10).optional(),
  message: z.string().optional().or(z.literal("")),
});

type BookingForm = z.infer<typeof bookingFormSchema>;

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  apartmentSlug?: string;
  apartments?: Apartment[];
}

export function BookingDialog({ open, onOpenChange, apartmentSlug, apartments }: BookingDialogProps) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<BookingForm>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      apartmentSlug: apartmentSlug || "",
      checkIn: "",
      checkOut: "",
      guests: 1,
      message: "",
    },
  });

  const selectedSlug = watch("apartmentSlug");

  const mutation = useMutation({
    mutationFn: async (data: BookingForm) => {
      return apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время!",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте ещё раз.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingForm) => {
    mutation.mutate(data);
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setSubmitted(false);
      reset();
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl tracking-wider" data-testid="text-booking-title">
            {submitted ? "СПАСИБО" : "БРОНИРОВАНИЕ"}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-2" data-testid="text-booking-success">
              Ваша заявка успешно отправлена!
            </p>
            <p className="text-sm text-muted-foreground">
              Мы свяжемся с вами в ближайшее время для подтверждения бронирования.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label className="text-xs tracking-wider">ИМЯ *</Label>
              <Input
                {...register("name")}
                placeholder="Ваше имя"
                data-testid="input-name"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <Label className="text-xs tracking-wider">ТЕЛЕФОН *</Label>
              <Input
                {...register("phone")}
                placeholder="+7 (___) ___-__-__"
                data-testid="input-phone"
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <Label className="text-xs tracking-wider">EMAIL</Label>
              <Input
                {...register("email")}
                type="email"
                placeholder="email@example.com"
                data-testid="input-email"
              />
            </div>

            {apartments && apartments.length > 0 && (
              <div>
                <Label className="text-xs tracking-wider">АПАРТАМЕНТЫ</Label>
                <Select
                  value={selectedSlug || apartmentSlug || ""}
                  onValueChange={(val) => setValue("apartmentSlug", val)}
                >
                  <SelectTrigger data-testid="select-apartment">
                    <SelectValue placeholder="Выберите апартаменты" />
                  </SelectTrigger>
                  <SelectContent>
                    {apartments.map((apt) => (
                      <SelectItem key={apt.slug} value={apt.slug} data-testid={`option-${apt.slug}`}>
                        {apt.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs tracking-wider">ЗАЕЗД</Label>
                <Input
                  {...register("checkIn")}
                  type="date"
                  data-testid="input-checkin"
                />
              </div>
              <div>
                <Label className="text-xs tracking-wider">ВЫЕЗД</Label>
                <Input
                  {...register("checkOut")}
                  type="date"
                  data-testid="input-checkout"
                />
              </div>
            </div>

            <div>
              <Label className="text-xs tracking-wider">СООБЩЕНИЕ</Label>
              <Textarea
                {...register("message")}
                placeholder="Ваши пожелания..."
                className="resize-none"
                rows={3}
                data-testid="input-message"
              />
            </div>

            <Button
              type="submit"
              className="w-full tracking-[0.15em] text-xs"
              disabled={mutation.isPending}
              data-testid="button-submit-booking"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ОТПРАВКА...
                </>
              ) : (
                "ОТПРАВИТЬ ЗАЯВКУ"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
