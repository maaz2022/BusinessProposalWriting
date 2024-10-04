import AboutFeatures from '@/components/aboutComponents/AboutFeatures'
import FifthSection from '@/components/aboutComponents/FifthSection'
import FirstSection from '@/components/aboutComponents/FirstSection'
import FourthSection from '@/components/aboutComponents/FourthSection'
import ThirdSection from '@/components/aboutComponents/ThirdSection'
import React from 'react'
import SixthSection from '../../components/aboutComponents/SixthSection'

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
