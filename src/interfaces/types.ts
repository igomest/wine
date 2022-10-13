export interface Product {
  id: number
  image: string
  name: string
  price: number
  discount: number
  priceMember: number
  priceNonMember: number
  type?: string
  classification?: string
  size?: string
  rating?: number
  avaliations?: number
  country?: string
  region?: string
  flag?: string
  sommelierComment?: string
}

export interface ProductsContextData {
  data: any
  products: Product[]
  page: number
  setPage: (page: number) => void
  setSearch: (search: string) => void
  isLoading?: boolean
}
