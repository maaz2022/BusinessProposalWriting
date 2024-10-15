import "./globals.css";
import Navbar from "@/components/Navbar";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";
const nunito = Nunito({ subsets: ["latin"], weight:["300","400","500","600","800"] });


export const metadata = {
  title:"Persuasion for Business Proposal Writers: Win Clients",
  description: " Invest in a proposal writer who can put your ideas into action by business proposal writing services. Ensure your proposals are on top and survive a recession with resilience.",
  openGraph: {
    title: "Persuasion for Business Proposal Writers: Win Clients",
    description:
      " Invest in a proposal writer who can put your ideas into action by business proposal writing services. Ensure your proposals are on top and survive a recession with resilience.",
    images: [
      {
        url: "",
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
