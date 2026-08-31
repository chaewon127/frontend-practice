"use client";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="card flex flex-col gap-4 items-center justify-center size-88 bg-gray-200 rounded-lg p-4">
        <h1 className="question text-lg font-bold">질문 어쩌고?</h1>
        <div className="answer bg-white w-full p-4 rounded-lg">답변1</div>
        <div className="answer bg-white w-full p-4 rounded-lg">답변2</div>
        <div className="answer bg-white w-full p-4 rounded-lg">답변3</div>
      </div>
    </div>
  );
}
