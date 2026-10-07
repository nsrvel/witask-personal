import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { AppProviders } from "@/integrations/tanstack-query/providers";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Personal Dashboard",
	description: "Fullstack dashboard starter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="flex h-dvh min-h-0 flex-col overflow-hidden">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<AppProviders>
						{children}
						<Toaster />
					</AppProviders>
				</ThemeProvider>
			</body>
		</html>
	);
}
