import { Button, CurrentPageButton } from './styles'

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
    return <CurrentPageButton type="button">{number}</CurrentPageButton>
  }

  return (
    <Button type="button" onClick={() => onPageChange(number)}>
      {number}
    </Button>
  )
}
