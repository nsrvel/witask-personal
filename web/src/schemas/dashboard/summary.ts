import { z } from "zod";

export const DashboardSummarySchema = z.object({
	title: z.string(),
	metricCount: z.number().int().nonnegative(),
	updatedAt: z.string(),
});

export type DashboardSummary = z.infer<typeof DashboardSummarySchema>;
