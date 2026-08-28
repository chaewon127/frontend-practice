export default function Home() {
  return (
    <main>
      {/* 히어로 섹션 */}
      <section className="h-dvh flex items-center justify-center bg-indigo-900 text-white">
        <div className="text-center p-8">
          <h1 className="text-6xl font-extrabold">웹사이트 애니메이션</h1>
          <p className="opacity-70 mt-4">
            아래로 스크롤해서 sticky를 활용한 랜딩 페이지를 확인하세요
          </p>
        </div>
      </section>

      <section className="min-h-dvh bg-blue-900 text-white">
        {/* items-start를 활용하여 위 아래로 stretch 되는 것 막기 */}
        <div className="flex items-start">
          {/* 왼쪽: sticky 제목 영역 */}
          <div className="flex-1/3 px-12 py-44">
            <h2 className="text-4xl font-bold">멋진 제목</h2>
            <h3 className="text-2xl font-semibold text-gray-400">
              어쩌고 저쩌고 설명
            </h3>
          </div>

          {/* 오른쪽: 스크롤 콘텐츠 */}
          <div className="flex-2/3 flex flex-col gap-72 py-44 pr-12">
            <div className="p-6 h-64 bg-gray-400 rounded-xl">카드</div>
            <div className="p-6 h-64 bg-gray-400 rounded-xl">카드</div>
            <div className="p-6 h-64 bg-gray-400 rounded-xl">카드</div>
            <div className="p-6 h-64 bg-gray-400 rounded-xl">카드</div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="h-dvh flex items-center justify-center bg-indigo-900 text-white">
        아래 부분
      </footer>
    </main>
  );
}
