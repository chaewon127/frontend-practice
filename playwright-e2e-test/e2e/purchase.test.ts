import { test } from "@playwright/test";

test("로그인 후 구매까지의 시나리오", async ({ page }) => {
  // 1. 로그인 페이지에 접속한다.
  await page.goto("http://localhost:3000/auth/login");
});
