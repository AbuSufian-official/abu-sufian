import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from 'react-toastify';
import Navbar from "./components/navber";
import Footer from "./components/footer";
import ScrollFX from "./components/scroll-fx";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abu Sufian",
  description: "........",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-blue-100">
        <Navbar/>
        {children}
        <Footer/>
        <ScrollFX/>
       


        <ToastContainer
          position="top-center"
          autoClose={800}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />

      </body>
    </html>
  );
}
