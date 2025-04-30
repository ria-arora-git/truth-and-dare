"use client";

import { useState } from "react";

const truths = [
    "What’s your biggest fear?",
    "What’s a secret you’ve never told anyone?",
    "What’s the worst lie you’ve ever told?",
    "What’s your guilty pleasure?",
    "Choose two people from opposite gender present here you want in your life forever.",
    "Who's the most loving person you ever had in your life (except your parents).",
    "Choose a person from opposite gender with whom you can go on a candle light dinner.",
    "Whom do you feel have a crush on you, present in this room. (Coin flip)",
    "If you had to be stranded on an island with one person in this room, who would it be?",
    "Who here do you think would make the best partner in a relationship?",
    "If you had to give a rose to someone in this room right now, who would it be?",
    "Who here do you think is most likely to fall in love first?",
    "If you could swap lives with anyone in this room for a day, who would it be and why?",
    "Who in this room do you think is most flirtatious?",
    "If you had to write a love letter to someone here, who would you address it to?",
    "Who here would you choose to play your partner in a movie about your life?",
    "Who in this room do you think is hiding a secret crush?",
    "Who in this room would you kiss if you had the chance right now?",
    "Name one person here you’ve had a romantic or flirty thought about.",
    "If you had to share a bed with someone from this room, who would it be?",
    "Who here do you think would be the best kisser?",
    "If you had to go on a secret date with someone from this room, who would you pick?",
    "Who here do you think flirts the most—intentionally?",
    "If you had to choose someone here to be your 'situationship', who would it be?",
    "Have you ever imagined being in a relationship with someone in this room? If yes, who?",
    "Who in this room do you think is the most “dateable”?",
    "If you had to play 7 minutes in heaven with someone here, who would you choose?",
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
    "text 5 people ' can we please meet up tomorrow?'",
    "kiss the person to your left on the hand",
    "Send “I’m in the mood... guess for what?” to someone not in this room.",
    "Pretend to flirt with someone in the room for a full minute — like you’re trying to seduce them.",
    "Let someone from the opposite gender choose a flirty pick-up line and say it to you — in front of everyone.",
    "Send “What are you wearing?” to someone not in this room — no context.",
    "Let someone here write a flirty message and you have to send it to a random contact.",
    "Pick someone in this room and say out loud where you’d kiss them if you could.",
    "let everyone pick a person for you and sit with them for next half an hour",
    "go out of the room for 10 minutes",
    "Propose to a chair dramatically and get rejected.",
    "Hug 3 random people blindfolded",
    "Hold a 1 min 'dramatic eye contact' challenge with someone without laughing",
    "text any senior of yours that 'i love you so much that i can die for you'",
    "text your mother/father that you will come home late today",
    "Send a random voice note saying 'I miss you' to the last person you texted",
    "Give a 30-second speech on why you’re the best person in the room",
    "Take a selfie with someone and caption it with something weird. keep it on story for next 30 mins",
    "snap 3 people a thumbs up pic and write 'you are the best person in my life' on it",


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
