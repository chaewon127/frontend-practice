"use client";

import { motion } from "motion/react";

export default function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <motion.div className="text-center">
      <motion.h1 className="mb-8 text-4xl font-bold">MBTI 테스트</motion.h1>
      <motion.button
        onClick={onStart}
        className="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
      >
        시작하기
      </motion.button>
    </motion.div>
  );
}
