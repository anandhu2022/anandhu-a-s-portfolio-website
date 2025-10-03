import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Anandhu A S | Frontend Developer Portfolio",
    description: "Welcome to the portfolio of Anandhu A S – Frontend developer specializing in Next.js, React, and TypeScript. Showcasing projects, skills, and professional experience.",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta name="google-site-verification" content="kGA9BwEpk9YKuQuPPDLQ6oicus3Mv7T3dabkAjRsG6s"/>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
