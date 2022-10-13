import { ReactNode } from 'react'

export interface PaginationProps {
  totalPages: number
  itemsPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

export interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export interface ProductCardProps {
  id: number
  image: string
  name: string
  price: number
  discount: number
  priceMember: number
  priceNonMember: number
}

export interface ProductPageProps {
  image: string
  name: string
  price: number
  discount: number
  priceMember: number
  priceNonMember: number
}

export interface ProductsProviderProps {
  children: ReactNode
}
