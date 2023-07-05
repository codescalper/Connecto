import router, {useRouter} from "next/router";
import { BsTwitter } from "react-icons/bs";



const SidebarLogo = () =>{
    return (
        <div onClick={() =>router.push('/')} //For mobile/tabs screens
         className="
        rounded-full
        h-14
        w-14
        flex
        items-center
        justify-center
        hover:bg-emerald-500
        hover:bg-opacity-10
        cursor-pointer
        transition
        ">
            <BsTwitter size={28} color="white" />
        </div>
    )
}
export default SidebarLogo