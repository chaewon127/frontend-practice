// 실습 1 - 스크롤 기반 랜딩 페이지 애니메이션 - Sticky 기법
// import ScrollCard from "@/components/ScrollCard";

// export default function Home() {
//   return (
//     <main>
//       {/* 히어로 섹션 */}
//       <section className="h-dvh flex items-center justify-center bg-indigo-900 text-white">
//         <div className="text-center p-8">
//           <h1 className="text-6xl font-extrabold">웹사이트 애니메이션</h1>
//           <p className="opacity-70 mt-4">
//             아래로 스크롤해서 sticky를 활용한 랜딩 페이지를 확인하세요
//           </p>
//         </div>
//       </section>

//       <section className="min-h-dvh bg-blue-900 text-white">
//         {/* items-start를 활용하여 위 아래로 stretch 되는 것 막기 */}
//         <div className="flex items-start">
//           {/* 왼쪽: sticky 제목 영역 */}
//           <div className="flex-1/3 px-12 py-44 sticky top-44">
//             <h2 className="text-4xl font-bold">멋진 제목</h2>
//             <h3 className="text-2xl font-semibold text-gray-400">
//               어쩌고 저쩌고 설명
//             </h3>
//           </div>

//           {/* 오른쪽: 스크롤 콘텐츠 */}
//           <div className="flex-2/3 flex flex-col gap-72 py-44 pr-12">
//             <ScrollCard>카드</ScrollCard>
//             <ScrollCard>카드</ScrollCard>
//             <ScrollCard>카드</ScrollCard>
//             <ScrollCard>카드</ScrollCard>
//           </div>
//         </div>
//       </section>

//       {/* 푸터 */}
//       <footer className="h-dvh flex items-center justify-center bg-indigo-900 text-white">
//         아래 부분
//       </footer>
//     </main>
//   );
// }

//------------------------------

// 실습 2 - 스크롤 기반 랜딩 페이지 애니메이션 - Parallax 기법
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  // 배경과 텍스트를 감싸는 부모를 기준으로 스크롤 감지
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // 스크롤 진행률의 기준점 세우기
    // start end는 타겟의 시작점(start)이 뷰포트(end)를 지나는 순간이 스크롤 진행률 0이라는 뜻
    // end start는 타겟의 끝점(end)이 뷰포트(start)를 지나는 순간이 스크롤 진행률 1이라는 뜻
    offset: ["start end", "end start"],
  });

  // 스크롤 진행도(0 -> 1)를 Y 위치(-300px -> 300px)로 변환
  // 스크롤을 내릴 때 위(-300)에서 아래(300)로 살짝 끌어내림
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  // 원래 위치(0)에서 아래(300)로 끌어내려짐 -> 시각적으로 보일 수 있게 값 수정. 위(-600)에서 아래(600)로 이동
  const textY = useTransform(scrollYProgress, [0, 1], [600, -600]);

  return (
    <main>
      <section className="h-dvh flex items-center justify-center bg-indigo-900 text-white">
        헤더
      </section>
      <section ref={containerRef} className="h-dvh relative overflow-hidden">
        {/* 배경 레이어 - 느리게 이동 */}
        <motion.div
          className="absolute inset-0 bg-cover -z-1"
          style={{
            y: backgroundY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1764957079188-149010d00e30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        {/* 텍스트 레이어 - 다른 속도로 이동 */}
        <motion.h1
          className="text-7xl text-center pt-96 text-black"
          style={{
            y: textY,
          }}
        >
          패럴렉스 효과
        </motion.h1>
      </section>
      <footer className="h-dvh flex items-center justify-center bg-indigo-900 text-white">
        푸터
      </footer>
    </main>
  );
}
