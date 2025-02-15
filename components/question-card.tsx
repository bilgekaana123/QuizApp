import { QuestionType } from "@/types/quiz";
import { Button } from "./ui/button";
import { CheckIcon, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type QuestionCardProps = {
  question: QuestionType;
  onAnswerSelect: (index: number) => void;
  selectedAnswer: number | null;
  totalQuestions: number;
  currentQuestion: number;
};

export default function QuestionCard({
  question,
  onAnswerSelect,
  selectedAnswer,
  totalQuestions,
  currentQuestion,
}: QuestionCardProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>
      <p className="mb-4 text-gray-600">{question.question}</p>
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect =
            selectedAnswer !== null && index === question.correct;
          const isWrong = isSelected && !isCorrect;

          return (
            <Button
              onClick={() => selectedAnswer === null && onAnswerSelect(index)}
              variant="card"
              key={index}
              className={cn(
                "w-full p-6 rounded-lg border transition-all duration-300",
                selectedAnswer === null &&
                  "hover:bg-accent hover:text-accent-foreground",
                isCorrect && "bg-green-100 border-green-500",
                isWrong && "bg-red-100 border-red-500",
              )}
            >
              <div className="w-full flex items-center justify-between">
                <span>{option}</span>
                {isCorrect && <CheckIcon />}
                {isWrong && <XCircle />}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
