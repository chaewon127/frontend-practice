import "tailwindcss";

// src/app/page.tsx

export default function Home() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <button
          type="button"
          className="mx-2 rounded-lg px-6 py-3 text-sm font-medium bg-blue-500 text-white hover:bg-blue-600"
        >
          Default
        </button>
        <button
          type="button"
          className="mr-2 rounded-lg px-6 py-3 text-sm font-medium bg-gray-300 text-gray-700 hover:bg-gray-400"
        >
          Alternative
        </button>
        <button
          type="button"
          className="mr-2 rounded-lg px-6 py-3 text-sm font-medium bg-gray-800 text-white hover:bg-gray-900"
        >
          Dark
        </button>
        <button
          type="button"
          className="mr-2 rounded-lg px-6 py-3 text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300"
        >
          Light
        </button>
        <button
          type="button"
          className="mr-2 rounded-lg px-6 py-3 text-sm font-medium bg-green-500 text-white hover:bg-green-600"
        >
          Green
        </button>
        <button
          type="button"
          className="mr-2 rounded-lg px-6 py-3 text-sm font-medium bg-red-500 text-white hover:bg-red-600"
        >
          Red
        </button>
        <button
          type="button"
          className="mr-2 rounded-lg px-6 py-3 text-sm font-medium bg-yellow-500 text-white hover:bg-yellow-600"
        >
          Yellow
        </button>
        <button
          type="button"
          className="mr-2 rounded-lg px-6 py-3 text-sm font-medium bg-purple-500 text-white hover:bg-purple-600"
        >
          Purple
        </button>
      </div>

      <div>
        <div className="flex h-screen items-center justify-center">
          <div className="max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                2024년 기술 동향
              </h5>
              <p className="text-gray-700 mb-3 font-normal">
                최신 기술 동향에 대한 기사를 통해 혁신적인 아이디어와 트렌드를
                탐구해보세요. 이 글에서는 인공지능과 머신러닝의 발전이 우리
                생활에 미치는 영향을 다룹니다.
              </p>
              <button className="rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white">
                더보기
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex h-screen items-center justify-center">
          <form className="w-full max-w-sm bg-white rounded-lg border border-gray-200 p-6 shadow-md">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                이메일
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                required
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded-sm border border-gray-300 bg-gray-50"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                로그인 상태 유지
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
