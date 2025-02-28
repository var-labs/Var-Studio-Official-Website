import Image from "next/image";

export default function ServiceSection() {
    return (
        <div className="py-[5rem] text-neutral-0">
            <div className="flex flex-col gap-10 mb-[5rem]">
                <span className="border border-[#fff] w-[30.5rem]"></span>
                <div className="flex items-center gap-3">
                    <span className="text-xl font-normal uppercase">Innovative Solutions for Your Digital Vision</span>
                    <span className="w-2 h-4 bg-[#0780DD]"></span>
                </div>
            </div>

            <div className="text-medium uppercase leading-tight">
                Crafting sleek, high-impact digital experiences with a perfect blend of creativity and precision.
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-neutral-900 py-[5rem]">
                <div className="flex w-full h-full relative">
                    <Image 
                            src={"/folder-b.png"}
                            alt=".."
                            width={1000}
                            height={1000}
                            className="-scale-x-100"
                    />
                    <div className="absolute flex-col z-20 mt-8">
                        <Image 
                            src={"/folder-t.png"}
                            alt="..."
                            width={1000}
                            height={1000}
                            className="-scale-x-100"
                        />
                    </div>
                    <div className="absolute z-40 flex flex-col w-full h-full pr-[3.25rem] pt-[50px]">
                        <div className="flex flex-col gap-[5rem] mb-3 text-right items-end">
                            <span className="text-[52px] uppercase">Site build</span>
                            <span className="text-neutral-500 max-w-lg text-xl leading-description">Building robust digital foundations with precision and innovation, empowering seamless interactions and lasting impact.</span>
                        </div>
                        <div className="w-full h-full px-[54px] uppercase text-start text-xl underline underline-offset-2">
                        see more details!
                        </div>
                    </div>
                </div>

                <div className="flex w-full h-full relative">
                    <Image 
                        src={"/folder-b.png"}
                        alt=".."
                        width={1000}
                        height={1000}
                    />
                    <div className="absolute z-20 mt-8">
                        <Image 
                            src={"/folder-t.png"}
                            alt="..."
                            width={667.5}
                            height={700}
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute z-40 flex flex-col w-full h-full pl-[3.25rem] pt-[50px]">
                        <div className="flex flex-col gap-[5rem] mb-3 items-start">
                            <span className="text-[52px] uppercase">Site Design</span>
                            <span className="text-neutral-500 max-w-lg text-xl leading-description">Shaping digital identities with captivating visuals and thoughtful design, creating experiences that connect and engage.</span>
                        </div>
                        <div className="w-full h-full px-[54px] uppercase text-right text-xl underline underline-offset-2">
                        see more details!
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center font-normal text-xl gap-6">
                <span className="text-[#808080] max-w-lg text-center">See how our expertise shapes ideas into impactful digital solutions.</span>
                <span className="underline underline-offset-[3px]">DISCOVER OUR WORK !</span>
            </div>
        </div>
    )
}