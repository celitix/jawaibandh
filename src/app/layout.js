import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - Jawai Bandh",
  description: "Welcome We welcome you to the land of culture and heritage where tourists visit for heritage and history of Rajwada(Shatriya kingdom). But Rajasthan offers a way more than heritage and history.",
    alternates: {
    canonical: "https://jawaibandh.com/",
  },
   icons: {
    icon: [
      { url: '/Jawai-Bandh-32x32.ico', sizes: '32x32', type: 'image/png' },
      { url: '/Jawai-Bandh-128x128.ico', sizes: '128x128', type: 'image/png' },
    ],
    apple: [
      { url: '/Jawai-Bandh-180x180.ico', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
