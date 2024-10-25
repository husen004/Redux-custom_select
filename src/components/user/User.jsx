import React from 'react'
import { useSelector } from 'react-redux'
import { useAction } from '../../hooks/useAction'

export const User = () => {

    const {user, isLoading, error} = useSelector(state => state.user)

    const {getUserById} = useAction()

  return (
    <div>
        {isLoading ? <div>Loading...</div> : error ? <div>{error.message}</div> : user?.name ? <div>User : {user.name}</div> : <h1>USER NOT FOUND</h1>}
        <h1></h1>
    </div>
  )
}
