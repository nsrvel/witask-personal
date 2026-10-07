import { jsonData } from "@/lib/api-response";
import { getDashboardSummary } from "@/server/dashboard/service";

export async function GET() {
	const data = await getDashboardSummary();
	return jsonData(data);
}
