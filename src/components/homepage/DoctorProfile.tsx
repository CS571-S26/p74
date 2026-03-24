import { Award } from "lucide-react";
import drTrangImg from "../../assets/dr_trang.png";

const certifications = [
  "Uveitis Certification - International Uveitis Study Group (2022-2023)",
  "Intravitreal Injection Certification - Vietnam (2017)",
  "EURETINA Training - Cataract Surgery, Intravitreal Injection - France (2015)",
  "EURETINA Training - Uveitis, Diabetic Retinopathy - Germany (2013)",
  "Phaco Surgery Certification - Vietnam (2013)",
];

export default function DoctorProfile() {
  return (
    <section className="relative bg-brand-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-10">
        <div className="relative bg-gradient-to-br from-brand to-brand-dark rounded-3xl overflow-visible flex flex-col lg:flex-row lg:items-center">
          {/* Text content */}
          <div className="relative z-10 p-10 lg:p-16 lg:w-[60%]">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug mb-4 font-display">
              &ldquo;I find happiness in effectively treating my
              patients.&rdquo;
            </h2>
            <p className="text-blue-100 mb-2">
              MSc - Senior Physician{" "}
              <span className="text-white font-semibold">
                Huynh Khanh Trang
              </span>
            </p>

            <hr className="border-white/60 my-8" />

            <h3 className="text-white font-bold text-lg mb-5">
              Notable Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100 text-[15px] leading-relaxed">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-block mt-8 bg-transparent border border-white text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white hover:text-brand transition-all duration-200"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Doctor image (mobile) — under card content */}
          <div className="flex justify-center lg:hidden">
            <img
              src={drTrangImg}
              alt="Dr. Trang"
              className="h-150 w-auto object-contain drop-shadow-2xl"
            />
          </div>
          {/* Doctor image (desktop) - side by side*/}
          <div className="hidden lg:flex absolute right-8 bottom-0 w-[38%] items-end justify-center">
            <img
              src={drTrangImg}
              alt="Dr. Trang"
              className="relative z-10 h-[115%] w-auto object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
