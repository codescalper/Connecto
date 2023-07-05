import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps{
    label:string
    showBackArror:boolean;
}

const Header: React.FC<HeaderProps> = ({label,showBackArror}) =>{
    const router =useRouter();
    const handleBack = useCallback(()=>{

    },[router])

    return(
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row items-center gap-2">
                {showBackArror &&(
                    <BiArrowBack className="cursor-pointer hover:opacity-70 transition" size={20} color="white"/>
                )}
                <h1 className="text-white text-xl font-semibold">{label}</h1>
            </div>
            
        </div>
    )
}
export default Header;