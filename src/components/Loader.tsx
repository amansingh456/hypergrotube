import { ThreeDots } from "react-loader-spinner"
const Loader = () => {
   return (
      <div className="flex items-center justify-center">
         <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#f03f5e"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
         />
      </div>
   )
}

export default Loader

