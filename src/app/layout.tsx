import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tailwind Kit",
  description: "Ready to use components by Tailwind Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <main className="flex h-screen"> */}
        {/* <aside className="max-w-[350px] border-r-2  w-[350px]"></aside> */}
        <section className="flex-1 ">{children}</section>
        {/* </main> */}
      </body>
    </html>
  );
}
