import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import MarqueeSection from "@/components/nav/MarqueeSection";
import Footer from "@/components/footer/Footer";
import ContextAPIProvider from "@/components/contextAPI/ContextAPI";
import { ToastContainer } from "react-toastify";

const banglaFont = Noto_Sans_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bazar Dor",
  description:
    "Bazar Analizy is a smart grocery market analysis app that helps users compare product prices across different markets, analyze price differences, and make better purchasing decisions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${banglaFont.className}`}>
      <body className="min-h-full flex flex-col transition-all duration-300 relative">
        <ContextAPIProvider>
          <header className="sm:sticky top-0 z-50">
            <nav>
              <Navbar></Navbar>
              <MarqueeSection></MarqueeSection>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <Footer></Footer>
          </footer>
        </ContextAPIProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
