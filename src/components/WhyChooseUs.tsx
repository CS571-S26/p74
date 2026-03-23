import { UserCheck, DollarSign, Cpu, Network } from "lucide-react";
import Header from "./Header";

const reasons = [
  {
    icon: UserCheck,
    title: "Highly Experienced Specialists",
    description:
      "Dr. Trang's ophthalmologists bring years of experience treating thousands of patients, with deep expertise to ensure the best possible eye care.",
    bg: "bg-green-100",
    iconBg: "bg-green-200",
    iconColor: "text-green-600",
    hoverBorder: "hover:border-green-300",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "At Dr. Trang, we value transparency in examination and treatment costs to ensure you receive the best value for your investment in eye health.",
    bg: "bg-amber-100",
    iconBg: "bg-amber-200",
    iconColor: "text-amber-600",
    hoverBorder: "hover:border-amber-300",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "All of our equipment is imported from the UK, USA, Germany, and Italy, meeting international standards to ensure the highest quality in diagnosis and treatment.",
    bg: "bg-blue-100",
    iconBg: "bg-blue-200",
    iconColor: "text-blue-600",
    hoverBorder: "hover:border-blue-300",
  },
  {
    icon: Network,
    title: "Big network of specialties",
    description:
      "Dr. Trang collaborates with numerous specialists both domestically and internationally to provide comprehensive care for patients with complex medical conditions.",
    bg: "bg-pink-100",
    iconBg: "bg-pink-200",
    iconColor: "text-pink-600",
    hoverBorder: "hover:border-pink-300",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-10">
        {/* Header */}
        <Header
          subtitle="Why choose Dr. Trang"
          titleFirst="Confident in our dedicated"
          titleSecond="and professional service"
        />

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className={`${reason.bg} rounded-2xl p-8 text-center min-h-[300px] flex flex-col justify-center border-2 border-transparent ${reason.hoverBorder} transition-colors duration-300`}
            >
              <div
                className={`w-14 h-14 ${reason.iconBg} rounded-full flex items-center justify-center mx-auto mb-5`}
              >
                <reason.icon className={`w-6 h-6 ${reason.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-brand hover:bg-brand-hover text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-brand-muted transition-all duration-200"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
