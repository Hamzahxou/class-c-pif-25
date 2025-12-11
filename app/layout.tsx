import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets
  display: "swap", // 'swap' ensures text is visible while the font loads
  variable: "--font-poppins", // Define a CSS variable name
});
export const metadata: Metadata = {
  title: "Pif Cetar",
  description: "Website for Pif Cetar Universitas Trunojoyo Madura",

  openGraph: {
    title: "Pif Cetar",
    description: "Website for Pif Cetar Universitas Trunojoyo Madura",
    // url: "https://pifcetar.com", // opsional
    siteName: "Pif Cetar",
    images: [
      {
        url: "/assets/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Pif Cetar Thumbnail",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pif Cetar",
    description: "Website for Pif Cetar Universitas Trunojoyo Madura",
    images: ["/assets/bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>{children}</body>
    </html>
  );
}
