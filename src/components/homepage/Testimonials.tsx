import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Grainient from "../ui/Grainient";

const testimonials = [
  {
    title: "Medical talent and enthusiasm",
    content:
      "Dr. Trang is very professional and truly cares about each patient. My family always trusts the doctor's expertise, and we are grateful that she has always taken care of our family's eyes.",
    name: "Minh Tri",
  },
  {
    title: "Dedicated and responsible doctor",
    content:
      "Thank you to the doctor with great medical ethics, excellent expertise, and a gentle voice, always dedicated to the profession and to patients. These are the most precious qualities of Dr. Trang. Wishing you good health and success in life.",
    name: "Hong Nhung",
  },
  {
    title: "Highly skilled doctor",
    content:
      "Dr. Trang is the most dedicated and highly skilled eye doctor I have ever met. I suffered from dry eyes and visited almost every eye hospital, but my condition didn't improve much. Thanks to the doctor, my eyes have gotten much better.",
    name: "Tu Phong",
  },
  {
    title: "Skilled and dedicated doctor",
    content:
      "Dr. Trang is highly skilled and dedicated to treating patients, truly deserving of the title 'a good doctor is like a loving mother.' Thank you so much, doctor!",
    name: "Qui Tam",
  },
  {
    title: "Trusted eye care",
    content:
      "The doctor is very dedicated and explains everything clearly and understandably. My mother went for an exam today and has never met a doctor like this before. Very satisfied with the service and care.",
    name: "Pham Minh",
  },
  {
    title: "Quality service",
    content:
      "Excellent service. The staff's welcome was warm and professional. Work is done carefully and accurately. Very trustworthy.",
    name: "Nguyen Anh",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#93c5fd"
          color2="#3b82f6"
          color3="#dbeafe"
          timeSpeed={0.5}
          grainAmount={0.08}
          contrast={1.3}
          saturation={1.1}
          warpSpeed={1.5}
          warpAmplitude={60}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-white/60 text-5xl md:text-6xl lg:text-7xl leading-none font-bold select-none">
              &ldquo;
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display drop-shadow-sm">
              Customer experience
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-white/50 text-gray-800 flex items-center justify-center hover:bg-white/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-white/50 text-gray-800 flex items-center justify-center hover:bg-white/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[340px] md:w-[400px] bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 snap-start shadow-lg shadow-blue-900/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t.title}
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                {t.content}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand-dark font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="font-semibold text-gray-900 text-sm">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
