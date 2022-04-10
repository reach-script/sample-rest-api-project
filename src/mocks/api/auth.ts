import { MockedRequest, ResponseResolver, restContext } from "msw";
import { rest } from "msw";
const API = process.env.NEXT_PUBLIC_END_POINT;

const mockLogin: ResponseResolver<MockedRequest, typeof restContext> = async (
  req,
  res,
  ctx
) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: "星宮いちご",
    })
  );
};

const mockLogout: ResponseResolver<MockedRequest, typeof restContext> = (
  req,
  res,
  ctx
) => {
  return res(ctx.status(200), ctx.json("logout"));
};

export const authHandlers = [
  rest.post(`${API}/login`, mockLogin),
  rest.post(`${API}/logout`, mockLogout),
];
