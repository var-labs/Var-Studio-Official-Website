import Image from "next/image";

export default function ImageSection() {
    return (
        <div id="imagePage" className="py-9">
            <div className="bg-neutral-100">
                <Image 
                    src={""}
                    alt="Image"
                    width={1376}
                    height={688}
                />
            </div>
        </div>
    )
}