import type { DashboardSummary } from "@/schemas/dashboard/summary";

export async function getDashboardSummary(): Promise<DashboardSummary> {
	return {
		title: "Overview",
		metricCount: 3,
		updatedAt: new Date().toISOString(),
	};
}
