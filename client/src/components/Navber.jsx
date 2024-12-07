import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";


const Navber = () => {
  const { openSignIn } = useClerk()
  const { isSignedIn, user } = useUser()
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to='/'><img src={assets.logo} alt="" /></Link>
      {
        isSignedIn? <div>
          <UserButton></UserButton>
        </div>
        : <button onClick={() => openSignIn({})} className="w-33 sm:w-44 border-10 bg-violet-600 text-white rounded-full font-bold flex items-center gap-2 px-4 py-2 sm:px-8">Get Started <FaArrowRightLong className="w-3 sm:w-4"/>
      </button> 
      }
     
    </div>
  )
}

export default Navber
 