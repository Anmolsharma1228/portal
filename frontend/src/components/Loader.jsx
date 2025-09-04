import React from 'react'
import { ClipLoader  } from 'react-spinners'

const Loader = () => {
  return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader  color="#ffffff" size={30}/>
       </div>
  )
}

export default Loader