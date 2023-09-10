import { InfinitySpin } from "react-loader-spinner"
const Loader = () => {
   return (
      <div className="flex items-center justify-center">
         <InfinitySpin
            width='200'
            color="#f03f5e"
         />
      </div>
   )
}

export default Loader

