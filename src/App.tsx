import "./App.css";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import DoctorProfile from "./components/DoctorProfile";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <NavBar />
      <Hero />
      <Problems />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <DoctorProfile />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
