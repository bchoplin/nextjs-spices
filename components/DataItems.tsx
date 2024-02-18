"use client"

import { useState, useMemo } from "react"
import capitalizeString from "@/utils/capitalizeString"
import useSpicesAndBlends from "@/hooks/useSpicesAndBlends"
import DataItem from "@/components/DataItem"
import DataFilters from "@/components/DataFilters"

const DataItems = ({
  primaryData,
  secondaryData
}: {
  primaryData: DataType,
  secondaryData: DataType
}) => {
  const { spices, blends, loading, error } = useSpicesAndBlends()
  const [price, setPrice] = useState<string | null>(null)
  const [heat, setHeat] = useState<number | null>(null)
  const [search, setSearch] = useState<string>("")

  const filteredSpices = useMemo(() => {
    let currentSpices: TSpice[] = spices || []

    if (price) {
      currentSpices = currentSpices.filter(spice => spice.price === price)
    }

    if (heat || heat === 0) {
      currentSpices = currentSpices.filter(spice => spice.heat === heat)
    }

    if (search) {
      const searchLowerCase = search.toLowerCase()
      currentSpices = currentSpices.filter(spice => spice.name.toLowerCase().includes(searchLowerCase))
    }

    if (blends && primaryData === "blends") {
      currentSpices = currentSpices.filter((spice) => {
        const blendSpices = blends.map(blend => blend.spices).flat()
        return blendSpices.includes(spice.id)
      })
    }

    return currentSpices
  }, [spices, blends, price, heat, search, primaryData])

  const filteredBlends = useMemo(() => {
    let currentBlends: TBlend[] = blends || []

    if (filteredSpices && primaryData === "spices") {
      currentBlends = currentBlends.filter((blend) => {
        return filteredSpices.some(spice => blend.spices.includes(spice.id))
      })
    }

    return currentBlends
  }, [blends, filteredSpices, primaryData])

  let primaryItems: React.ReactNode[] = []
  let secondaryItems: React.ReactNode[] = []

  const setDataStyle = (dataType: string) => {
    return primaryData === dataType ? "cards" : "list"
  }

  const setData = (data: React.ReactNode[], dataType: string) => {
    if (primaryData === dataType) {
      primaryItems = data
    } else {
      secondaryItems = data
    }
  }

  if (filteredSpices) {
    const spicesDataStyle = setDataStyle("spices")

    const spiceItems = filteredSpices.map((spice: TSpice) =>
      <DataItem
        key={spice.id}
        name={spice.name}
        color={spice.color}
        price={spice.price}
        heat={spice.heat}
        dataType="spices"
        dataStyle={spicesDataStyle}
      />
    )

    setData(spiceItems, "spices")
  }

  if (filteredBlends) {
    const blendsDataStyle = setDataStyle("blends")

    const blendItems = filteredBlends.map((blend: TBlend) =>
      <DataItem
        key={blend.id}
        name={blend.name}
        dataType="blends"
        dataStyle={blendsDataStyle}
      />
    )

    setData(blendItems, "blends")
  }

  if (loading) {
    return <p>Loading {primaryData}...</p>
  }

  if (error) {
    return <p className="text-red-600">Error fetching data</p>
  }

  return (
    <>
      <div className="grid md:grid-cols-[minmax(0,_1fr)_300px] gap-8">
        {primaryItems &&
          <div>
            <h2 className="text-xl mb-6">{capitalizeString(primaryData)} List</h2>
            {primaryData === "spices" &&
              <DataFilters
                search={search}
                setPrice={setPrice}
                setHeat={setHeat}
                setSearch={setSearch}
              />
            }
            {primaryItems.length < 1 ?
              <p>Sorry, no {primaryData} found.</p>
            :
            <>
              <p className="mb-4 font-bold">{primaryItems.length} {primaryData} found:</p>
              <ul className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-8 mb-12">
                {primaryItems}
              </ul>
            </>
            }
          </div>
        }
        <div className="pt-8 md:pt-0 md:pl-8 border-t-2 md:border-t-0 md:border-l-2">
          <h2 className="text-xl mb-6">Related {capitalizeString(secondaryData)}</h2>
          {secondaryItems.length < 1 ?
            <p>Sorry, no {secondaryData} found.</p>
          :
          <>
            <p className="mb-4 font-bold">{secondaryItems.length} {secondaryData} found:</p>
            <ul className="grid grid-cols-1 gap-2">
              {secondaryItems}
            </ul>
          </>
          }
        </div>
      </div>
    </>
  )
}

export default DataItems