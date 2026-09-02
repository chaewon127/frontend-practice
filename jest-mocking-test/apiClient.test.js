const { fetchData } = require("./apiClient");

describe("apiClient.js 테스트", () => {
  test("API 호출 후 데이터 포맷이 올바르게 되는지 확인", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, // fetch가 성공적으로 호출되었음을 나타냄
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: "Leanne Graham",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
        },
      }),
    });
    // Arrange
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
