import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grostesk",
  weight: ["300", "400", "500", "700", "600"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Unaiza Zafar",
  description: "Unaiza Zafar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
