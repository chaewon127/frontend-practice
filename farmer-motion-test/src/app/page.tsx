import * as motion from "motion/react-client";
import Link from "next/link";

// 실습 5 - 페이지 트랜지션 애니메이션
export default function Page() {
  return (
    <div>
      <Link className="text-blue-500 underline" href="/about">
        About으로
      </Link>
      {/* 코드 생략*/}
    </div>
  );
}

// -----------------------------------

// 실습 4 - Tailwind CSS로 만든 애니메이션을 farmer motion으로 변환
// export default function Home() {
//   return (
//     <div className="flex h-screen items-center justify-center gap-2">
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 20,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.5,
//           ease: "easeInOut",
//         }}
//         className="h-96 w-72 rounded-lg border shadow-md"
//       ></motion.div>
//     </div>
//   );
// }

// -----------------------------------

// 실습 3 - 마우스 오버 시 버튼 확대/축소
// export default function Home() {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="rounded-md border-none bg-blue-500 px-5 py-2.5 text-white"
//     >
//       마우스를 올려보세요!
//     </motion.button>
//   );
// }

// -----------------------------------

// 실습 2 - 왼쪽에서 슬라이드 인
// export default function Home() {
//   return (
//     <motion.div
//       initial={{ x: -100, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       왼쪽에서 슬라이드 인!
//     </motion.div>
//   );
// }

// -----------------------------------

// 실습 1 - 페이드인
// export default function Home() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       안녕하세요! 페이드인 효과입니다.
//     </motion.div>
//   );
// }
