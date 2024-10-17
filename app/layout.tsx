import "./globals.css";
import Navbar from "@/components/Navbar";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";
const nunito = Nunito({ subsets: ["latin"], weight:["300","400","500","600","800"] });


export const metadata = {
  title:"Business Proposal Writing Services: Win Clients at Edge",
  description: "Professional business proposal writers implement your ideas through proposal writing services to help you grow your business and win clients. Get started today!",
  openGraph: {
    title: "Business Proposal Writing Services: Win Clients at Edge",
    description:
      "Professional business proposal writers implement your ideas through proposal writing services to help you grow your business and win clients. Get started today!",
    images: [
      {
        url: "https://businessproposalwriters.com/about3.png",
        width: 1300,
        height: 628,
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://businessproposalwriters.com",
  },
  alternates: {
    canonical:
      "https://businessproposalwriters.com",
  },
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${nunito.className}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
