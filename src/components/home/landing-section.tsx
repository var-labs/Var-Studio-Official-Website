import Image from "next/image";

export default function LandingSection() {
    return (
        <div className="flex flex-col pt-[8.3rem] max-h-[110vh]">
            <div className="select-none font-medium text-neutral-900">
                <span className="text-larger leading-none flex justify-start">
                    CRAFTING YOUR
                </span>
                <span className="text-larger leading-none flex justify-center font-dm-mono">
                    VISION
                </span>
                <span className="text-larger leading-none flex justify-end">
                    ONE VAR AT A TIME
                </span>
            </div>

            <div className="flex flex-col pt-16 px-[22rem] gap-10 -mb-[4rem]">
                <span className="border border-neutral-900 w-[29rem]"></span>
                <span className="dm-sans font-normal text-xl w-[70%] text-neutral-500">At Var Studio, we bring your ideas to life with cutting-edge, tailored digital solutions—designed one var at a time.</span>
            </div>
            <div className="flex sticky bottom-0 pb-10 right-8 justify-end">
                <Image 
                    src={"/ArrowDown.svg"}
                    alt="Arrow Down"
                    width={64}
                    height={64}
                    className=""
                    />
            </div>
        </div>
    )
}