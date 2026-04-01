import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import Header from "./components/ui/Header";
import QuizCard from "./components/colortest/QuizCard";
import ResultCard from "./components/colortest/ResultCard";
import {
  PLATES,
  type IshiharaPlate,
} from "./components/colortest/ishiharaData";
import { scoreQuiz, type QuizResult } from "./components/colortest/scoring";

type QuizPhase = "intro" | "quiz" | "result";

const tips = [
  "View this test in a well-lit room — avoid dim or artificial yellow lighting",
  "Remove any color-corrective contact lenses before starting",
  "Turn off Night Shift, blue-light filters, or display color profiles",
  "Sit at a normal reading distance from your screen",
];

const QUIZ_LENGTH = 10;

export default function ColorTestPage() {
  const [phase, setPhase] = useState<QuizPhase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [quizPlates, setQuizPlates] = useState<IshiharaPlate[]>([]);

  const handleStart = () => {
    // Randomly pick QUIZ_LENGTH questions
    const shuffled = [...PLATES].sort(() => Math.random() - 0.5);
    setQuizPlates(shuffled.slice(0, QUIZ_LENGTH));

    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
    setPhase("quiz");
  };

  const handleAnswer = (answer: string) => {
    const plate = quizPlates[currentIndex];
    const newAnswers = { ...answers, [plate.id]: answer };
    setAnswers(newAnswers);
    
    // advance to next question
    if (currentIndex + 1 < quizPlates.length) {
      setCurrentIndex(currentIndex + 1);
    } else { // show result (last question)
      const quizResult = scoreQuiz(quizPlates, newAnswers);
      setResult(quizResult);
      setPhase("result");
    }
  };

  const handleRetake = () => {
    setPhase("intro");
  };

  return (
    <section className="bg-brand-light pt-36 pb-20 lg:pb-28 min-h-screen">
      <div className="max-w-3xl mx-auto px-10">
        <Header
          subtitle="Color Vision Screening"
          titleFirst="Test your color vision"
          titleSecond=""
          description={`A quick ${QUIZ_LENGTH}-plate screening based on the Ishihara color perception test.`}
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <AnimatePresence mode="wait">
            {phase === "intro" && (
              <motion.div
                key="intro"
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center gap-8"
              >
                <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center">
                  <Eye className="w-10 h-10 text-brand" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 font-display">
                    How the test works
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                    You will be shown {QUIZ_LENGTH} circular plates, each
                    containing a hidden number or pattern made of colored dots.
                    Simply select the answer that best matches what you see.
                  </p>
                </div>

                <div className="bg-brand-light rounded-2xl p-6 w-full text-left space-y-3">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Before you start
                  </p>
                  <ul className="space-y-2">
                    {tips.map((tip) => (
                      <li
                        key={tip}
                        className="flex items-start gap-2.5 text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleStart}
                  className="w-full max-w-xs bg-brand hover:bg-brand-hover text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-brand-muted transition-all duration-200 cursor-pointer"
                >
                  Start Test
                </button>
              </motion.div>
            )}

            {phase === "quiz" && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <QuizCard
                  plate={quizPlates[currentIndex]}
                  plateNumber={currentIndex + 1}
                  totalPlates={quizPlates.length}
                  onAnswer={handleAnswer}
                  isLast={currentIndex + 1 === quizPlates.length}
                />
              </motion.div>
            )}

            {phase === "result" && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ResultCard result={result} onRetake={handleRetake} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
