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

    applicationName: "Vamsi Portfolio",

    category: "technology",

    manifest: "/manifest.webmanifest",

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
                alt: "Vamsi Chilukuri Portfolio",
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

        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    themeColor: "#09090B",

    icons: {
        icon: [
            {
                url: "/favicon.ico",
            },
            {
                url: "/icons/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                url: "/icons/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],

        apple: [
            {
                url: "/apple-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],

        shortcut: "/favicon.ico",
    },

    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Vamsi",
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
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body suppressHydrationWarning className="min-h-full flex flex-col">
                {children}
            </body>
        </html>
    );
}
