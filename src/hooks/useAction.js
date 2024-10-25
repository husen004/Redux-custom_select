import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../store/favorites/favorites.slice'
import { userSlice } from '../store/user/use.slice'

const rootActions = {
    ...actions,
    ...userSlice.actions,
}   

export const useAction = () => {
    const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
