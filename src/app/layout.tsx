import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TFP — The Freedom Playbook | Direct Execution Blueprints & Wealth OS",
  description:
    "Direct, battle-tested execution playbooks, verified case studies, copyable outreach scripts, and tactical toolstacks to build $10k-$50k/mo digital cashflow. The Freedom Playbook — your path to time and financial freedom.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} dark antialiased`}>
      <body className="min-h-screen bg-[#08090E] text-zinc-100 flex flex-col font-sans selection:bg-[#D4F84C] selection:text-black">
        {children}
      </body>
    </html>
  );
}
