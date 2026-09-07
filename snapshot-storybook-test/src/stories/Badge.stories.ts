import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "@/components/Badge";

const meta = {
  // Storybook 사이트의 사이드바에 표시되는 제목
  title: "Components/Badge",
  // 스토리북에서 사용할 컴포넌트
  component: Badge,
  // 컴포넌트가 표시되는 위치
  parameters: {
    layout: "centered",
  },
  // 컴포넌트 문서 자동 생성
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

// meta 내보내기
export default meta;

type Story = StoryObj<typeof meta>;

// 스토리 작성
export const Default: Story = {
  // props 값 입력
  args: {
    children: "배지 내용",
  },
};
