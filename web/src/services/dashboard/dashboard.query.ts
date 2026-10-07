import { queryOptions } from "@tanstack/react-query";
import { Q_DASHBOARD_SUMMARY } from "./dashboard.key";
import { getDashboardSummary } from "./dashboard.service";

export const dashboardSummaryQueryOpts = () =>
	queryOptions({
		queryKey: [Q_DASHBOARD_SUMMARY],
		queryFn: () => getDashboardSummary(),
	});
