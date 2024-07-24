import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Git() {
    const data = useLoaderData()
  return (
    <div className='text-center m-5 bg-stone-900 text-yellow-50 text-3xl'>GiHub Followers : {data.followers}</div>
  )
}

export default Git

export const githubInfoLoader = async()=>{
   const response= await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
}