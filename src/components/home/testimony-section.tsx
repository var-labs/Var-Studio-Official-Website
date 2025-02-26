import Image from "next/image"

export default function TestimonySection() {
    return (
        <div className="py-[5rem] pb-[2.5rem] relative">
            <div className="flex flex-col text-larger pb-[2.5rem]">
                <div className="flex justify-between leading-none">
                    <span>INSIGHTS</span>
                    <span>FROM</span>
                </div>
                <div className="absolute left-[57%] transform top-[11%] -translate-x-1/2 -translate-y-1/2 z-10">
                    <Image 
                        src={"/imagescroll.png"}
                        alt="Image"
                        width={4096}
                        height={3072}
                        className="max-w-64 max-h-36 object-cover"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <span>THOSE</span>
                    <span>WE’VE</span>
                </div>
                <div className="flex justify-center">
                    EMPOWERED
                </div>
            </div>
            
            <div className="flex flex-col items-end gap-[5rem] pb-[10.25rem]">
                <span className="border border-neutral-900 w-9/12"></span>
                <div className="text-neutral-500 flex justify-between w-full px-[1rem]">
                    <span className="text-xl -ml-16">1 - 5</span>
                    <span className="text-medium leading-tight max-w-5xl uppercase">&quot;Var Studio transformed our vision into a stunning digital experience. Their attention to detail and creativity exceeded our expectations.&quot;</span>
                </div>
            </div>

            <div className="flex justify-end items-center text-right gap-4 text-xl font-normal pb-[5rem]">
                <span className="flex items-center underline underline-offset-2">
                    &lt;PREVIOUS
                </span>
                <span className="flex items-center underline underline-offset-2">
                    NEXT&gt;
                </span>
            </div>

            <div>
                <Image
                    src={"/"}
                    alt="image"
                    width={1376}
                    height={688}
                    className="max-w-full object-cover bg-neutral-200"
                />
            </div>

        </div>
    )
}