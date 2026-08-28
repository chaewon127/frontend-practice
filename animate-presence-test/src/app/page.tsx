"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50"
        >
          <div className="rounded-lg bg-white p-6">
            <h2>모달 내용</h2>
            <button onClick={() => setIsOpen(false)}>닫기</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
