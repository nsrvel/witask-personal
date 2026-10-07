import { NextResponse } from "next/server";

export function jsonData<T>(data: T, status = 200) {
	return NextResponse.json({ data }, { status });
}

export function jsonError(code: string, status: number, params?: Record<string, unknown>) {
	return NextResponse.json({ error: { code, params } }, { status });
}
