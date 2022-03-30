import { rest } from "msw";
import { authHandler } from "./api/auth";
import { userHandler } from "./api/user";
const API = "http://localhost:3000/api";

export const handlers = [...authHandler, ...userHandler];
