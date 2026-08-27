// 실습 3 - 카드 뒤집기
"use client";

import { useState } from "react";

export default function Home() {
  // 1. 뒤집힌 상태 저장
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        // 7. perspective-midrange 클래스로 원근감 추가하기
        // 마치 카메라 같은 역할을 하므로 3d 피사체(transform-3d)보다 부모 요소에 추가하기
        className="cursor-pointer perspective-midrange"
        // 3. 클릭을 통해 isFilpped 상태 변화
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          // 4. 클릭 시 isFlipped 상태에 따라 rotate-y-180 클래스 추가/제거
          // 5. transform-3d 클래스로 3d로 회전할 수 있게 추가하기
          // 6. transition-transform duration-700 클래스로 0.7초 동안 회전하도록 추가하기
          className={`relative h-96 w-64 transition-transform duration-700 transform-3d ${isFlipped ? "rotate-y-180" : ""}`}
        >
          <div className="absolute flex h-full w-full items-center justify-center rounded-xl bg-white p-4 shadow-lg">
            <div>카드앞면</div>
          </div>
          {/* 2. backface-hidden으로 180도 뒤집힌 부분을 보이제 않게 숨김 */}
          <div className="absolute flex h-full w-full rotate-y-180 items-center justify-center rounded-xl bg-blue-500 p-4 text-white shadow-lg backface-hidden">
            <div>카드뒷면</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 실습 2 - 카드 나타나기
// export default function ShowUpExample() {
//   return (
//     <div className="flex h-screen items-center justify-center gap-2">
//       <div className="animate-show-up h-96 w-72 rounded-lg border shadow-md"></div>
//     </div>
//   );
// }

// 실습 1 - Tailwind CSS 기본 애니매이션
// export default function Home() {
//   return (
//     <div className="flex h-screen flex-col items-center justify-center gap-4">
//       {/* 로딩 아이콘 회전 애니메이션 */}
//       <button className="flex items-center gap-2 rounded bg-gray-300 p-4">
//         <svg
//           width={24}
//           height={24}
//           viewBox="0 0 16 16"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           className="hds-flight-icon--animation-loading animate-spin"
//         >
//           <g fill="#000000" fillRule="evenodd" clipRule="evenodd">
//             <path
//               d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
//               opacity=".2"
//             />
//             <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z" />
//           </g>
//         </svg>
//         <span>처리중...</span>
//       </button>
//       {/* 알림 뱃지 + ping 애니메이션 */}
//       <div className="relative inline-block">
//         <button className="rounded border border-gray-300 px-4 py-2">
//           알림을 확인하세요
//         </button>
//         <span className="absolute -top-1 -right-1 flex h-3 w-3">
//           <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
//           <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
//         </span>
//       </div>

//       <div className="flex animate-pulse gap-2 border border-gray-300 p-4">
//         <div className="size-10 rounded-full bg-gray-300"></div>
//         <div className="flex flex-col gap-2">
//           <div className="h-2 w-40 rounded-full bg-gray-300"></div>
//           <div className="h-2 w-30 rounded-full bg-gray-300"></div>
//         </div>
//       </div>

//       <button className="animate-bounce rounded-full border border-gray-300 p-4">
//         <svg
//           className="size-6 text-gray-500"
//           fill="none"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//         </svg>
//       </button>
//     </div>
//   );
// }
