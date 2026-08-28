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

export default function Home() {
  return (
    <main>
      <section className="h-dvh flex items-center justify-center bg-indigo-900 text-white">
        헤더
      </section>
      <section className="h-dvh relative overflow-hidden">
        {/* 배경 레이어 - 느리게 이동 */}
        <div
          className="absolute inset-0 bg-cover -z-1"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1764957079188-149010d00e30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        {/* 텍스트 레이어 - 다른 속도로 이동 */}
        <h1 className="text-7xl text-center pt-96 text-black" style={{}}>
          패럴렉스 효과
        </h1>
      </section>
      <footer className="h-dvh flex items-center justify-center bg-indigo-900 text-white">
        푸터
      </footer>
    </main>
  );
}
