import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sheared/NavBar";
import Footer from "@/components/sheared/Footer";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <Providers>
          {children}
        </Providers>
        <ToastContainer/>
      </body>
    </html>
  );
}