import { jsonData } from "@/lib/api-response";

export function GET() {
	return jsonData({ status: "ok" });
}
