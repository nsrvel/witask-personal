import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
	{ href: "/", label: "Overview" },
	{ href: "/settings", label: "Settings" },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-full min-h-0">
			<aside className="flex w-56 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
				<div className="border-b border-sidebar-border px-4 py-3 font-semibold">Dashboard</div>
				<nav className="flex flex-1 flex-col gap-1 p-2">
					{nav.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
						>
							{item.label}
						</Link>
					))}
				</nav>
			</aside>
			<div className="flex min-w-0 flex-1 flex-col">
				<header className="flex h-12 shrink-0 items-center justify-end border-b border-border px-4">
					<ThemeToggle />
				</header>
				<main className="min-h-0 flex-1 overflow-auto p-6">{children}</main>
			</div>
		</div>
	);
}
