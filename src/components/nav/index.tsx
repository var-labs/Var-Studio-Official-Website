import Image from "next/image";
import Link from "next/link";

export default function Navigation () {
    return (
        <div className="flex justify-between items-center select-none">

            <div className="flex items-center gap-3">
                <Image 
                    src={"/logo.png"}
                    alt="VarStudio Logo"
                    draggable={false}
                    width={36}
                    height={36}
                />
                <span className="text-2xl font-semibold nunito">
                    VarStudio
                </span>
            </div>
            
            <div className="flex items-center text-xl font-normal dm-sans">
                <Link href="/">Work</Link>
                <span>,</span>
                <Link href="/">Services</Link>
                <span>,</span>
                <Link href="/">About</Link>
            </div>
            
            <div className="border border-[#020617] rounded-3xl flex flex-shrink-0 justify-center items-center">
                <span className="py-3 px-8 text-xl font-normal tracking-wide dm-sans">
                    Let<i>&apos;</i>s Talk!
                </span>
            </div>
        </div>
    )
}