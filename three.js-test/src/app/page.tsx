"use client";

import { useRef } from "react";

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    // 모델을 보여줄 캔버스 만들기
    <div className="h-[500px] w-[500px]">
      <canvas ref={canvasRef} width={500} height={500} />
    </div>
  );
}
