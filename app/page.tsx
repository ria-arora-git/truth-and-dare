"use client";

import { useState } from "react";
import NameInput from "./components/NameInput";
import Spinner from "./components/Spinner";
import TruthOrDare from "./components/TruthOrDare";


export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [selectedParticipant, setSelectedParticipant] = useState<string | null>(null);
  const [gamePhase, setGamePhase] = useState<"input" | "spin" | "truthOrDare">("input");

  const handleNamesSubmit = (names: string[]) => {
    setParticipants(names);
    setGamePhase("spin");
  };

  const handleSpinDone = (name: string) => {
    setSelectedParticipant(name);
    setGamePhase("truthOrDare");
  };

  const resetGame = () => {
    setSelectedParticipant(null);
    setGamePhase("spin");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">🎉 Truth or Dare</h1>
      {gamePhase === "input" && <NameInput onSubmit={handleNamesSubmit} />}
      {gamePhase === "spin" && <Spinner participants={participants} onSpinDone={handleSpinDone} />}
      {gamePhase === "truthOrDare" && selectedParticipant && (
        <TruthOrDare participant={selectedParticipant} onNext={resetGame} />
      )}
    </main>
  );
}
