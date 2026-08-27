import * as motion from "motion/react-client";

// 실습 2 - 왼쪽에서 슬라이드 인
export default function Home() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      왼쪽에서 슬라이드 인!
    </motion.div>
  );
}

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
