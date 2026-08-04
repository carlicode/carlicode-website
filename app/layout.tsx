import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Carli Code", template: "%s · Carli Code" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "/es";
  const seg = pathname.split("/").filter(Boolean)[0];
  const lang = seg === "en" ? "en" : "es";

  return (
    <html
      lang={lang}
      className={`${inter.variable} h-full`}
    >
      <body className="min-h-full bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
