import { TrophyIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

type GameOverProps = {
  onRestart: () => void;
  score: number;
  totalQuestions: number;
};

export default function GameOver({
  onRestart,
  score,
  totalQuestions,
}: GameOverProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  return (
    <div className="p-8 text-center">
      <TrophyIcon className="h-14 w-14 mx-auto text-yellow-500 mb-4" />
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Game Over</h2>
      <p className="text-lg text-gray-600">
        Final Score : {score}/{totalQuestions}{" "}
      </p>
      <p className="mt-2 text-gray-600">({percentage}% correct)</p>
      <Button onClick={onRestart} className="mt-6 p-5">
        Play Again
      </Button>
    </div>
  );
}
