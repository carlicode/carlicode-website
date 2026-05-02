import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-[var(--paper)] text-[var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
