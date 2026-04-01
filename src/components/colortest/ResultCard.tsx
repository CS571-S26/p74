import { Eye, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { Link } from "react-router";
import type { QuizResult } from "./scoring";

interface ResultCardProps {
  result: QuizResult;
  onRetake: () => void;
}

const severityConfig = {
  none: {
    Icon: Eye,
    badgeClass: "bg-green-100",
    iconClass: "text-green-600",
  },
  mild: {
    Icon: Info,
    badgeClass: "bg-amber-100",
    iconClass: "text-amber-600",
  },
  moderate: {
    Icon: AlertCircle,
    badgeClass: "bg-orange-100",
    iconClass: "text-orange-600",
  },
  severe: {
    Icon: AlertTriangle,
    badgeClass: "bg-red-100",
    iconClass: "text-red-600",
  },
};

export default function ResultCard({ result, onRetake }: ResultCardProps) {
  const { Icon, badgeClass, iconClass } = severityConfig[result.severity];

  return (
    <div className="flex flex-col items-center text-center gap-6 py-4">
      {/* Icon badge */}
      <div
        className={`w-20 h-20 ${badgeClass} rounded-full flex items-center justify-center`}
      >
        <Icon className={`w-10 h-10 ${iconClass}`} />
      </div>

      {/* Title + description */}
      <div className="space-y-3">
        <h3 className="text-3xl font-bold text-gray-900 font-display">
          {result.title}
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
          {result.description}
        </p>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-lg w-full text-left">
        <p className="text-sm text-amber-800">
          <span className="font-semibold">Note:</span> This screening is not a
          clinical diagnosis. Accurate results depend on a calibrated display,
          proper lighting, and viewing without color-corrective lenses. For a
          definitive assessment, please consult an eye care professional.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <Link
          to="/contact"
          className="flex-1 inline-flex items-center justify-center bg-brand hover:bg-brand-hover text-white font-semibold text-base px-6 py-3.5 rounded-full shadow-lg shadow-brand-muted transition-all duration-200"
        >
          Book Eye Exam
        </Link>
        <button
          onClick={onRetake}
          className={"flex-1 inline-flex items-center justify-center border border-brand text-brand font-semibold text-base px-6 py-3.5 rounded-full hover:bg-brand hover:text-white transition-all duration-200 cursor-pointer"}
        >
          Retake Test
        </button>
      </div>
    </div>
  );
}
