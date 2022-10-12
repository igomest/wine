import { PaginationProps } from 'interfaces/props'
import { PaginationItem } from './PaginationItem'

import { Container } from './styles'

const siblingsCount = 1

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export const Pagination = ({
  totalPages,
  itemsPerPage = 9,
  currentPage = 1,
  onPageChange
}: PaginationProps) => {
  const lastPage = Math.ceil(totalPages / itemsPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Container>
      {currentPage > 1 + siblingsCount && <p>...</p>}

      {previousPages.length > 0 &&
        previousPages.map((page) => {
          return (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={page}
            />
          )
        })}

      <PaginationItem
        onPageChange={onPageChange}
        number={currentPage}
        isCurrent
      />

      {nextPages.length > 0 &&
        nextPages.map((page) => {
          return (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={page}
            />
          )
        })}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && <p>...</p>}
          <PaginationItem onPageChange={onPageChange} number={lastPage} />
        </>
      )}
    </Container>
  )
}
