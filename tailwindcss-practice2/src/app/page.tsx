// 실습 3 - 주소록 리스트 만들기
export default function Home() {
  return (
    // divide-y: 마지막 자식을 제외한 모든 자식 요소의 아래에 구분선 생성
    // divide-gray-100: 구분선 색상
    <ul role="list" className="divide-y divide-gray-100 p-2">
      {/* flex, justify-between: 요소 배치 */}
      {/* py-5: 요소 간격 및 위아래 여백 */}
      <li className="flex justify-between py-5">
        {/* 이미지 및 프로필 */}
        {/* flex, gap-x-4: 요소 배치 */}
        {/* min-w-0이 없으면 화면이 줄어들 때 텍스트가 가려진다. */}
        <div className="flex min-w-0 gap-x-4">
          <img
            // size-12: 이미지 크기
            // rounded-full: 이미지 모서리 둥글게
            className="size-12 rounded-full"
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />

          {/* min-w-0이 없으면 자식 요소의 truncate 적용이 안됨 */}
          <div className="min-w-0">
            {/* text-sm/6: 텍스트 크기 및 높이 비율 */}
            {/* font-semibold: 텍스트 굵게 */}
            {/* text-gray-900: 텍스트 색상 */}
            <p className="text-sm/6 font-semibold text-gray-900">
              Michael Foster
            </p>
            {/* mt-1: 텍스트 위 여백 */}
            {/* truncate: 텍스트 자르기 */}
            {/* text-xs/5: 텍스트 크기 및 높이 비율 */}
            {/* text-gray-500: 텍스트 색상 */}
            <p className="mt-1 truncate text-xs/5 text-gray-500">
              michael.foster@example.com
            </p>
          </div>
        </div>
        {/* 회사 및 직책 */}
        {/* hidden: 화면 크기에 따라 요소 숨김 */}
        {/* shrink-0: 요소 크기 줄이지 않기 */}
        {/* sm:flex: 화면 크기가 sm 이상일 때 요소 표시 */}
        {/* sm:flex-col: 화면 크기가 sm 이상일 때 요소 세로 배치 */}
        {/* sm:items-end: 요소 오른쪽 정렬 */}
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm/6 text-gray-900">Co-Founder / CTO</p>
          <p className="mt-1 text-xs/5 text-gray-500">
            Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
          </p>
        </div>
      </li>
      <li className="flex justify-between py-5">
        <div className="flex min-w-0 gap-x-4">
          <img
            className="size-12 rounded-full"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm/6 font-semibold text-gray-900">
              Dries Vincent
            </p>
            <p className="mt-1 truncate text-xs/5 text-gray-500">
              dries.vincent@example.com
            </p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm/6 text-gray-900">Business Relations</p>
          {/* 온라인 상태 표시 */}
          <div className="mt-1 flex items-center gap-x-1.5">
            {/* rounded-full: 모서리 둥글게 */}
            {/* bg-emerald-500/20: 불투명도 20% 배경색 */}
            <div className="rounded-full bg-emerald-500/20 p-1">
              {/* size-1.5: 크기 */}
              {/* rounded-full: 모서리 둥글게 */}
              {/* bg-emerald-500: 색상 */}
              <div className="size-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-xs/5 text-gray-500">Online</p>
          </div>
        </div>
      </li>
    </ul>
  );
}

// 실습 2 - 포트폴리오 웹사이트 레이아웃 다듬기
// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
//       {/* 헤더 섹션 */}
//       <header className="container mx-auto px-4 py-6">
//         {/* flex items-center justify-between 적용 */}
//         <nav className="flex items-center justify-between">
//           <div className="text-xl font-bold text-indigo-600">내 포트폴리오</div>
//           {/* flex gap-6 적용 */}
//           <ul className="flex gap-6">
//             <li>
//               <a
//                 href="#about"
//                 className="text-gray-600 transition-colors hover:text-indigo-600"
//               >
//                 소개
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#projects"
//                 className="text-gray-600 transition-colors hover:text-indigo-600"
//               >
//                 프로젝트
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="text-gray-600 transition-colors hover:text-indigo-600"
//               >
//                 연락처
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* 히어로 섹션 */}
//       {/* flex, flex-col, items-center로 중앙 정렬 */}
//       {/* text-center: 텍스트 가운데 정렬 */}
//       <section className="container mx-auto flex flex-col items-center px-4 py-16 text-center">
//         <div className="mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-indigo-200">
//           <span className="text-4xl">👋</span>
//         </div>
//         <h1 className="mb-4 text-4xl font-bold text-gray-800">
//           안녕하세요, 저는 홍길동입니다
//         </h1>
//         <p className="mb-8 max-w-2xl text-xl text-gray-600">
//           프론트엔드 개발에 관심이 많은 주니어 개발자입니다. Next.js와 Tailwind
//           CSS를 배우고 있습니다.
//         </p>
//         <button className="transform rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-lg transition-all hover:scale-105 hover:bg-indigo-700">
//           연락하기
//         </button>
//       </section>

