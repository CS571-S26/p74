import DoctorProfile from "./components/DoctorProfile";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Problems />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <DoctorProfile />
      <FAQ />
    </div>
  );
}
