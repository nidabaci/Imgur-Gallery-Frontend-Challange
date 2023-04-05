import { useEffect, useMemo, useState } from 'react'
import { useDispatch,useSelector } from '../components/hooks'
import { getGallery } from '../redux/GalleryComponent'
import Loader from '../components/Loader'
import MyDialog from '../components/MyDialog'
import FullPost from '../components/FullPost'
import { ImageCard } from './ImageCard'
import "../styles/gallery.scss"

export const GallerySection = () => {
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

  const postImages = useMemo(() => {
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
  },[photos])
 
  return (
    <div>
      <MyDialog dialogData={dialogData} setDialogData={setDialogData}>
        <FullPost post={dialogData} />
      </MyDialog>
      {pageLoading ? (
        <Loader />
      ) : (
        <div className="container masonry px-5 mx-auto">
            {postImages.map((post:any) => {
              return (
                <div key={post?.id} className="flex flex-col " onClick={()=>{setDialogData(post)}}>
                  <ImageCard 
                  photo={post?.link ?? ''} 
                  description={post?.title ?? ''} 
                  score={post.score} 
                  upvotes={post.ups} 
                  views={post.views}
                  />
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}
