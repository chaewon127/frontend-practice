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
  const [isDisabled, setIsDisabled] = useState(false);

  const nextSlide = () => {
    setIsDisabled(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setIsDisabled(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length,
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="relative h-64 overflow-hidden">
        {/* initial={false}: 첫 렌더링 시에는 애니메이션 적용 X */}
        {/* mode="wait": 이전 컴포넌트의 exit 애니메이션이 완료된 후에 새 컴포넌트의 애니메이션이 시작 */}
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => {
            // 버튼을 누를 수 있게 한다.
            setIsDisabled(false);
          }}
        >
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute h-full w-full ${SLIDES[currentIndex]}`}
          ></motion.div>
        </AnimatePresence>
      </div>

      <button
        disabled={isDisabled}
        onClick={prevSlide}
        className="bg-opacity-50 absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-black p-2 text-white"
      >
        ←
      </button>

      <button
        disabled={isDisabled}
        onClick={nextSlide}
        className="bg-opacity-50 absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-black p-2 text-white"
      >
        →
      </button>
    </div>
  );
}
