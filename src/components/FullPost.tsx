import { BiUpvote ,BiDownvote,BiHeart} from "react-icons/bi";

const FullPost = ({post}) => {
  return (
    <div className='flex w-full h-full gap-16 justify-center text-white font-normal'>
      <div className="my-auto absolute bottom-10 flex md:flex flex-row md:flex-col items-center justify-center md:relative gap-2 px-3 py-2 md-py-5 border bg-[rgba(39,41,45,0.5)] md:bg-transparent border-gray-400 rounded-md custom-scroll-bar">
      {post?.score!=null && <div className='flex gap-1 items-center mb-3'>
        <BiHeart size={20} />
        {post.score}
        </div>}
        {post?.ups!=null && <div className='flex gap-1 items-center mb-3'>
        <BiUpvote size={20} />
        {post.ups}
        </div>}
        {post?.downs!=null && <div className='flex gap-1 items-center mb-3'>
        <BiDownvote size={20} />
        {post.downs}
        </div>}
        {/* <div className='flex gap-1 items-center'>
        <BiUpvote size={30} />
        {post?.ups ?? ""}
        </div> */}
      </div>
      <div className="flex-col sm:w-90 md:w-[60%] overflow-y-scroll gap-2">
        <div className="text-xl mb-3">
          {post?.title ?? ""}
        </div>
        {post?.images?.map(img=>{
          return (
          <div>
          <img src={img?.link} className='w-100 mb-2'/>
          </div>)
        })}
      </div>
    </div>
  )
}

export default FullPost