"use client";

import { useEffect, useRef, useState } from "react";

export default function Spinner({
  participants,
  onSpinDone,
}: {
  participants: string[];
  onSpinDone: (name: string) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const drawWheel = (ctx: CanvasRenderingContext2D, rotation: number) => {
    const radius = 150;
    const centerX = 175;
    const centerY = 175;
    const angleStep = (2 * Math.PI) / participants.length;

    ctx.clearRect(0, 0, 350, 350);

    participants.forEach((name, i) => {
      const startAngle = i * angleStep + rotation;
      const endAngle = startAngle + angleStep;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.fillStyle = `hsl(${(i * 360) / participants.length}, 80%, 70%)`;
      ctx.fill();
      ctx.stroke();

      // Text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + angleStep / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#000";
      ctx.font = "16px sans-serif";
      ctx.fillText(name, radius - 10, 5);
      ctx.restore();
    });

    // Draw arrow
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius - 10);
    ctx.lineTo(centerX - 10, centerY - radius - 30);
    ctx.lineTo(centerX + 10, centerY - radius - 30);
    ctx.closePath();
    ctx.fillStyle = "#ff0000";
    ctx.fill();
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) drawWheel(ctx, 0);
  }, [participants]);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    let rotation = 0;
    let spinTime = 0;
    const duration = 3000;
    const fps = 60;

    const interval = setInterval(() => {
      spinTime += 1000 / fps;
      rotation += (Math.random() * 0.2 + 0.3);

      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) drawWheel(ctx, rotation);

      if (spinTime >= duration) {
        clearInterval(interval);

        const anglePerSlice = (2 * Math.PI) / participants.length;
        const finalAngle = rotation % (2 * Math.PI);
        const index = Math.floor(participants.length - (finalAngle / anglePerSlice)) % participants.length;

        onSpinDone(participants[index]);
      }
    }, 1000 / fps);
  };

  return (
    <div className="text-center">
      <canvas ref={canvasRef} width={350} height={350} />
      <button
        onClick={spin}
        className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-full text-lg"
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
}
