import type { Metadata } from 'next'
import Title from "@/components/Title"
import DataItems from "@/components/DataItems"

export const metadata: Metadata = {
  title: `Spices | ${process.env.siteTitle}`,
  description: "This list of spices will help you with all of your cooking needs and can be easily filtered by price, heat, and name.",
}

const Spices = () => {
  return (
    <>
      <Title titleType="pageTitle">Spices</Title>
      <DataItems primaryData="spices" secondaryData="blends" />
    </>
  )
}

export default Spices