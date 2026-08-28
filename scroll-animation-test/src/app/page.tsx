// 실습 1 - WhileInView + amount 조절
// import * as motion from "motion/react-client";

// export default function Home() {
//   return (
//     <div className="flex h-[400dvh] items-center justify-center">
//       <motion.div
//         className="h-[300px] w-48 bg-blue-200"
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ amount: 0.8, once: true }}
//       >
//         박스
//       </motion.div>
//     </div>
//   );
// }

//----------------------------------------------------

// 실습 2 - useInView hook 활용
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useInView } from "motion/react";

// export default function Home() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 1 });
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!isInView) return;
//     const interval = setInterval(() => {
//       setCount((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 20);
//     return () => clearInterval(interval);
//   }, [isInView]);

//   return (
//     <div className="flex h-[400dvh] items-center justify-center">
//       <div
//         ref={ref}
//         className="flex h-48 w-48 items-center justify-center bg-green-200 text-4xl font-bold text-gray-500"
//       >
//         {count}
//       </div>
//     </div>
//   );
// }

//----------------------------------------------------

"use client";
import * as React from "react";
import { motion } from "motion/react";

const PAGE_COUNT = 5;

function ScrollLinked() {
  return (
    <div className="h-full w-full bg-gray-900">
      <div className="fixed inset-0">
        <motion.div
          // 원을 중앙에 위치시키기
          // absolute top-1/2 left-1/2: 요소의 왼쪽 상단 모서리를 부모 요소의 중앙점에 위치
          // -translate-x-1/2 -translate-y-1/2: 자신의 너비의 50%만큼 위, 왼쪽으로 이동
          // 텍스트 중앙 위치
          // flex items-center justify-center: 요소의 중앙에 텍스트 배치
          // h-full w-full: 요소의 높이와 너비를 100%로 설정
          // bg-orange-500: 오렌지색 배경
          className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-orange-500"
          style={
            {
              // 여기에 css 속성을 추가해보세요.
            }
          }
        >
          <div className="text-center">
            <h1 className="flex flex-col gap-4 text-8xl font-bold text-blue-600">
              <span>
                <motion.span>Aha!</motion.span>
              </span>
              <span>
                <motion.span>You found me!</motion.span>
              </span>
            </h1>
          </div>
        </motion.div>
      </div>
      {/* 페이지 수만큼 빈 div 생성하여 긴 페이지 생성 */}
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div className="h-screen w-screen" key={index} />
      ))}
    </div>
  );
}

export default ScrollLinked;
