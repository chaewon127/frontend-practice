export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <span className="text-9xl">Codify</span>
    </div>
  );
}

// 실습 2 - tailwindcss의 그라데이션 효과
// export default function Home() {
//   return (
//     <div className="flex h-screen items-center justify-center">
//       {/* h-6: 높이 24px */}
//       {/* w-6: 너비 24px */}
//       {/* rounded-full: 둥글게 */}
//       {/* bg-linear-to-tr: 그라데이션 효과 - top, right 방향으로 그라데이션 효과 */}
//       {/* from-[#096cde]: 시작 색상 */}
//       {/* from-30%: 그라데이션 시작점의 위치 */}
//       {/* to-[#ddf1ff]: 끝 색상 */}
//       <span className="size-10 rounded-full bg-linear-to-tr from-[#096cde] from-30% to-[#ddf1ff]" />
//     </div>
//   );
// }

// 실습 1 - unsplash, pinterest와 같은 이미지 나열하기
// import Image from "next/image";

// const Home = () => {
//   return (
//     <>
//       <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
//         <Image
//           alt="Image 1"
//           className="mb-4 w-full"
//           width={300}
//           height={500}
//           src="https://images.unsplash.com/photo-1742943679521-f4736500a471?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
//         />
//         <Image
//           alt="Image 2"
//           className="mb-4 w-full"
//           width={300}
//           height={500}
//           src="https://images.unsplash.com/photo-1742925602178-0f5939ee6845?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
//         />
//         <Image
//           alt="Image 3"
//           className="mb-4 w-full"
//           width={300}
//           height={500}
//           src="https://plus.unsplash.com/premium_photo-1742202420319-e933c71d4495?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
//         />
//         <Image
//           alt="Image 4"
//           className="mb-4 w-full"
//           width={300}
//           height={500}
//           src="https://images.unsplash.com/photo-1743031031851-bffbe65f338f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
//         />
//         <Image
//           alt="Image 5"
//           className="mb-4 w-full"
//           width={300}
//           height={500}
//           src="https://images.unsplash.com/photo-1743010768826-cc10a67e3b3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
//         />
//         <Image
//           alt="Image 6"
//           className="mb-4 w-full"
//           width={300}
//           height={500}
//           src="https://images.unsplash.com/photo-1741812191037-96bb5f12010a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
//         />
//         <Image
//           alt="Image 7"
//           className="mb-4 w-full"
//           width={300}
//           height={500}
//           src="https://images.unsplash.com/photo-1742576948659-3c630862a38d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D"
//         />
//       </div>
//     </>
//   );
// };

// export default Home;
