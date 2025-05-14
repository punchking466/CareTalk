import { http, HttpResponse } from "msw";

type LoginRequestBody = {
  email: string;
  password: string;
};

export const handlers = [
  http.post("/api/login", async ({ request }) => {
    const body = (await request.json()) as LoginRequestBody;

    if (body.email === "test@example.com" && body.password === "12345678") {
      return HttpResponse.json({ success: true }, { status: 200 });
    }
    return HttpResponse.json({ success: false }, { status: 401 });
  }),
];
