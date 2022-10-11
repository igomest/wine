interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange
}: PaginationItemProps) => {
  if (isCurrent) {
    return <button type="button">{number}</button>
  }

  return (
    <button type="button" onClick={() => onPageChange(number)}>
      {number}
    </button>
  )
}
