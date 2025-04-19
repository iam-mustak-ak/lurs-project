import { Inter } from "next/font/google";

import "./globals.css";
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL("https://www.lurc2025.com"),
    title: "LURC - Leading University Research Conference 2025",
    keywords: [
        "LURS",
        "LURC",
        "Leading University Research Society",
        "Leading University Research Conference 2025",
        "LURC 2025",
        "Leading University",
        "Leading University Research",
        "Research Conference",
        "Research Society",
        "Research",
        "Conference",
        "Academic Conference",
        "Research Presentation",
        "Research Publication",
        "Research Paper",
        "Research Symposium",
        "Research Workshop",
        "Research Forum",
        "Research Networking",
        "Research Collaboration",
        "Research Community",
        "2nd LURC 2025",
    ],
    authors: [
        {
            name: "LURS",
            url: "https://www.lurc2025.com",
        },
    ],
    creator: "LURS",
    publisher: "LURS",
    description:
        "The Leading University Research Society (LURS) cordially invites students, researchers, academics, and professionals from diverse disciplines to submit original research for presentation at the “2nd Leading University Research Conference 2025” (2nd LURC 2025)",
    icon: {
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: "LURC - Leading University Research Conference 2025",
        description:
            "The Leading University Research Society (LURS) cordially invites students, researchers, academics, and professionals from diverse disciplines to submit original research for presentation at the “2nd Leading University Research Conference 2025” (2nd LURC 2025)",
        url: "https://www.lurc2025.com",
        siteName: "LURC - Leading University Research Conference 2025",
        images: [
            {
                url: "/g_1.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "Leading University Research Conference 2025",
        title: "LURC - Leading University Research Conference 2025",
        description:
            "The Leading University Research Society (LURS) cordially invites students, researchers, academics, and professionals from diverse disciplines to submit original research for presentation at the “2nd Leading University Research Conference 2025” (2nd LURC 2025)",
        images: ["/g_1.jpg"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}> {children}</body>
        </html>
    );
}
