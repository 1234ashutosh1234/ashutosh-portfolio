import type { Metadata } from "next";
import "./globals.css";
import { ChatProvider } from "@/context/ChatContext";

export const metadata: Metadata = {
  title: "Ashutosh Raj | AI & Data Analytics Portfolio",
  description:
    "Portfolio of Ashutosh Raj - Computer Science Engineering student specializing in Artificial Intelligence, Data Analytics, Machine Learning, Business Intelligence and Full Stack Development.",

  keywords: [
    "Ashutosh Raj",
    "Portfolio",
    "Data Analyst",
    "AI Engineer",
    "Machine Learning",
    "Python",
    "Power BI",
    "Next.js",
    "Streamlit",
  ],

  authors: [{ name: "Ashutosh Raj" }],

  creator: "Ashutosh Raj",

  openGraph: {
    title: "Ashutosh Raj Portfolio",
    description:
      "AI • Machine Learning • Data Analytics • Full Stack Developer",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChatProvider>
          {children}
        </ChatProvider>
      </body>
    </html>
  );
}