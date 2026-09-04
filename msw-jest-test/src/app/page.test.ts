import { render, screen } from "@testing-library/react";
import PostListPage from "./page";

describe("게시글 목록 페이지", () => {
  test("게시글 목록을 불러와 화면에 렌더링한다", async () => {
    render(<PostListPage />);

    // TODO: listitem 역할을 가진 요소가 2개인지 확인해보세요.

    // TODO: "1: 첫 번째 게시글" 텍스트가 화면에 있는지 확인해보세요.

    // TODO: "2: 두 번째 게시글" 텍스트가 화면에 있는지 확인해보세요.
  });
});