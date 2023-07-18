import { Footer, Header } from "@/shared/components";
import "./globals.scss";
import "swiper/css";
import type { Metadata } from "next";
import { ContextProvider, SentryProvider } from "@/shared/providers";

export const metadata: Metadata = {
  title: "Хмельницьк залізобетон",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ContextProvider>
        <body>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}
