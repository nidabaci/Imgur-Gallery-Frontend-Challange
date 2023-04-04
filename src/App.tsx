import './App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from './components/hooks'
import { getGallery, incrementPage,decrementPage } from './redux/GallerySlice'
import Filters from './components/Filters'
import Loader from './components/Loader'
import MyDialog from './components/MyDialog'
import FullPost from './components/FullPost'
import { Header } from './components/Header'
import { ImageCard } from './components/ImageCard';
import { FiltersBar } from './components/FiltersBar';

function App() {
  
  const dispatch = useDispatch()
  const [dialogData,setDialogData]=useState(null);

  const { photos, pageLoading, filters } = useSelector((state) => ({
    photos: state.gallery.photos,
    pageLoading: state.gallery.pageLoading,
    filters: state.gallery.filters,
  }))

  useEffect(() => {
    dispatch(getGallery())
  }, [filters])

  const getPostImages = () => {
    if (photos.length == 0) return []
    let newGallery = [] as any

    photos.forEach((post:any) => {
      let imageData = post?.images?.find((dataImg) => {
        let link = dataImg?.link?.split('.')
        if (!link) return false
        let checkExtension =
          link[link.length - 1] === 'jpg' ||
          link[link.length - 1] === 'png' ||
          link[link.length - 1] === 'gif' ||
          link[link.length - 1] === 'jpeg'

        return checkExtension
      })
      if (imageData) {
        newGallery.push({ ...post, link: imageData?.link })
      }
    })
    return newGallery
  }
 
  const postImages = getPostImages()
  return (
    <div className="">
      <Header /> 
      <FiltersBar />
      <MyDialog dialogData={dialogData} setDialogData={setDialogData}>
        <FullPost post={dialogData} />
      </MyDialog>
      <Filters />
      {pageLoading ? (
        <Loader />
      ) : (
        <div className="container px-5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {postImages.map((post:any) => {
              return (
                <div key={post?.id} className="flex flex-col" onClick={()=>{setDialogData(post)}}>
                  <ImageCard 
                  photo={post?.link ?? ''} 
                  description={post?.title ?? ''} 
                  score={post.score} 
                  upvotes={post.ups} 
                  views={post.views}/>
                </div>
              )
            })}
          </div>
         
          <div className='flex gap-2 justify-end mt-4 pt-4 border-t-2 text-white'>
              <button onClick={()=>{dispatch(decrementPage());window.scrollTo(0, 0)}} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Previous</button>
              <button onClick={()=>{dispatch(incrementPage());window.scrollTo(0, 0)}} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Next</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
