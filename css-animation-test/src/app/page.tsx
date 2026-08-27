// 실습 3 - 무한 슬라이드
const SLIDES = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

export default function Home() {
  return (
    <div>
      <div className="slideWrap">
        <ul className="imgSlide original">
          {SLIDES.map((slide, index) => (
            <li key={`original-${index}`}>{slide}</li>
          ))}
        </ul>
        <ul className="imgSlide clone">
          {SLIDES.map((slide, index) => (
            <li key={`clone-${index}`}>{slide}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 실습 2- 버튼 hover 시 배경색 변경 애니매이션 with transition
// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="container">
//       <button
//         onMouseEnter={() => setIsOpen(true)}
//         onMouseLeave={() => setIsOpen(false)}
//         className="btn"
//       >
//         아이콘 버튼
//       </button>
//       <div className={`menu-container ${isOpen ? "active" : ""}`}>
//         <div className="menu-item">메뉴1</div>
//         <div className="menu-item">메뉴2</div>
//         <div className="menu-item">메뉴3</div>
//       </div>
//     </div>
//   );
// }

// 실습 1 - transition, hover 애니매이션
// export default function Home() {
//   return (
//     <div className="card-container">
//       <div className="card">영화 카드1</div>
//       <div className="card">영화 카드2</div>
//       <div className="card">영화 카드3</div>
//       <div className="card">영화 카드4</div>
//       <div className="card">영화 카드5</div>
//     </div>
//   );
// }
