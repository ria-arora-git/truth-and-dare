"use client";

import { useState } from "react";

export default function NameInput({ onSubmit }: { onSubmit: (names: string[]) => void }) {
  const [input, setInput] = useState("");
  const [names, setNames] = useState<string[]>([]);

  const handleAdd = () => {
    if (input.trim() && !names.includes(input.trim())) {
      setNames([...names, input.trim()]);
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleStart = () => {
    if (names.length > 1) onSubmit(names);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Enter name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Name
      </button>
      <ul className="list-disc list-inside text-left">
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button
        onClick={handleStart}
        disabled={names.length < 2}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
      >
        Start Game
      </button>
    </div>
  );
}
