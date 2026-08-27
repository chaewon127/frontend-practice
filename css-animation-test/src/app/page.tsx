// 실습 2- 버튼 hover 시 배경색 변경 애니매이션 with transition
export default function Home() {
  return (
    <div className="container">
      <button className="btn">아이콘 버튼</button>
      <div className="menu-container">
        <div className="menu-item">메뉴1</div>
        <div className="menu-item">메뉴2</div>
        <div className="menu-item">메뉴3</div>
      </div>
    </div>
  );
}

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
