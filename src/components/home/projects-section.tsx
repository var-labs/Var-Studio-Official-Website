import Image from "next/image";

export default function ProjectsSection() {
    return (
        <div className="pt-[5.25rem] pb-[5rem] text-neutral-0">
            <div className="flex flex-col text-larger mb-[2.625rem]">
                <div className="flex justify-between items-center leading-none">
                    <span>INNOVATION</span>
                    <span>AND</span>
                </div>
                <div className="flex justify-center">
                    <div className="bg-[#252525] px-3 py-2 inline-block">
                        <div className="flex gap-6 items-center justify-center leading-none">
                            <span>CREAT</span>
                            <Image 
                                src={'/imagescroll.png'}
                                alt=""
                                width={4096}
                                height={3072}
                                loading="lazy"
                                className="py-5 w-44 h-36 object-cover"
                            />
                            <span>IVITY</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center leading-none">
                    <span>AT ITS</span>
                    <span>BEST</span>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center px-[10.375rem] gap-6">
                <Image 
                    src={'/imagescroll.png'}
                    alt=""
                    width={4096}
                    height={3072}
                    className="max-w-[65rem]"
                />
                <div className="flex justify-between text-xl w-full font-normal">
                    <span>Name Project</span>
                    <span className="underline underline-offset-2">SEE MORE DETAILS!</span>
                </div>
            </div>
        </div>
    )
}