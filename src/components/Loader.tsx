import { DotLoader } from 'react-spinners'

const Loader = ({ ...props }) => {
  return (
    <div className="w-[100vw] h-[60vh] flex justify-center items-center -translate-y-[100px]">
      <DotLoader color="#000000" size={50} {...props} />
    </div>
  )
}

export default Loader
