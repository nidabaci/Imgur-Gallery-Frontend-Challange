import './App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from './components/hooks'
import { getGallery } from './redux/GallerySlice'
import Loader from './components/Loader'
import MyDialog from './components/MyDialog'
import FullPost from './components/FullPost'
import { Header } from './components/Header'
import { ImageCard } from './components/ImageCard';
import { FiltersBar } from './components/FiltersBar';
import { Pagination } from './components/Pagination';


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
      <Pagination/>
      <MyDialog dialogData={dialogData} setDialogData={setDialogData}>
        <FullPost post={dialogData} />
      </MyDialog>
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
         
        </div>
      )}
    </div>
  )
}

export default App
