import { rest } from "msw";
import { authHandlers } from "./api/auth";
import { taskHandlers } from "./api/task";
import { userHandlers } from "./api/user";
const API = "http://localhost:3000/api";

export const handlers = [...authHandlers, ...userHandlers, ...taskHandlers];
