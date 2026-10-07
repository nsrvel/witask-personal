"use client";

import { useQuery } from "@tanstack/react-query";
import { dashboardQuery } from "@/services/dashboard";

export function OverviewPage() {
	const { data, isPending, isError, error } = useQuery(dashboardQuery.dashboardSummaryQueryOpts());

	return (
		<div className="mx-auto max-w-2xl space-y-4">
			<h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
			{isPending && <p className="text-muted-foreground text-sm">Loading summary…</p>}
			{isError && (
				<p className="text-destructive text-sm">
					{error instanceof Error ? error.message : "Failed to load"}
				</p>
			)}
			{data && (
				<div className="rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm">
					<p className="font-medium">{data.title}</p>
					<p className="text-muted-foreground mt-2 text-sm">
						{data.metricCount} metrics · updated {new Date(data.updatedAt).toLocaleString()}
					</p>
				</div>
			)}
		</div>
	);
}