//       {/* 소개 섹션 */}
//       <section id="about" className="container mx-auto px-4 py-16">
//         <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
//           소개
//         </h2>
//         {/* 1열 2열 */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           <div className="rounded-xl bg-white p-8 shadow-lg">
//             <h3 className="mb-4 text-xl font-semibold text-indigo-600">
//               내 스킬
//             </h3>
//             {/* flex-wrap 채우기 */}
//             <div className="flex flex-wrap gap-2">
//               <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-800">
//                 HTML
//               </span>
//               <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-800">
//                 CSS
//               </span>
//               <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-800">
//                 JavaScript
//               </span>
//               <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-800">
//                 React
//               </span>
//               <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-800">
//                 Next.js
//               </span>
//               <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-800">
//                 Tailwind CSS
//               </span>
//             </div>
//           </div>
//           <div className="rounded-xl bg-white p-8 shadow-lg">
//             <h3 className="mb-4 text-xl font-semibold text-indigo-600">
//               내 취미
//             </h3>
//             <ul className="space-y-2">
//               <li className="flex items-center gap-2">
//                 <span className="text-indigo-600">✨</span> 코딩하기
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-indigo-600">📚</span> 기술 책 읽기
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-indigo-600">🎮</span> 게임하기
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-indigo-600">🏃‍♂️</span> 조깅하기
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* 프로젝트 섹션 */}
//       <section
//         id="projects"
//         // container: 크기 조정
//         // mx-auto: 가운데 정렬
//         // rounded-t-3xl: 위 모서리 둥글게
//         // bg-white: 배경색
//         // px-4 py-16: 안쪽 여백
//         // shadow-inner: 그림자 효과
//         className="container mx-auto rounded-t-3xl bg-white px-4 py-16 shadow-inner"
//       >
//         <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
//           프로젝트
//         </h2>
//         {/* grid-cols-1: 1열 */}
//         {/* gap-6: 요소 간격 */}
//         {/* md:grid-cols-3: 미디어 쿼리 조건 */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//           {/* 프로젝트 카드 1 */}
//           <div className="group overflow-hidden rounded-xl bg-gray-50 shadow-lg transition-all hover:shadow-xl">
//             <div className="flex h-48 items-center justify-center bg-indigo-200">
//               <span className="text-4xl">🚀</span>
//             </div>
//             <div className="p-6">
//               <h3 className="mb-2 text-xl font-semibold text-gray-800 transition-colors group-hover:text-indigo-600">
//                 포트폴리오 웹사이트
//               </h3>
//               <p className="mb-4 text-gray-600">
//                 Next.js와 Tailwind CSS를 이용한 개인 포트폴리오 웹사이트입니다.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="rounded bg-gray-200 px-2 py-1 text-xs">
//                   Next.js
//                 </span>
//                 <span className="rounded bg-gray-200 px-2 py-1 text-xs">
//                   Tailwind
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* 프로젝트 카드 2 */}
//           <div className="group overflow-hidden rounded-xl bg-gray-50 shadow-lg transition-all hover:shadow-xl">
//             <div className="flex h-48 items-center justify-center bg-indigo-200">
//               <span className="text-4xl">📝</span>
//             </div>
//             <div className="p-6">
//               <h3 className="mb-2 text-xl font-semibold text-gray-800 transition-colors group-hover:text-indigo-600">
//                 할 일 관리 앱
//               </h3>
//               <p className="mb-4 text-gray-600">
//                 React를 이용한 간단한 할 일 관리 애플리케이션입니다.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="rounded bg-gray-200 px-2 py-1 text-xs">
//                   React
//                 </span>
//                 <span className="rounded bg-gray-200 px-2 py-1 text-xs">
//                   CSS
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* 프로젝트 카드 3 */}
//           <div className="group overflow-hidden rounded-xl bg-gray-50 shadow-lg transition-all hover:shadow-xl">
//             <div className="flex h-48 items-center justify-center bg-indigo-200">
//               <span className="text-4xl">🌦️</span>
//             </div>
//             <div className="p-6">
//               <h3 className="mb-2 text-xl font-semibold text-gray-800 transition-colors group-hover:text-indigo-600">
//                 날씨 앱
//               </h3>
//               <p className="mb-4 text-gray-600">
//                 JavaScript와 날씨 API를 이용한 간단한 날씨 정보 웹사이트입니다.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="rounded bg-gray-200 px-2 py-1 text-xs">
//                   HTML
//                 </span>
//                 <span className="rounded bg-gray-200 px-2 py-1 text-xs">
//                   CSS
//                 </span>
//                 <span className="rounded bg-gray-200 px-2 py-1 text-xs">
//                   JavaScript
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 연락처 섹션 */}
//       <section id="contact" className="container mx-auto bg-white px-4 py-16">
//         <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
//           연락처
//         </h2>
//         <div className="mx-auto max-w-md rounded-xl bg-gray-50 p-8 shadow-lg">
//           <form className="space-y-4">
//             <div>
//               <label className="mb-2 block text-gray-700" htmlFor="name">
//                 이름
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 placeholder="홍길동"
//               />
//             </div>
//             <div>
//               <label className="mb-2 block text-gray-700" htmlFor="email">
//                 이메일
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 placeholder="example@email.com"
//               />
//             </div>
//             <div>
//               <label className="mb-2 block text-gray-700" htmlFor="message">
//                 메시지
//               </label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 placeholder="메시지를 입력하세요..."
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
//             >
//               보내기
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* 푸터 */}
//       <footer className="bg-gray-800 py-8 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <p className="mb-4">© 2025 내 포트폴리오. All rights reserved.</p>
//           <div className="flex justify-center space-x-4">
//             <a href="#" className="transition-colors hover:text-indigo-400">
//               Twitter
//             </a>
//             <a href="#" className="transition-colors hover:text-indigo-400">
//               GitHub
//             </a>
//             <a href="#" className="transition-colors hover:text-indigo-400">
//               LinkedIn
//             </a>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

