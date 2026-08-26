"use client";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-screen p-8">
        <button
          onClick={() => setIsDark(!isDark)}
          className="border-border rounded-md border px-3 py-1"
        >
          {isDark ? "☀️ 라이트" : "🌙 다크"}
        </button>

        <article className="bg-card text-card-foreground border-border mt-8 max-w-md rounded-lg border p-6">
          <h2 className="text-xl font-bold">Tailwind v4 살펴보기</h2>
          <p className="text-muted-foreground mt-1 text-sm">2025년 5월 21일</p>
          <p className="mt-4">토큰 기반 디자인 시스템의 가장 큰 장점은...</p>
        </article>
      </div>
    </div>
  );
}
