export class ApiError extends Error {
	readonly code: string;
	readonly params: Record<string, unknown> | undefined;

	constructor(code: string, params?: Record<string, unknown>) {
		super(code);
		this.name = "ApiError";
		this.code = code;
		this.params = params;
	}

	static fromEnvelope(body: unknown): ApiError {
		if (
			body &&
			typeof body === "object" &&
			"error" in body &&
			body.error &&
			typeof body.error === "object" &&
			"code" in body.error &&
			typeof body.error.code === "string"
		) {
			const params =
				"params" in body.error && body.error.params && typeof body.error.params === "object"
					? (body.error.params as Record<string, unknown>)
					: undefined;
			return new ApiError(body.error.code, params);
		}
		return new ApiError("error.unknown");
	}
}
