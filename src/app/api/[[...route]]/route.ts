import { getRequestContext } from "@cloudflare/next-on-pages";

import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const route = app.get("/ping", async (c) => {
	const { env } = getRequestContext();
	return c.text(env.DISCORD_PUBLIC_KEY, 200);
});

type AppType = typeof route;
const GET = handle(app);
export { GET, type AppType };
