import { Inter } from "next/font/google";

import "./globals.css";
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "LURS - Leading University Research Society",
    description:
        "The Leading University Research Society (LURS) cordially invites students, researchers, academics, and professionals from diverse disciplines to submit original research for presentation at the “2nd Leading University Research Conference 2025” (2nd LURC 2025)",
    icon: {
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: "LURS - Leading University Research Society",
        description:
            "The Leading University Research Society (LURS) cordially invites students, researchers, academics, and professionals from diverse disciplines to submit original research for presentation at the “2nd Leading University Research Conference 2025” (2nd LURC 2025)",
        url: "https://lurs-lurc.vercel.app/",
        siteName: "LURS - Leading University Research Society",
        images: [
            {
                url: "/g_1.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "The Leading University Research Society",
        title: "LURS - Leading University Research Society",
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
