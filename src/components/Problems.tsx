import { useState, useEffect } from "react";
import { Heart, Eye, MapPin, Glasses, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";

interface Problem {
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  color: string;
  iconColor: string;
}

const problems: Problem[] = [
  {
    icon: Heart,
    title: "Systemic diseases affecting your eyes",
    shortTitle: "Systemic Diseases",
    description:
      "Conditions like high blood pressure, diabetes, hyperthyroidism, and high cholesterol can cause dangerous eye complications that only a thorough eye exam can detect.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format",
    color: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    icon: Eye,
    title: "Eye diseases & conditions",
    shortTitle: "Eye Diseases",
    description:
      "Refractive errors, conjunctivitis, corneal issues, cataracts, glaucoma, retinal diseases, uveitis, and other eye conditions can cause discomfort and reduce your quality of life.",
    image:
      "https://images.unsplash.com/photo-1628088061640-9924940abb99?q=80&w=2070&auto=format",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: MapPin,
    title: "Difficulty traveling to a clinic",
    shortTitle: "Travel Barriers",
    description:
      "If you or your loved ones are elderly, have mobility challenges, health issues, or limited transportation, getting to a clinic can feel like an overwhelming obstacle.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format",
    color: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    icon: Glasses,
    title: "Finding trustworthy eyewear",
    shortTitle: "Reliable Eyewear",
    description:
      "Refractive errors like nearsightedness, farsightedness, and astigmatism affect all ages, but finding a place with accurate prescriptions and quality lenses isn't always easy.",
    image:
      "https://plus.unsplash.com/premium_photo-1661587216211-7d68c0864a05?q=80&w=2070&auto=format",
    color: "bg-purple-100",
    iconColor: "text-purple-500",
  },
];

export default function Problems() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % problems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  return (
    <section className="relative bg-brand-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Header
          subtitle="Common Problems"
          titleFirst="Are you facing any of"
          titleSecond="these issues?"
        />

        {/* Desktop: Horizontal Accordion */}
        <div
          className="hidden lg:flex gap-3 h-[480px] rounded-2xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {problems.map((problem, idx) => {
            const isActive = idx === activeIndex;
            return (
              <motion.div
                key={problem.shortTitle}
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                animate={{ flex: isActive ? 4 : 1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {/* Background image */}
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* Collapsed: vertical label */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span
                        className="text-white font-bold text-lg whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {problem.shortTitle}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded: full content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="absolute bottom-0 left-0 right-0 p-8"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <problem.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {problem.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed text-[15px] max-w-lg">
                        {problem.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Simple card stack */}
        <div className="lg:hidden grid gap-6 max-w-xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className={`${problem.color} rounded-2xl p-8`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <problem.icon className={`w-5 h-5 ${problem.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {problem.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
