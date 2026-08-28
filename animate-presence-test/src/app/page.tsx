"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// AnimatePresence - 모달 Open/Close 시 애니메이션 적용
// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <button onClick={() => setIsOpen(true)}>모달 열기</button>
//       {/* AnimatePresence는 조건부 렌더링 로직 외부에 위치 */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             className="fixed inset-0 flex items-center justify-center bg-black/50"
//           >
//             <div className="rounded-lg bg-white p-6 text-black">
//               <h2>모달 내용</h2>
//               <button onClick={() => setIsOpen(false)}>닫기</button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

//------------------------------

// AnimatePresence - 슬라이드 쇼
const SLIDES = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
];

export default function SimpleSlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // 0 => (0 + 1) % 5 === 1
    // 1 => (1 + 1) % 5 === 2
    // 2 => (2 + 1) % 5 === 3
    // 3 => (3 + 1) % 5 === 4
    // 4 => (4 + 1) % 5 === 0
    // 5 => (5 + 1) % 5 === 1
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length,
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="relative h-64 overflow-hidden">
        <AnimatePresence>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`absolute h-full w-full ${SLIDES[currentIndex]}`}
          ></motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="bg-opacity-50 absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-black p-2 text-white"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="bg-opacity-50 absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-black p-2 text-white"
      >
        →
      </button>
    </div>
  );
}
