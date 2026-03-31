import type { IshiharaPlate } from "./ishiharaData";

export type ResultCategory =
  | "normal"
  | "mild-red-green"
  | "moderate-red-green"
  | "severe-protan"
  | "severe-deutan";

export type Severity = "none" | "mild" | "moderate" | "severe";

export interface QuizResult {
  category: ResultCategory;
  title: string;
  description: string;
  severity: Severity;
}

const RESULT_MAP: Record<ResultCategory, QuizResult> = {
  normal: {
    category: "normal",
    title: "Normal Color Vision",
    description:
      "Your responses are consistent with normal color vision. You correctly identified the standard test plates.",
    severity: "none",
  },
  "mild-red-green": {
    category: "mild-red-green",
    title: "Possible Mild Red-Green Deficiency",
    description:
      "You missed one screening plate, which may suggest a mild red-green color deficiency. This is quite common and often goes unnoticed in daily life. A formal evaluation can confirm it.",
    severity: "mild",
  },
  "moderate-red-green": {
    category: "moderate-red-green",
    title: "Likely Moderate Red-Green Deficiency",
    description:
      "Your responses suggest a moderate difficulty distinguishing red and green tones. This is a common inherited condition and a professional evaluation is recommended.",
    severity: "moderate",
  },
  "severe-protan": {
    category: "severe-protan",
    title: "Likely Protanopia (Red-Weak)",
    description:
      "Your pattern of responses suggests a significant red-green deficiency with reduced sensitivity to red light, consistent with protanopia. We recommend a formal clinical evaluation.",
    severity: "severe",
  },
  "severe-deutan": {
    category: "severe-deutan",
    title: "Likely Deuteranopia (Green-Weak)",
    description:
      "Your pattern of responses suggests a significant red-green deficiency with reduced sensitivity to green light, consistent with deuteranopia. We recommend a formal clinical evaluation.",
    severity: "severe",
  },
};

export function scoreQuiz(
  plates: IshiharaPlate[],
  answers: Record<number, string>,
): QuizResult {
  let screeningErrors = 0;
  let protanErrors = 0;
  let deutanErrors = 0;

  for (const plate of plates) {
    const answer = answers[plate.id];
    const isCorrect = answer === plate.normalAnswer;

    if (!isCorrect) {
      // For diagnostic plates, check which deficiency the answer matches
      if (plate.protanAnswer || plate.deutanAnswer) {
        if (answer === plate.protanAnswer) {
          protanErrors++;
        } else if (answer === plate.deutanAnswer) {
          deutanErrors++;
        } else {
          // Wrong answer that doesn't match either pattern, count as general
          screeningErrors++;
        }
      } else {
        screeningErrors++;
      }
    }
  }

  const totalErrors = screeningErrors + protanErrors + deutanErrors;

  if (totalErrors === 0) return RESULT_MAP["normal"];
  if (totalErrors === 1) return RESULT_MAP["mild-red-green"];
  if (totalErrors <= 3) return RESULT_MAP["moderate-red-green"];

  if (protanErrors > deutanErrors) return RESULT_MAP["severe-protan"];
  if (deutanErrors > protanErrors) return RESULT_MAP["severe-deutan"];

  // Tie, default to general severe
  return RESULT_MAP["moderate-red-green"];
}
