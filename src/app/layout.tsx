import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ST Insight - SERGIO TACCHINI 경영실적 보고서",
  description: "SERGIO TACCHINI 브랜드 2026년 1월 경영실적 요약보고서 - AI Insight Dashboard",
  keywords: ["SERGIO TACCHINI", "경영보고서", "실적분석", "브랜드분석"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
