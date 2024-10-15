import ContactForm from '@/components/contactComponents/ContactForm'
import React from 'react'

export const metadata = {
  title:"Contact Our Top Business Proposal Writers for Custom Solutions",
  description: "Need a winning business proposal? Reach out to our business proposal writers for tailored proposals to meet your business needs. Contact us now!",
  openGraph: {
    title: "Contact Our Top Business Proposal Writers for Custom Solutions",
    description:
      "Need a winning business proposal? Reach out to our business proposal writers for tailored proposals to meet your business needs. Contact us now!",
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
      "https://businessproposalwriters.com/contact",
  },
} 
const page = () => {
  return (
    <ContactForm/>
  )
}

export default page
