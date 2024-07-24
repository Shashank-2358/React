import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='bg-zinc-800/25 text-center font-bold size-10 w-screen mt-5 p-1.5'>User: {userid}</div>
  )
}

export default User