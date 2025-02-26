import Image from "next/image";

export default function ImagePage() {
    return (
        <div id="imagePage">
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