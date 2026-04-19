import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle, MapPin, UserCheck, Award } from "lucide-react";
import Header from "./components/ui/Header";
import Grainient from "./components/ui/Grainient";
import drTrangImg from "./assets/dr_trang.png";

const careerItems = [
  {
    years: "2023 - Present",
    role: "Founder & Head of Clinic",
    institution: "Dr. Trang Eye Clinic",
  },
  {
    years: "2017 - 2023",
    role: "Ophthalmologist",
    institution: "HCMC Eye Hospital",
  },
  {
    years: "2013 - 2017",
    role: "Attending Physician - Ophthalmology Dept.",
    institution: "University of Medicine and Pharmacy Hospital, HCMC",
  },
  {
    years: "2008 - 2013",
    role: "Resident Physician",
    institution: "International Eye Hospital",
  },
];

const achievements = [
  "Over 15 years treating complex eye conditions",
  "Member of the Vietnam Ophthalmology Association",
  "Member of the Asia-Pacific Uveitis Research Group",
];

const certifications = [
  {
    title: "Uveitis Certification - International Uveitis Study Group",
    year: "2022-2023",
    image: "https://placehold.co/80x80?text=Cert",
  },
  {
    title: "Intravitreal Injection Certification - Vietnam",
    year: "2017",
    image: "https://placehold.co/80x80?text=Cert",
  },
  {
    title: "EURETINA - Cataract Surgery & Intravitreal Injection, France",
    year: "2015",
    image: "https://placehold.co/80x80?text=Cert",
  },
  {
    title: "EURETINA - Uveitis & Diabetic Retinopathy, Germany",
    year: "2013",
    image: "https://placehold.co/80x80?text=Cert",
  },
  {
    title: "Phaco Surgery Certification - Vietnam",
    year: "2013",
    image: "https://placehold.co/80x80?text=Cert",
  },
];

const equipment = [
  {
    name: "ZEISS PRIMUS 200 OCT",
    description: "Optical coherence tomography - high-resolution imaging of the retina and optic nerve.",
    image: "https://meceyeclinic.com/hubfs/raw_assets/public/Healthcare-bp/images/bp-images/faci-1.png",
  },
  {
    name: "Topcon KR-800",
    description: "Autorefractor - precisely measures refractive errors for accurate eyeglass prescriptions.",
    image: "https://meceyeclinic.com/hubfs/raw_assets/public/Healthcare-bp/images/bp-images/abt-faci-1.png",
  },
  {
    name: "ZEISS SL 115",
    description: "Slit-lamp biomicroscope - comprehensive examination of the cornea, lens, and anterior chamber.",
    image: "https://meceyeclinic.com/hubfs/raw_assets/public/Healthcare-bp/images/bp-images/abt-faci-4.png",
  },
  {
    name: "Keeler Vantage Plus",
    description: "Indirect ophthalmoscope - wide-field retinal examination for thorough fundus assessment.",
    image: "https://meceyeclinic.com/hubfs/raw_assets/public/Healthcare-bp/images/bp-images/abt-faci-3.png",
  },
  {
    name: "CSO Cobra HD",
    description: "HD digital fundus camera - captures and stores retinal images for long-term disease monitoring.",
    image: "https://meceyeclinic.com/hubfs/raw_assets/public/Healthcare-bp/images/bp-images/abt-faci-2.png",
  },
];

