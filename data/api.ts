import spices from './spices'
import blends from './blends'
import slugify from "slugify"

export const fetchSpices = async (): Promise<TSpice[]> => {
  const prom: Promise<TSpice[]> = new Promise((resolveOuter) => {
    setTimeout(() => {
      resolveOuter(spices)
    }, 2000)
  })

  return prom
}

export const fetchBlends = async (): Promise<TBlend[]> => {
  const prom: Promise<TBlend[]> = new Promise((resolveOuter) => {
    setTimeout(() => {
      resolveOuter(blends)
    }, 2000)
  })

  return prom
}

export const fetchSpice = async (name: string): Promise<TSpice | undefined> => {
  const prom: Promise<TSpice | undefined> = new Promise((resolveOuter) => {
    setTimeout(() => {
      resolveOuter(spices.find((spice) => slugify(spice.name, { lower: true, remove: /[^a-zA-Z ]/g }) === name))
    }, 2000)
  })

  return prom
}

export const fetchBlend = async (name: string): Promise<TBlend | undefined> => {
  const prom: Promise<TBlend | undefined> = new Promise((resolveOuter) => {
    setTimeout(() => {
      resolveOuter(blends.find((blend) => slugify(blend.name, { lower: true, remove: /[^a-zA-Z ]/g }) === name))
    }, 2000)
  })

  return prom
}