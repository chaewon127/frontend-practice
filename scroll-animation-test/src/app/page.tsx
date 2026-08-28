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

"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div className="flex h-[400dvh] items-center justify-center">
      <div
        ref={ref}
        className="flex h-48 w-48 items-center justify-center bg-green-200 text-4xl font-bold text-gray-500"
      >
        {count}
      </div>
    </div>
  );
}
