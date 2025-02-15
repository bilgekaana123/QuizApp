"use client";
import { useEffect, useState } from "react";
import { gameStateType } from "@/types/quiz";
import GameOver from "@/components/game-over";
import QuestionCard from "@/components/question-card";
import StartScreen from "@/components/start-screen";
import { QuestionData } from "@/data/questions";
import Timer from "@/components/timer";
export default function Home() {
  const [gameState, setGameState] = useState<gameStateType>("start");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);

  useEffect(() => {
    let timer: number;
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === "playing") {
      setGameState("end");
    }

    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  function handleAnswer(index: number) {
    setSelectedAnswer(index);

    const isCorrect = index === QuestionData[currentQuestion].correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < QuestionData.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setGameState("end");
      }
    }, 2000);
  }

  return (
    <div className="min-h-screen py-12 px-4 mt-24 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto rounded-xl shadow-md  overflow-hidden md:max-w-2xl">
        {gameState === "start" && (
          <StartScreen
            onStart={() => {
              setGameState("playing");
              setTimeLeft(30);
              setScore(0);
              setCurrentQuestion(0);
              setSelectedAnswer(null);
            }}
          />
        )}
        {gameState === "playing" && (
          <div className="p-4">
            <Timer timerLeft={timeLeft} />
            <QuestionCard
              question={QuestionData[currentQuestion]}
              onAnswerSelect={handleAnswer}
              selectedAnswer={selectedAnswer}
              totalQuestions={QuestionData.length}
              currentQuestion={currentQuestion}
            />
            <div className="mt-6 text-center text-gray-600">
              Score: {score}/{QuestionData.length}
            </div>
          </div>
        )}
        {gameState === "end" && (
          <GameOver
            onRestart={() => setGameState("start")}
            score={score}
            totalQuestions={QuestionData.length}
          />
        )}
      </div>
    </div>
  );
}
