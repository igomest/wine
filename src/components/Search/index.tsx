import { useProducts } from 'components/hooks/useProducts'
import { SearchContainer } from './styles'

export const Search = () => {
  const { setSearch } = useProducts()

  return (
    <SearchContainer>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </SearchContainer>
  )
}
