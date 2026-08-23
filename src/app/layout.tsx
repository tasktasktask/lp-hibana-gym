import type { Metadata } from "next";
import { Anton, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HIBANA GYM 24 RECRUIT | 採用サイト",
  description:
    "HIBANA GYM 24の採用サイトです。人が変わる瞬間に、伴走する会社。全国218店舗、充実のキャリアパスと成長環境をご紹介します。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${anton.variable} ${notoSansJP.variable}`}>
      <body className="bg-white text-brand-ink antialiased">{children}</body>
    </html>
  );
}
