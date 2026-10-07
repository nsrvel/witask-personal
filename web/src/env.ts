import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_API_URL: z.string().url().optional(),
	},
	runtimeEnv: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
	},
	emptyStringAsUndefined: true,
});

/** Browser + server: base path for REST (`/api/v1` or absolute when split-deployed). */
export function apiV1Base(): string {
	const origin = env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
	if (origin) {
		return `${origin}/api/v1`;
	}
	return "/api/v1";
}
