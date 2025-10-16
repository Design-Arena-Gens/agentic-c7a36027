import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello from Agentic",
  description: "A minimal greeting crafted autonomously"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
