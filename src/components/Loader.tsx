import React from 'react'
import { PuffLoader } from 'react-spinners'

const Loader = ({...props}) => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center -translate-y-[100px]'>
            <PuffLoader size={200} color="#36d7b7" {...props}/>
    </div>
  )
}

export default Loader