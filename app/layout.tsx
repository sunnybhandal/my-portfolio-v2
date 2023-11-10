import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Sunny Bhandal",
  description: "Personal Portfolio Style Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#efefef]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
