import type { Metadata } from "next";
import { SiteLoader } from "@/components/site-loader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kokeb Excellence Language Academy",
    template: "%s | Kokeb Excellence",
  },
  description:
    "Live one to one online Ethiopian language classes in Amharic, Tigrinya, Afaan Oromo and more for learners ages 8 and up.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const themeScript = `
  try {
    const saved = localStorage.getItem('kokeb-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', saved ? saved === 'dark' : prefersDark);
  } catch (_) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body><SiteLoader />{children}</body>
    </html>
  );
}
