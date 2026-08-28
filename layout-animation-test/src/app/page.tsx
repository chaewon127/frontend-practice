"use client";

import * as motion from "motion/react-client";
import { useState } from "react";

export default function LayoutAnimation() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        className={`flex h-18 w-32 cursor-pointer rounded-full bg-purple-800 p-3`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="h-12 w-12 rounded-full bg-purple-500"
          animate={{ x: isOn ? 58 : 0 }}
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
