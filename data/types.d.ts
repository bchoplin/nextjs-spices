type DataType = "spices" | "blends"

interface TSpice {
  id: number,
  name: string,
  price?: string,
  heat: number,
  color: string
}

interface TBlend {
  id: number,
  name: string,
  blends: number[],
  spices: number[],
  description: string
}