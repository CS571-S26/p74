import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";

const services = [
  "Professional Eye Examination and Surgery",
  "On-site Vision Testing and Eyeglass Prescription",
  "Online Consultation",
  "Home Examination and Transportation",
] as const;

const appointmentSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.email("Please enter a valid email"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a date"),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const inputClasses =
  "w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = (_data: AppointmentFormData) => {
    setSubmitted(true);
    // TODO: send data to backend (or firebase)
  };

  const handleReset = () => {
    setSubmitted(false);
    reset();
  };

  // TODO: loading spinner
  
  // Success message
  if (submitted) {
    return (
      <div className="text-center flex flex-col items-center justify-center min-h-[400px] py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
          Appointment Request Sent!
        </h3>
        <p className="text-gray-600 max-w-md mb-6">
          Thank you for booking with Dr. Trang Eye Clinic. We will contact you
          shortly to confirm your appointment.
        </p>
        <button
          onClick={handleReset}
          className="inline-block border border-brand text-brand font-semibold text-base px-8 py-3.5 rounded-full hover:bg-brand hover:text-white transition-all duration-200 cursor-pointer"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-semibold text-gray-900 mb-1.5"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          className={inputClasses}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-900 mb-1.5"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Your phone number"
            className={inputClasses}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-900 mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            className={inputClasses}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Service + Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-gray-900 mb-1.5"
          >
            Service
          </label>
          <select
            id="service"
            className={`${inputClasses} bg-white`}
            {...register("service")}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="preferredDate"
            className="block text-sm font-semibold text-gray-900 mb-1.5"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="preferredDate"
            className={inputClasses}
            {...register("preferredDate")}
          />
          {errors.preferredDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.preferredDate.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-900 mb-1.5"
        >
          Message / Notes{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Any additional information or concerns..."
          className={`${inputClasses} resize-none`}
          {...register("message")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-brand hover:bg-brand-hover text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-brand-muted transition-all duration-200 cursor-pointer"
      >
        Book Appointment
      </button>
    </form>
  );
}
