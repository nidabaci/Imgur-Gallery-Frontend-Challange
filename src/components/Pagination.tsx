import React from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch } from '../components/hooks'
import { incrementPage, decrementPage } from '../redux/GallerySlice'
import "../styles/paginator.scss"

export const Pagination = () => {
  const dispatch = useDispatch()
  return (
    <>
    
      <div className="paginator flex gap-2 justify-end mb-4 pt-4">
        <button
          onClick={() => {
            dispatch(decrementPage())
            window.scrollTo(0, 0)
          }}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border border-gray-400 rounded-full shadow"
        >
          <AiOutlineArrowLeft />
        </button>
        <div className="vertical_line"></div>
        <button
          onClick={() => {
            dispatch(incrementPage())
            window.scrollTo(0, 0)
          }}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border border-gray-400 rounded-full shadow"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  )
}
