"use client"

import { useEffect, useState, useCallback } from "react"
import { fetchSpices, fetchBlends } from "@/data/api"

type SpicesType = TSpice[] | undefined
type BlendsType = TBlend[] | undefined
type LoadingType = boolean
type ErrorType = string | null

interface UseSpicesAndBlendsResult {
  spices: SpicesType;
  blends: BlendsType;
  loading: LoadingType;
  error: ErrorType;
}

const useSpicesAndBlends = (): UseSpicesAndBlendsResult => {
  const [spices, setSpices] = useState<SpicesType>([])
  const [blends, setBlends] = useState<BlendsType>([])
  const [loading, setLoading] = useState<LoadingType>(true)
  const [error, setError] = useState<ErrorType>(null)

  useEffect(() => {
    async function fetchSpicesAndBlends() {
      try {
        setLoading(true)

        const [spicesData, blendsData] = await Promise.all([
          fetchSpices(),
          fetchBlends(),
        ])

        setSpices(spicesData)
        setBlends(blendsData)
        setError(null)
      } catch (error: unknown) {
        let message = 'Unknown Error'
        if (error instanceof Error) message = error.message
        setError(message)
      } finally {
        setLoading(false)
      }
    }

    fetchSpicesAndBlends()
  }, [])

  return {
    spices,
    blends,
    loading,
    error,
  }
}

export default useSpicesAndBlends