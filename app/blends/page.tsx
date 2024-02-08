import type { Metadata } from 'next'
import Title from "@/components/Title"
import DataItems from "@/components/DataItems"

export const metadata: Metadata = {
  title: `Blends | ${process.env.siteTitle}`,
  description: "This list of blends will help you with all of your cooking needs and have a variety of spices for seasoning.",
}

const Blends = () => {
  return (
    <>
      <Title titleType="pageTitle">Blends</Title>
      <DataItems primaryData="blends" secondaryData="spices" />
    </>
  )
}

export default Blends