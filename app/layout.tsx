import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";


const font=Poppins({
  weight: ["100","200","300","400","500","600","700","800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App Landing | Next.js",
  description: "App landing page using Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
      
        className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
