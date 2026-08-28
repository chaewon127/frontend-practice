"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import Image from "next/image";

// 토글 버튼
// export default function LayoutAnimation() {
//   const [isOn, setIsOn] = useState(false);

//   const toggleSwitch = () => setIsOn(!isOn);

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <button
//         className={`flex h-18 w-32 cursor-pointer rounded-full bg-purple-800 p-3 ${
//           isOn ? "justify-start" : "justify-end"
//         }`}
//         onClick={toggleSwitch}
//       >
//         <motion.div
//           className="h-12 w-12 rounded-full bg-purple-500"
//           layout
//           transition={{
//             type: "spring",
//             stiffness: 200, // 강도
//             damping: 20, // 감쇠
//           }}
//         />
//       </button>
//     </div>
//   );
// }

//------------------------------

// 아이템 정렬
// export default function ReorderList() {
//   const [sortBy, setSortBy] = useState<"asc" | "desc">("asc");
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: "Laptop",
//       price: 1000000,
//     },
//     {
//       id: 2,
//       name: "Chair",
//       price: 200000,
//     },
//     {
//       id: 3,
//       name: "Table",
//       price: 3000,
//     },
//   ]);

//   const sortItems = () => {
//     setItems(
//       [...items].sort((a, b) => {
//         if (sortBy === "asc") {
//           return a.price - b.price;
//         }
//         return b.price - a.price;
//       }),
//     );
//     setSortBy(sortBy === "asc" ? "desc" : "asc");
//   };

//   return (
//     <div className="flex flex-col gap-2 p-4">
//       <button
//         className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
//         onClick={sortItems}
//       >
//         가격순 정렬
//       </button>
//       {items.map((item) => (
//         <motion.div
//           key={item.id}
//           className="rounded bg-gray-200 p-4"
//           layout
//           transition={{ type: "spring", stiffness: 300, damping: 25 }}
//         >
//           {item.name} - {item.price}
//         </motion.div>
//       ))}
//     </div>
//   );
// }

//------------------------------

// 그리드 레이아웃
const IMAGES = [
  "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1749316325068-ccdc0af776fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1749429338454-fa1a649c0208?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1734842393602-832288710652?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1742626157052-f5a373a727ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1749022886030-3fda386761b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
];

export default function Gallery() {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="p-4">
      <button
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => setIsGrid(!isGrid)}
      >
        Toggle {isGrid ? "List" : "Grid"}
      </button>
      <motion.div
        className={`grid gap-4 ${isGrid ? "grid-cols-3" : "grid-cols-1"}`}
      >
        {IMAGES.map((_, index) => (
          <motion.div
            key={index}
            className="relative h-72 w-full"
            layout
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <Image
              src={IMAGES[index]}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
