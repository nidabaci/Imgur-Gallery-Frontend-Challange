import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from '../components/hooks'
import { RootState } from '../redux/index'
import { incrementPage, decrementPage } from '../redux/GalleryComponent'
import '../styles/paginator.scss'

export const Pagination = () => {
  const dispatch = useDispatch()
  const page = useSelector((state: RootState) => state.gallery.filters.page)
  return (
    <>
      <div className="paginator flex gap-2 justify-end mb-4 pt-4">
        <button
          onClick={() => {
            dispatch(incrementPage())
            window.scrollTo(0, 0)
          }}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border border-gray-400 rounded-full shadow"
        >
          <AiOutlineArrowRight />
        </button>
        <div className="vertical_line"></div>
        <button
          onClick={() => {
            dispatch(decrementPage())
            window.scrollTo(0, 0)
          }}
          disabled={page === 1}
          className={`${page === 1 ? 'bg-gray-400' : 'bg-white hover:bg-gray-100'} py-4 px-4 border border-gray-400 rounded-full shadow text-gray-800 font-semibold`}
        >
          <AiOutlineArrowLeft />
        </button>
      </div>
    </>
  )
}
