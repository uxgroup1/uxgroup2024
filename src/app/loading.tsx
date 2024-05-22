import Image from "next/image";
import loadingGif from "@/assets/ux-looping.gif"

export default function loading(){
    return(

        <main className="h-screen w-full bg-black flex items-center justify-center">
                <Image className="w-2/5 " src={loadingGif.src} alt="Gif log UX Group" width={100} height={100}/>
        </main>

    )
}