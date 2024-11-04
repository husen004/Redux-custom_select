import { useSelector } from 'react-redux'
import { useTypedSelcetor } from './useTypedSelector'

export const useFavorites = () => {
    const { favorites } = useTypedSelcetor(state => state)

    return favorites
}
