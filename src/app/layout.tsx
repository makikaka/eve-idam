import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google';
import Navbar from "@/components/navbar";

const roboto = Roboto({
  weight: ['500', '400'],
  subsets: ['latin', 'cyrillic', "cyrillic-ext"],
  variable: '--font-roboto'
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} font-sans`} >
      
      <body      className="font-sans" >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
