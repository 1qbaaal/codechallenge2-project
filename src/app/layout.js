import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
    {/* <html lang="en">
    <body className={inter.className}> */}
        <Navbar className="z-50" />
        {children}
        <Footer />
    {/* </body>
    </html> */}
    </>
  );
}
