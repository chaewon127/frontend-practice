"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Home() {
  // 1. 애니메이션의 범위를 설정하기 위한 ref
  const containerRef = useRef(null);

  // 2. useGSAP 훅으로 애니메이션 실행
  useGSAP(
    () => {
      // 3. 타임라인 생성
      const timeline = gsap.timeline();

      // 4. 타임라인 적용
      timeline
        .from(".card", { opacity: 0, y: 100, duration: 1 })
        .from(
          ".question",
          {
            opacity: 0,
            x: -100,
            duration: 1,
          },
          "-=0.5", // 이전 애니메이션이 끝나기 0.5초 전에 시작
        )
        .from(
          ".answer",
          {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.2, // 각 요소가 동시에 시작하지 않고 순차적으로 시작 (0.2초 차이로)
            ease: "back.out(1.7)", // 원래 위치보다 조금 더 갔다가 돌아오게 함
          },
          "-=0.5",
        );

      // 1-1. scope는 필수는 아니며 요소를 찾을 때 확인할 범위를 설정하는 용도입니다.
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className="flex h-screen items-center justify-center"
    >
      <div className="card flex flex-col gap-4 items-center justify-center size-88 bg-gray-200 rounded-lg p-4 text-black">
        <h1 className="question text-lg font-bold">질문?</h1>
        <div className="answer bg-white w-full p-4 rounded-lg">답변1</div>
        <div className="answer bg-white w-full p-4 rounded-lg">답변2</div>
        <div className="answer bg-white w-full p-4 rounded-lg">답변3</div>
      </div>
    </div>
  );
}
