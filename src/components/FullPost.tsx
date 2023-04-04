import { BiUpvote, BiDownvote, BiHeart } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineComment } from 'react-icons/ai'

const IconWithText = ({ icon, value }) => {
  return (
    <div className="flex gap-1 items-center mb-3">
      {icon}
      {value}
    </div>
  );
};

const FullPost = ({ post }) => {
  return (
    <div className="flex w-full h-full gap-16 justify-center text-white font-normal">
      <div className="my-auto absolute bottom-10 flex md:flex flex-row md:flex-col items-center justify-center md:relative gap-2 px-3 py-2 md-py-5 border bg-[rgba(39,41,45,0.5)] md:bg-transparent border-gray-400 rounded-md custom-scroll-bar">
        {post?.score != null && (
          <IconWithText icon={<BiHeart size={20} />} value={post.score} />
        )}
        {post?.ups != null && (
          <IconWithText icon={<BiUpvote size={20} />} value={post.ups} />
        )}
        {post?.downs != null && (
          <IconWithText icon={<BiDownvote size={20} />} value={post.downs} />
        )}
        {post?.comment_count != null && (
          <IconWithText icon={<AiOutlineComment size={20} />} value={post.comment_count} />
        )}
        {post?.views != null && (
          <IconWithText icon={<AiOutlineEye size={20} />} value={post.views} />
        )}
      </div>
      <div className="flex-col sm:w-90 md:w-[60%] overflow-y-scroll gap-2">
        <div className="text-xl mb-3">{post?.title ?? ''}</div>
        {post?.images?.map((img) => {
          return (
            <div>
              <img src={img?.link} className="w-100 mb-2" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FullPost
