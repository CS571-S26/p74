import { useState } from "react";
import DoctorProfile from "./components/homepage/DoctorProfile";
import FAQ from "./components/homepage/FAQ";
import Hero from "./components/homepage/Hero";
import Problems from "./components/homepage/Problems";
import Services from "./components/homepage/Services";
import Testimonials from "./components/homepage/Testimonials";
import WhyChooseUs from "./components/homepage/WhyChooseUs";
import AppointmentModal from "./components/appointment/AppointmentModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Hero onBookAppointment={() => setModalOpen(true)} />
      <Problems />
      <Services />
      <WhyChooseUs onBookAppointment={() => setModalOpen(true)} />
      <Testimonials />
      <DoctorProfile />
      <FAQ />
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
