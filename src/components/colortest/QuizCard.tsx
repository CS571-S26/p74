import { useState } from "react";
import { motion } from "framer-motion";
import type { IshiharaPlate } from "./ishiharaData";

interface QuizCardProps {
  plate: IshiharaPlate;
  plateNumber: number;
  totalPlates: number;
  onAnswer: (answer: string) => void;
  isLast: boolean;
}

export default function QuizCard({
  plate,
  plateNumber,
  totalPlates,
  onAnswer,
  isLast,
}: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleConfirm = () => {
    if (!selected) return;
    onAnswer(selected);
    setSelected(null);
  };

  const progress = (plateNumber / totalPlates) * 100;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Progress bar */}
      <div className="w-full max-w-md">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>
            Plate {plateNumber} of {totalPlates}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Plate image */}
      <div className="w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
        <img
          key={plate.id}
          src={plate.imageUrl}
          alt={`Ishihara plate ${plate.id}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Question */}
      <p className="text-xl font-semibold text-gray-900 text-center">
        {plate.question}
      </p>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {plate.options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={[
              "px-4 py-3 rounded-xl text-base font-medium border transition-colors duration-150 cursor-pointer",
              selected === option
                ? "bg-brand text-white border-brand"
                : "bg-white border-gray-200 text-gray-900 hover:border-brand hover:bg-brand-light",
            ].join(" ")}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next / See Results button */}
      <button
        onClick={handleConfirm}
        disabled={!selected}
        className="w-full max-w-sm bg-brand hover:bg-brand-hover text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-brand-muted transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
      >
        {isLast ? "See Results" : "Next"}
      </button>
    </div>
  );
}
