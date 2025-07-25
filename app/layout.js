import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

export const gamilia = localFont({
  src: "../public/fonts/GamiliademoRegular.otf",
  variable: "--font-gamilia",
  display: "swap",
});
export const cobe = localFont({
  src: "../public/fonts/Cobe-Regular.ttf",
  variable: "--font-cobe",
  display: "swap",
});

export const metadata = {
  title: "Unaiza Zafar",
  description: "Unaiza Zafar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${cobe.variable} ${gamilia.variable} font-cobe antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
