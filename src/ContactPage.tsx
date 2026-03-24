import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Header from "./components/ui/Header";
import AppointmentForm from "./components/appointment/AppointmentForm";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: "0913 963 003",
    href: "tel:0913963003",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "contact@drtrang.vn",
    href: "mailto:contact@drtrang.vn",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat: 5:00 PM - 8:00 PM",
  },
  {
    icon: MapPin,
    title: "Address",
    detail: "Dr. Trang Eye Clinic, Ho Chi Minh City, Vietnam",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-brand-light pt-36 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-10">
        <Header
          subtitle="Contact Us"
          titleFirst="Get in touch with"
          titleSecond="Dr. Trang Eye Clinic"
          description="Schedule your visit today. We look forward to caring for your eyes."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-brand transition-colors"
                    >
                      {item.detail}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Google Map */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Dr. Trang Eye Clinic Location"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=university of wisconsin&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
