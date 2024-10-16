import AboutFeatures from '@/components/aboutComponents/AboutFeatures'
import FifthSection from '@/components/aboutComponents/FifthSection'
import FirstSection from '@/components/aboutComponents/FirstSection'
import FourthSection from '@/components/aboutComponents/FourthSection'
import ThirdSection from '@/components/aboutComponents/ThirdSection'
import React from 'react'
import SixthSection from '../../components/aboutComponents/SixthSection'


export const metadata = {
  title:"Professional Business Proposal Writer at Your Service - About Us",
  description: "Meet our skilled team of business proposal writers. Our professionals create personalized, compelling proposals that help you win clients. Reach out now!",
  openGraph: {
    title: "Professional Business Proposal Writer at Your Service - About Us",
    description:
      "Meet our skilled team of business proposal writers. Our professionals create personalized, compelling proposals that help you win clients. Reach out now!",
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
      "https://businessproposalwriters.com/about",
  },
} 
const AboutPage = () => {
  return (
    <>
        <FirstSection/>
        <AboutFeatures/>
        <ThirdSection/>
        <FourthSection/> 
        <FifthSection/>
        <SixthSection/>
    </>
  )
}

export default AboutPage
