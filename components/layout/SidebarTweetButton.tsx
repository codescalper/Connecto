import { useRouter } from "next/router"
import { FaFeather } from "react-icons/fa";


const SidebarTweetButton = ()=>{
    const router = useRouter();

    return(
        <div onClick={()=>router.push('/')}>
            <div className="
            mt-6
            lg:hidden
            rounded-full
            h-14
            w-14
            p-4
            flex
            items-center
            justify-center
            bg-emerald-500
            hover:bg-opacity-80
            transition
            cursor-pointer
            ">
            <FaFeather size={24} color="white"/>

            </div>
            <div className="
            mt-6
            hidden
            lg:block
            rounded-full
            px-4
            py-2
            bg-emerald-500
            hover:bg-opacity-90
            transition
            cursor-pointer
            ">
                <p className="text-white lg:block text-center font-semibold text-[20px]">
                Connect
                </p>
            </div>
            
        </div>
    )
}

export default SidebarTweetButton