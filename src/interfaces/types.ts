export interface Product {
  id: number
  image: string
  name: string
  price: number
  discount: number
  priceMember: number
  priceNonMember: number
}

export interface ProductsContextData {
  data: any
  products: Product[]
  page: number
  setPage: (page: number) => void
  setSearch: (search: string) => void
}
