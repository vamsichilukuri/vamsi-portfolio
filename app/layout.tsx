import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    metadataBase: new URL("https://vamsichilukuri.dev"),

    title: {
        default: "Vamsi Chilukuri | Senior Full Stack Developer",
        template: "%s | Vamsi Chilukuri",
    },

    description:
        "Senior Full Stack Developer with 6+ years of experience building enterprise software, AI-powered products and cloud-native applications.",

    keywords: [
        "Vamsi Chilukuri",
        "Senior Full Stack Developer",
        "React Developer",
        "Next.js",
        "TypeScript",
        "Node.js",
        "AI Engineer",
        "Portfolio",
        "Cloud Native",
        "Software Engineer",
    ],

    authors: [
        {
            name: "Vamsi Chilukuri",
        },
    ],

    creator: "Vamsi Chilukuri",

    publisher: "Vamsi Chilukuri",

    openGraph: {
        title: "Vamsi Chilukuri | Senior Full Stack Developer",
        description:
            "Building enterprise software, AI products and scalable cloud-native applications.",

        url: "https://vamsichilukuri.dev",

        siteName: "Vamsi Chilukuri",

        locale: "en_US",

        type: "website",

        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Vamsi Chilukuri",

        description:
            "Senior Full Stack Developer building AI-powered enterprise software.",

        images: ["/og-image.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },

    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
