"use client";

import { useState } from "react";

const truths = [
  "What’s your biggest fear?",
  "What’s a secret you’ve never told anyone?",
  "What’s the worst lie you’ve ever told?",
  "What’s your guilty pleasure?",
];

const dares = [
    "Sing a song of your choice along with 2 people that you yourself can pick.",
    "Do 20 push-ups or text 10 people that you need a favor from them.",
    "Do a silly mimic of anyone present here for 1 minute.",
    "hold the hand of the person next to you and say the cringiest pickup line you ever heard.",
    "post on your instagram story that 'love is in the air'",
    "text someone that 'i like feet' to anyone who is in not present here.",
    "hold hand of anyone of opposite gender present here for 2 minutes",
    "send a voice note to anyone saying 'meow meow meow'",
    ""
];

export default function TruthOrDare({
  participant,
  onNext,
}: {
  participant: string;
  onNext: () => void;
}) {
  const [choice, setChoice] = useState<"truth" | "dare" | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const choose = (type: "truth" | "dare") => {
    setChoice(type);
    const list = type === "truth" ? truths : dares;
    const item = list[Math.floor(Math.random() * list.length)];
    setResult(item);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-2">{participant}, Truth or Dare?</h2>
      {!choice ? (
        <div className="space-x-4 mt-4">
          <button onClick={() => choose("truth")} className="bg-yellow-500 px-4 py-2 rounded text-white">
            Truth
          </button>
          <button onClick={() => choose("dare")} className="bg-red-600 px-4 py-2 rounded text-white">
            Dare
          </button>
        </div>
      ) : (
        <>
          <p className="text-lg mt-4">{result}</p>
          <button onClick={onNext} className="mt-6 bg-green-600 px-4 py-2 text-white rounded">
            Next Round
          </button>
        </>
      )}
    </div>
  );
}
