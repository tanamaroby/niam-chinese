import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const font = Inconsolata({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FBC",
  description: "FBC Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${font.className} antialiased`}>
        <ThemeProvider attribute="class" enableSystem>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className="w-full min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