// 실습 1 - 쇼핑몰 목록 페이지 만들기
// import Link from "next/link";
// import Image from "next/image";

// const products = [
//   {
//     id: 1,
//     name: "멋진 시계",
//     price: 19000,
//     imageUrl:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
//     category: "액세서리",
//   },
//   {
//     id: 2,
//     name: "멋진 선글라스! 완전 멋진 시계인데 안사실 겁니까?",
//     price: 45000,
//     imageUrl:
//       "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
//     category: "액세서리",
//   },
//   {
//     id: 3,
//     name: "멋진 러닝화",
//     price: 55000,
//     imageUrl:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
//     category: "신발",
//   },
//   {
//     id: 4,
//     name: "가죽 크로스백",
//     price: 75000,
//     imageUrl:
//       "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFnfGVufDB8fDB8fHww",
//     category: "가방",
//   },
//   {
//     id: 5,
//     name: "니트 스웨터",
//     price: 38000,
//     imageUrl:
//       "https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D",
//     category: "의류",
//   },
//   {
//     id: 6,
//     name: "셔츠",
//     price: 28000,
//     imageUrl:
//       "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fHww",
//     category: "의류",
//   },
// ];

// export default function ProductGrid() {
//   return (
//     // mx-auto: 중앙 배치
//     // max-w-7xl: 최대 너비 제한
//     // px-4: 좌우 패딩
//     // py-8: 상하 패딩
//     <section className="mx-auto max-w-7xl px-4 py-8">
//       {/* mb-6: 아래 요소와의 간격 */}
//       {/* text-2xl: 텍스트 크기 */}
//       {/* font-bold: 폰트 굵기 */}
//       <h2 className="mb-6 text-2xl font-bold">인기 상품</h2>

//       {/* 상품 필터링 부분 */}
//       {/* mb-6: 아래 요소와의 간격 */}
//       {/* flex gap-2: 요소 간격 조정 */}
//       <div className="mb-6 flex gap-2">
//         {/* rounded-md: 둥근 모서리 */}
//         {/* bg-blue-500: 버튼 배경색 */}
//         {/* px-4: 좌우 패딩 */}
//         {/* py-2: 상하 패딩 */}
//         {/* text-white: 텍스트 색상 */}
//         <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
//           전체
//         </button>
//         {/* rounded-md: 둥근 모서리 */}
//         {/* bg-gray-200: 버튼 배경색 */}
//         {/* px-4: 좌우 패딩 */}
//         {/* py-2: 상하 패딩 */}
//         <button className="rounded-md bg-gray-200 px-4 py-2">의류</button>
//         <button className="rounded-md bg-gray-200 px-4 py-2">신발</button>
//         <button className="rounded-md bg-gray-200 px-4 py-2">가방</button>
//         <button className="rounded-md bg-gray-200 px-4 py-2">액세서리</button>
//       </div>

//       {/* 상품 그리드 */}
//       {/* grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4: 그리드 레이아웃 설정 */}
//       <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             // overflow-hidden: 요소 오버플로우 숨김
//             // rounded-lg: 둥근 모서리
//             // border: 테두리
//             // transition-shadow: 그림자 효과 전환
//             // hover:shadow-md: 마우스 오버 시 그림자 효과 추가
//             // duration-300: 300밀리초 동안 전환
//             className="overflow-hidden rounded-lg border transition-shadow hover:shadow-md duration-300"
//           >
//             <Link href={`/products/${product.id}`}>
//               {/* aspect-square: 정사각형 비율 */}
//               <div className="aspect-square">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.name}
//                   // h-full: 높이 100%
//                   // w-full: 너비 100%
//                   // object-cover: 이미지 비율 유지
//                   className="h-full w-full object-cover"
//                   width={300}
//                   height={300}
//                 />
//               </div>

//               {/* p-4: 패딩 */}
//               <div className="p-4">
//                 {/* text-sm: 텍스트 크기 */}
//                 {/* text-gray-500: 텍스트 색상 */}
//                 <span className="text-sm text-gray-500">
//                   {product.category}
//                 </span>
//                 {/* mb-1: 아래 요소와의 간격 */}
//                 {/* truncate: 텍스트 자르기 */}
//                 {/* font-medium: 폰트 굵기 */}
//                 <h3 className="mb-1 truncate font-medium">{product.name}</h3>
//                 <p className="font-bold">{product.price.toLocaleString()}원</p>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
