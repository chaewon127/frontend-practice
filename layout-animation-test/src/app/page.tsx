"use client";

import * as motion from "motion/react-client";
import { useState, useRef, useEffect } from "react";

export default function LayoutAnimation() {
  const [isOn, setIsOn] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const width = buttonRef.current.offsetWidth;
      console.log(width);
      setButtonWidth(width);
    }
  }, []);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        ref={buttonRef}
        className={`flex h-18 w-32 cursor-pointer rounded-full bg-purple-800 p-3`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="h-12 w-12 rounded-full bg-purple-500"
          // 72 = 원의 너비(48px)와 좌우 패딩(12px, 12px)의 합
          animate={{ x: isOn ? buttonWidth - 72 : 0 }}
          transition={{
            type: "spring",
            duration: 0.2,
            bounce: 0.2,
          }}
        />
      </button>
    </div>
  );
}
