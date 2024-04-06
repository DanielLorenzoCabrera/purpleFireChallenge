import type { Metadata } from "next";
import "./styles/global.css";
import "@/assets/fonts/materialUIFonts"


export const metadata: Metadata = {
  title: "Needus",
  description: "This is a technical challenge for PurpleFire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