const clinicPhotos = [
  "https://images.unsplash.com/photo-1579488081688-3dbbbae7893e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNsaW5pY3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNsaW5pY3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1710074213374-e68503a1b795?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNsaW5pY3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675686363460-25aa1039e94b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNsaW5pY3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1630226040750-d934f017f0e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGNsaW5pY3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1579488085698-3aedc78582b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxjbGluaWN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1661723555220-c7580a83f490?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"experience" | "certifications">("experience");

  return (
    <div>
      {/* Blue header banner */}
      <section className="relative overflow-hidden min-h-[360px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Grainient
            color1="#7eb7f7"
            color2="#3b82f6"
            color3="#0062fe"
            timeSpeed={0.4}
            grainAmount={0.07}
            contrast={1.3}
            saturation={1.0}
            warpAmplitude={70}
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 pt-32 pb-16 text-center">
          <p className="text-brand-subtle font-semibold text-md uppercase tracking-wider mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white font-display leading-tight">
            Your Trusted Eye Clinic
          </h1>
        </div>
      </section>

      {/* Clinic intro content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="absolute -top-15 -left-4 text-8xl lg:text-9xl text-brand/20 font-bold font-display leading-none select-none pointer-events-none">
                &ldquo;
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display leading-snug mb-5">
                Patients - Our One and Only Priority!
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                That is the guiding principle of our clinic — we always strive to do what is best for every patient who walks through our door.
              </p>
              <p className="font-bold text-gray-900">- Dr. Huynh Khanh Trang</p>
            </div>

            {/* Right: description + bullets */}
            <div className="text-gray-600 text-md leading-relaxed space-y-6">
              <p>
                Founded in 2023, Dr. Trang Eye Clinic is committed to delivering specialized,
                compassionate eye care in a welcoming environment equipped with internationally-certified
                medical technology.
              </p>
              <ul className="space-y-3">
                {["Thorough examinations, never rushed", "Transparent pricing, no hidden fees", "Internationally-certified equipment"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clinic photos below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {["https://placehold.co/800x500?text=Clinic+Photo+1", "https://placehold.co/800x500?text=Clinic+Photo+2", "https://placehold.co/800x500?text=Clinic+Photo+3"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Clinic photo ${i + 1}`}
                className="rounded-2xl object-cover w-full h-56"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialist */}
      <section className="bg-brand-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-10">
          <Header
            subtitle="Our Specialist"
            titleFirst="The doctor who always"
            titleSecond="listens to your eyes"
          />

          <div className="mt-12 flex flex-col lg:flex-row gap-12 items-start">
            {/* Photo */}
            <div className="lg:w-2/5 flex flex-col items-center text-center">
              <img
                src={drTrangImg}
                alt="Dr. Huynh Khanh Trang"
                className="bg-white rounded-2xl object-cover object-top shadow-xl w-full max-w-sm mx-auto h-[420px]"
              />
              <h3 className="mt-5 text-xl font-bold text-gray-900 font-display">
                Huynh Khanh Trang
              </h3>
              <p className="text-brand font-semibold mt-1">MSc - Senior Physician</p>
            </div>

            {/* Tabbed content — white card */}
            <div className="lg:w-3/5 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Tab bar */}
              <div className="flex border-b border-gray-100">
                {(["experience", "certifications"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-6 py-4 text-lg font-semibold transition-all border-b-2 -mb-px cursor-pointer ${
                      activeTab === tab
                        ? "border-brand text-brand"
                        : "border-transparent text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    {tab === "experience"
                      ? <><UserCheck className="w-4 h-4" />Experience</>
                      : <><Award className="w-4 h-4" />Certifications</>
                    }
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="p-6 lg:p-8">
                {activeTab === "experience" && (
                  <div>
                    <div className="space-y-5">
                      {careerItems.map((item) => (
                        <div key={item.years} className="border-l-4 border-brand pl-4 text-md">
                          <span className="text-brand font-semibold text-sm">{item.years}</span>
                          <p className="text-gray-900 font-bold mt-0.5">{item.role}</p>
                          <p className="text-gray-500">{item.institution}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                        Key Achievements
                      </span>
                      <div className="h-px bg-gray-200 flex-1" />
                    </div>

                    <ul className="mt-5 space-y-3">
                      {achievements.map((a) => (
                        <li key={a} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-md">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "certifications" && (
                  <div className="space-y-4">
                    {certifications.map((cert) => (
                      <div key={cert.title} className="flex gap-4 items-center">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-gray-100"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 text-md leading-snug">
                            {cert.title}
                          </p>
                          <p className="text-brand text-sm font-medium mt-1">{cert.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Equipment */}
      <section className="bg-gradient-to-b from-white to-brand-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-10">
          <Header
            subtitle="Facilities"
            titleFirst="Diagnostic Equipment"
            titleSecond="State of the Art"
            description="We use cutting-edge medical equipment imported from leading manufacturers in the UK, USA, Germany, and Italy to ensure the best results in comprehensive eye exams and the treatment of complex eye conditions."
          />

          <div className="mt-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {equipment.slice(0, 3).map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-subtle/50 hover:shadow-lg transition-all duration-300"
                >
                  <img src={item.image} alt={item.name} className="bg-brand-muted w-full object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg font-display">{item.name}</h3>
                    <p className="text-gray-600 text-md leading-relaxed mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {equipment.slice(3).map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-subtle/50 hover:shadow-lg transition-all duration-300 w-full md:w-[calc(33.333%-12px)]"
                >
                  <img src={item.image} alt={item.name} className="bg-brand-muted w-full object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg font-display">{item.name}</h3>
                    <p className="text-gray-600 text-md leading-relaxed mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examination & Treatment Rooms */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-10">
          <Header
            subtitle="Facilities"
            titleFirst="Examination &"
            titleSecond="Treatment Rooms"
            description="Our treatment rooms meet international safety standards and are fully equipped for intravitreal procedures and retinal disease management."
          />

          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {clinicPhotos.slice(0, 6).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Clinic room ${i + 1}`}
                  className="rounded-2xl h-56 object-cover w-full"
                />
              ))}
            </div>
            <img
              src={clinicPhotos[6]}
              alt="Clinic room 7"
              className="rounded-2xl h-100 object-cover w-full mt-4"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-10">
          <div className="bg-gradient-to-br from-brand to-brand-dark rounded-3xl px-10 py-16 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
              Book Your Appointment Today
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Dr. Trang Eye Clinic - Ho Chi Minh City, Vietnam<br />
              Monday to Saturday, 5:00 PM - 8:00 PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand font-semibold rounded-full hover:bg-brand-light transition-colors shadow-lg"
              >
                Book Appointment
              </Link>
              <a
                href="tel:0913963003"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
