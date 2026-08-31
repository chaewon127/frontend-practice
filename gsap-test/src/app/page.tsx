"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 실습 1 - GSAP 애니메이션 라이브러리 - 타임라인
// export default function Home() {
//   // 1. 애니메이션의 범위를 설정하기 위한 ref
//   const containerRef = useRef(null);

//   // 2. useGSAP 훅으로 애니메이션 실행
//   useGSAP(
//     () => {
//       // 3. 타임라인 생성
//       const timeline = gsap.timeline();

//       // 4. 타임라인 적용
//       timeline
//         .from(".card", { opacity: 0, y: 100, duration: 1 })
//         .from(
//           ".question",
//           {
//             opacity: 0,
//             x: -100,
//             duration: 1,
//           },
//           "-=0.5", // 이전 애니메이션이 끝나기 0.5초 전에 시작
//         )
//         .from(
//           ".answer",
//           {
//             opacity: 0,
//             y: 100,
//             duration: 1,
//             stagger: 0.2, // 각 요소가 동시에 시작하지 않고 순차적으로 시작 (0.2초 차이로)
//             ease: "back.out(1.7)", // 원래 위치보다 조금 더 갔다가 돌아오게 함
//           },
//           "-=0.5",
//         );

//       // 1-1. scope는 필수는 아니며 요소를 찾을 때 확인할 범위를 설정하는 용도입니다.
//     },
//     { scope: containerRef },
//   );
//   return (
//     <div
//       ref={containerRef}
//       className="flex h-screen items-center justify-center"
//     >
//       <div className="card flex flex-col gap-4 items-center justify-center size-88 bg-gray-200 rounded-lg p-4 text-black">
//         <h1 className="question text-lg font-bold">질문?</h1>
//         <div className="answer bg-white w-full p-4 rounded-lg">답변1</div>
//         <div className="answer bg-white w-full p-4 rounded-lg">답변2</div>
//         <div className="answer bg-white w-full p-4 rounded-lg">답변3</div>
//       </div>
//     </div>
//   );
// }

//--------------------------------

// 실습 2 - GSAP 애니메이션 라이브러리 - 스크롤 트리거&고정(pin) 기능
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useGSAP();

  return (
    <div>
      {/* 스크롤 확인용 상단 여백 */}
      <div className="h-[50vh] flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">👇 아래로 스크롤해서 충전하세요</h1>
      </div>

      {/* GSAP Pinning 영역 (화면에 꽉 차는 크기) */}
      <div
        ref={containerRef}
        className="h-screen flex flex-col items-center justify-center bg-slate-900 text-white"
      >
        <h2 className="text-4xl font-bold mb-8">충전 중...</h2>

        {/* 배터리 껍데기 */}
        <div className="w-32 h-64 border-4 border-white rounded-xl p-2 relative">
          {/* 배터리 꼭다리 */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-4 bg-white rounded-t-sm" />

          {/* 배터리 내용물 (여기가 차오름) */}
          <div className="w-full h-full flex items-end">
            <div className="w-full h-0 bg-green-500 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* 스크롤 확인용 하단 여백 */}
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">✅ 충전 완료!</h1>
      </div>
    </div>
  );
}
