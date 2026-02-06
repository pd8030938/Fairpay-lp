import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ViewProvider } from "@/lib/viewContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fairpay - O Futuro dos Pagamentos",
  description: "A plataforma de pagamentos mais rápida, segura e simples do mercado. Junte-se à nossa waitlist e faça parte dessa revolução!",
  keywords: "pagamentos, fintech, fairpay, digital",
  authors: [{ name: "Fairpay Team" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fairpay.com",
    siteName: "Fairpay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <ViewProvider>
          {children}
        </ViewProvider>
      </body>
    </html>
  );
}
