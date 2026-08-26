import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Input({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={twMerge(
        clsx(
          "border border-gray-300 rounded-md px-3 py-1 shadow-xs w-full",
          className,
        ),
      )}
      {...props}
    />
  );
}

// 1. clsx
// - falsy 값 자동 제거
// - 여러 개의 className을 조건부로 합칠 수 있음
// - 문자열 병합

// 2. tailwind-merge
// - tailwindcss className 병합
// - 충돌되는 className을 자동으로 제거
// - ex) "bg-red-500 bg-blue-500" => "bg-blue-500"

//
