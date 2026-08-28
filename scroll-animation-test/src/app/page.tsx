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

// 실습 3 - useScroll 활용
// "use client";
// import * as React from "react";
// import { useScroll, useTransform, motion } from "motion/react";

// const PAGE_COUNT = 5;

// function ScrollLinked() {
//   // 1. 현재 스크롤 위치 추적
//   const { scrollYProgress } = useScroll();
//   // 2. 현재 스크롤 위치를 기반으로 클립 경로 계산
//   const clipPath = useTransform(
//     scrollYProgress,
//     (scrollYProgress) => `circle(${scrollYProgress * 100}%)`,
//   );

//   return (
//     <div className="h-full w-full bg-gray-900">
//       <div className="fixed inset-0">
//         <motion.div
//           // 원을 중앙에 위치시키기
//           // absolute top-1/2 left-1/2: 요소의 왼쪽 상단 모서리를 부모 요소의 중앙점에 위치
//           // -translate-x-1/2 -translate-y-1/2: 자신의 너비의 50%만큼 위, 왼쪽으로 이동
//           // 텍스트 중앙 위치
//           // flex items-center justify-center: 요소의 중앙에 텍스트 배치
//           // h-full w-full: 요소의 높이와 너비를 100%로 설정
//           // bg-orange-500: 오렌지색 배경
//           className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-orange-500"
//           style={{
//             clipPath,
//           }}
//         >
//           <div className="text-center">
//             <h1 className="flex flex-col gap-4 text-8xl font-bold text-blue-600">
//               <span>
//                 <motion.span>Aha!</motion.span>
//               </span>
//               <span>
//                 <motion.span>You found me!</motion.span>
//               </span>
//             </h1>
//           </div>
//         </motion.div>
//       </div>
//       {new Array(PAGE_COUNT).fill(null).map((_, index) => (
//         <div className="h-screen w-screen" key={index} />
//       ))}
//     </div>
//   );
// }

// export default ScrollLinked;

// -----------------------------------------------------

// 스크롤 슬라이드인 구현 - variants 활용
// import InViewSlideSection from "@/components/InViewSlideSection";

// export default function Page() {
//   return (
//     <div>
//       {/* 스크롤 테스트를 위한 긴 컨텐츠 */}
//       <div className="p-4">
//         <h1 className="mb-4 text-2xl font-bold">스크롤 테스트</h1>

//         {[...Array(50)].map((_, i) => (
//           <p key={i} className="mb-4">
//             테스트 문단 {i + 1}. 스크롤을 내려서 슬라이드인을 확인해보세요.
//           </p>
//         ))}

//         {/* 첫 번째 섹션: 왼쪽에서 오른쪽으로 */}
//         <InViewSlideSection
//           direction="left"
//           className="mb-8 rounded-lg bg-blue-100 p-6"
//         >
//           <h2 className="mb-2 text-xl font-bold">왼쪽에서 슬라이드</h2>
//           <p>이 섹션은 왼쪽에서 슬라이드됩니다.</p>
//         </InViewSlideSection>

//         {/* 두 번째 섹션: 위에서 아래로 */}
//         <InViewSlideSection
//           direction="top"
//           className="mb-8 rounded-lg bg-purple-100 p-6"
//         >
//           <h2 className="mb-2 text-xl font-bold">위에서 슬라이드</h2>
//           <p>이 섹션은 위에서 아래로 슬라이드됩니다.</p>
//         </InViewSlideSection>

//         {/* 세 번째 섹션: 아래에서 위로 */}
//         <InViewSlideSection
//           direction="bottom"
//           className="mb-8 rounded-lg bg-green-100 p-6"
//         >
//           <h2 className="mb-2 text-xl font-bold">아래에서 슬라이드</h2>
//           <p>이 섹션은 아래에서 위로 슬라이드됩니다.</p>
//         </InViewSlideSection>
//       </div>
//     </div>
//   );
// }

//----------------------------------------------------

// 스크롤 Progress Bar
"use client";

import { motion, useScroll } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="fixed top-0 right-0 left-0 h-2 origin-left bg-blue-500"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="p-4">
        <h1 className="mb-4 text-2xl font-bold">스크롤 프로그레스 바 테스트</h1>
        {[...Array(50)].map((_, i) => (
          <p key={i} className="mb-4">
            테스트 문단 {i + 1}. 스크롤을 내려서 프로그레스 바를 확인해보세요.
          </p>
        ))}
      </div>
    </div>
  );
}
