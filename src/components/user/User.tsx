import React from 'react'
import { useSelector } from 'react-redux'
import { useAction } from '../../hooks/useAction'
import { useTypedSelcetor } from '../../hooks/useTypedSelector'

export const User = () => {

    const {user, isLoading, error} = useTypedSelcetor(state => state.user)

    const {getUserById} = useAction()

  return (
    <div className='p-10'>
        <button className='border-2 rounded-xl p-2 bg-green-300 border-green-400 text-4xl mb-6' onClick={() => getUserById(1)}>Get User</button>
        {isLoading ? <div className='text-3xl'>Loading...</div> : error ? <div className='text-3xl'>{error}</div> : user?.name ? <div className='text-3xl'>User : {user.name}</div> : <h1>USER NOT FOUND</h1>}
    </div>
  )
}
