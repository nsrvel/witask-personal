import { api } from "@/integrations/api-client/client";
import { DashboardSummarySchema } from "@/schemas/dashboard/summary";

export async function getDashboardSummary() {
	return api.get("/dashboard/summary", DashboardSummarySchema);
}
