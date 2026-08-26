"use client";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      {/* 페이지 배경: background, 텍스트: foreground */}
      <div className="min-h-screen p-8">
        <button
          onClick={() => setIsDark(!isDark)}
          className="rounded-md border px-3 py-1"
        >
          {isDark ? "☀️ 라이트" : "🌙 다크"}
        </button>

        {/* 카드: card 배경, card-foreground 텍스트, border 테두리 */}
        <article className="mt-8 max-w-md rounded-lg border p-6">
          <h2 className="text-xl font-bold">Tailwind v4 살펴보기</h2>
          {/* 날짜: muted-foreground */}
          <p className="mt-1 text-sm">2025년 5월 21일</p>
          <p className="mt-4">토큰 기반 디자인 시스템의 가장 큰 장점은...</p>
        </article>
      </div>
    </div>
  );
}
