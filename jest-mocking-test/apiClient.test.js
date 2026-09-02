const { fetchData } = require("./apiClient");

describe("apiClient.js 테스트", () => {
  test("API 호출 후 데이터 포맷이 올바르게 되는지 확인", async () => {
    // Arrange
    global.fetch = jest.fn();
    const url = "https://jsonplaceholder.typicode.com/users/1";

    // Act
    const result = await fetchData(url);

    // Assert
    expect(result).toEqual({
      userId: 1,
      formattedName: "LEANNE GRAHAM",
      address: "Kulas Light Apt. 556 Gwenborough",
    });
  });
});
