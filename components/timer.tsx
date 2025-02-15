import { TimerIcon } from "lucide-react";
import React from "react";

type TimerProps = {
  timerLeft: number;
};

export default function Timer({ timerLeft }: TimerProps) {
  return (
    <div className="flex items-center justify-center space-x-2 text-2xl font-semibold text-gray-800 mb-8">
      <TimerIcon className="h-5 w-5" />
      <span>{timerLeft}s</span>
    </div>
  );
}
