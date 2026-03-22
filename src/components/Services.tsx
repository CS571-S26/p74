import { ArrowRight } from "lucide-react"
import Header from "./Header"

const services = [
    {
        title: "Professional Eye Examination and Surgery",
        description:
            "Dr. Trang Eye Clinic provides comprehensive eye care services, including consultation, examination, diagnosis, treatment, and preventive guidance for eye diseases or eye conditions related to systemic diseases. Cataract surgery is performed using the Phaco method with artificial intraocular lens implantation tailored to each patient.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format",
        imageAlt: "Comprehensive eye examination",
    },
    {
        title: "On-site Vision Testing and Eyeglass Prescription",
        description:
            "Our experienced refraction technicians use modern equipment to test vision, accurately determine lens power, and diagnose refractive errors. We also offer consultation and custom eyeglass services to meet your needs.",
        image: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=600&auto=format",
        imageAlt: "Vision testing",
    },
    {
        title: "Online Consultation",
        description:
            "Our online consultation service connects you with experienced ophthalmologists to discuss your concerns and receive the most suitable solutions, minimizing the need for in-person visits.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format",
        imageAlt: "Online consultation",
    },
    {
        title: "Home Examination and Transportation",
        description:
            "To best serve patients with mobility difficulties or those whose families cannot arrange transportation, we will soon launch a safe and convenient home examination and patient transport service, saving you time and effort.",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format",
        imageAlt: "Home examination",
    },
]

export default function Services() {
    return (
        <section className="relative bg-gradient-to-b from-white to-brand-light py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <Header subtitle="Dr. Trang Services" titleFirst="Let us take care of" titleSecond="your eyes!" />

                {/* Service items */}
                <div className="space-y-24">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col ${idx % 2 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-30`}
                        >
                            {/* Image */}
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                                    <img
                                        src={service.image}
                                        alt={service.imageAlt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-display lg:max-w-md font-medium">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 lg:max-w-md">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-brand transition-colors"
                                >
                                    View details
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
