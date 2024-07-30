import Image from "next/image";
import banner from "@/assets/cards/popup-feb.png"
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PoupUp() {
    const [close, setClose] = useState(false)


    return (
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }} className={`fixed top-0 left-0 flex items-center z-50 justify-center ${close === true ? "hidden":""} w-full h-full bg-[#0000008e]`}>
            <div className="lg:w-[700px] rounded-2xl z-50 p-2 absolute h-auto  ">
                <div className="w-full flex items-end justify-end -mb-11 pr-1 relative h-10 ">
                    <IoCloseCircle onClick={() => {setClose(!close)}} className="w-10 h-10 hover:scale-90 transition text-[#FF0000] text-lg rounded-full bg-white"/>
                </div>
                <Image className="w-full rounded-2xl" src={banner.src} alt="" width={100} height={100} />
            </div>
        </motion.div>
    )
}