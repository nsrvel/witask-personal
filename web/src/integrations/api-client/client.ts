import { apiV1Base } from "@/env";
import { ApiError } from "@/lib/api-error";

type Schema<T> = { parse: (input: unknown) => T };

async function parseResponse<T>(res: Response, schema: Schema<T>): Promise<T> {
	const json: unknown = await res.json().catch(() => null);
	if (!res.ok) {
		throw ApiError.fromEnvelope(json);
	}
	if (!json || typeof json !== "object" || !("data" in json)) {
		throw new ApiError("error.invalid_response");
	}
	return schema.parse((json as { data: unknown }).data);
}

export const api = {
	async get<T>(path: string, schema: Schema<T>): Promise<T> {
		const normalized = path.startsWith("/") ? path : `/${path}`;
		const res = await fetch(`${apiV1Base()}${normalized}`, {
			credentials: "same-origin",
		});
		return parseResponse(res, schema);
	},
};
