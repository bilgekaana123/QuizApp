import { Play } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

type StartScreenProps = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="text-center p-8 mt-8">
      <h1 className="text-4xl font-bold mb-6">Quiz Game</h1>
      <p className=" mb-8">Test your knowledge!</p>
      <Button onClick={onStart} className="p-5" variant="default">
        <Play className="w-4 h-4" /> Start Quiz
      </Button>
    </div>
  );
}
