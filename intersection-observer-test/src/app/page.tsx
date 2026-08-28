// 실습 1 - intersection-observer API로 무한 스크롤 구현
// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function Home() {
//   const [items, setItems] = useState([...Array(10)].map((_, i) => i + 1));
//   const [isLoading, setIsLoading] = useState(false);

//   // 감지할 요소에 연결할 ref
//   const targetRef = useRef<HTMLDivElement | null>(null);

//   const loadMoreItems = async () => {
//     setIsLoading(true);

//     // API 호출 가정
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     setItems((prevItems) => [
//       ...prevItems,
//       // 이전 item 개수 + 1 부터 10개 더하기
//       ...[...Array(10)].map((_, i) => prevItems.length + i + 1),
//     ]);
//     setIsLoading(false);
//   };

//   // IntersectionObserver로 대상 요소 감지
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         // 요소 감지 시 콜백함수 실행
//         if (entries[0].isIntersecting) {
//           loadMoreItems();
//         }
//       },
//       {
//         threshold: 1,
//       },
//     );

//     const currentRef = targetRef.current;
//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, []);

//   return (
//     <div className="container mx-auto">
//       <div className="flex flex-col gap-4">
//         {items.map((item) => (
//           <div className="h-48 border border-gray-500" key={item}>
//             {item}
//           </div>
//         ))}
//       </div>
//       {/* 해당 div가 뷰포트에 다 보일 때 더 로드 */}
//       <div ref={targetRef} className="py-4 text-center">
//         {isLoading ? (
//           <div className="flex items-center justify-center space-x-2">
//             <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
//             <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
//             <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
//             <span className="text-gray-500">로딩 중...</span>
//           </div>
//         ) : (
//           <span className="text-gray-400">더 로드하려면 스크롤하세요</span>
//         )}
//       </div>
//     </div>
//   );
// }

//-----------------------------------------------------

// 실습 2 - react-intersection-observer 라이브러리로 무한 스크롤 수정
"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [items, setItems] = useState([...Array(10)].map((_, i) => i + 1));
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreItems = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setItems((prevItems) => [
      ...prevItems,
      ...[...Array(10)].map((_, i) => prevItems.length + i + 1),
    ]);
    setIsLoading(false);
  };

  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView && !isLoading) {
        loadMoreItems();
      }
    },
  });

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div className="h-48 border border-gray-500" key={item}>
            {item}
          </div>
        ))}
      </div>
      <div ref={ref} className="py-4 text-center">
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
            <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
            <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
            <span className="text-gray-500">로딩 중...</span>
          </div>
        ) : (
          <span className="text-gray-400">더 로드하려면 스크롤하세요</span>
        )}
      </div>
    </div>
  );
}
