import Image from "next/image";

export default function FooterSection() {
    return (
        <div className="flex flex-col items-center text-neutral-0">
            <div className="pt-[5rem] pb-[5.25rem] uppercase text-larger w-full">
                <div className="flex justify-between items-center">
                    <span>redefining</span>
                    <span>every</span>
                </div>

                <div className="flex items-center justify-center">
                    var [studio]
                </div>

                <div className="flex justify-between items-center">
                    <span>of</span>
                    <span>ceativity</span>
                </div>
            </div>

            <div className="mx-auto mb-[3.75rem] flex justify-center items-center w-full">
                <span className="border border-[#FFF] w-[95%]"></span>
            </div>

            <div className="flex justify-center items-center gap-x-[5rem] text-xl font-normal pb-[15rem]">
                <span>Dribble</span>
                <span>Github</span>
                <span>Medium</span>
                <span>Behance</span>
                <span>Instagram</span>
            </div>

            <div className="relative w-full h-full">
                <Image 
                    src={"/footer.png"}
                    alt="Footer"
                    width={1920}
                    height={1080}
                    className="object-cover absolute bottom-0 z-0"
                />
                <div className="relative flex justify-between items-center z-10 mb-10 px-[6rem] text-xl">
                    <span>Copyright © 2024 VarStudio | UK</span>
                    <span className="flex items-center gap-1">
                        Back To Top 
                        <Image 
                            src={"/ArrowUp.svg"}
                            alt="Back To Top"
                            width={20}
                            height={20}
                        />
                    </span>
                </div>
            </div>
        </div>                  
    )
}