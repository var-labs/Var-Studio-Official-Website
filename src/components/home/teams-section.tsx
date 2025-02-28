import Image from "next/image";

export default function TeamSection() {
    const images = Array.from({ length: 6 }, (_, i) => (
        <div key={i}>
            <Image 
                src={"/logoAvatar.png"}
                alt={`Avatar ${i + 1}`}
                width={180}
                height={180}
            />
        </div>
    ));

    return (
        <div>
            <div className="pt-[5rem] flex flex-col gap-10 mb-[5rem]">
                <span className="border border-neutral-900 w-[31.5rem]"></span>
                <div className="flex items-center gap-3">
                    <span className="text-xl text-neutral-900 font-normal">MEET THE CREATIVE MINDS BEHIND EVERY PROJECT</span>
                    <span className="w-2 h-4 bg-[#129F19]"></span>
                </div>
            </div>

            <div className="flex flex-col text-medium gap-[3.8rem] text-neutral-900">
                <span className="uppercase leading-tight">Our team at Var Studio is a dynamic blend of innovative developers and visionary designers, each bringing unique skills to every project.</span>
                <span className="uppercase text-right leading-tight">Together, we craft digital experiences that turn concepts into impactful realities.</span>
            </div>

            <div className="flex flex-col items-center justify-center mt-20">
                <div className="grid grid-cols-6 gap-8">
                    {images}
                </div>
                <div className="grid grid-cols-6 gap-8">
                    {images}
                </div>
            </div>

            <div className="flex flex-col items-end mt-[6.3rem] gap-6 text-xl font-normal pb-[5.3rem]">
                <span className="text-right w-[35%] text-neutral-500 leading-description">Learn how our expertise transforms ideas into powerful digital solutions crafted for impact.</span>
                <span className="uppercase text-right underline underline-offset-2 tracking-button-link">Discover Our Work!</span>
            </div>

        </div>
    )
}