import { submitLogin } from "./submitLogin";

describe("submitLogin()", () => {
  it("Login Success", async () => {
    const result = await submitLogin("test@example.com", "12345678");

    expect(result.status).toBe(200);
    expect(result.body).toEqual({ success: true });
  });

  it("Login Fail", async () => {
    const result = await submitLogin("fail@example.com", "wrongpw");

    expect(result.status).toBe(401);
    expect(result.body).toEqual({ success: false });
  });
});
