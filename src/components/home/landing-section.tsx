"use client"

import Image from "next/image";
import { motion } from "motion/react";

export default function LandingSection() {
    const textArray = ["CRAFTING YOUR", "VISION", "ONE VAR AT A TIME"];
    return (
        <div className="flex flex-col pt-[14.875rem] max-h-[110vh]">
            <div className="select-none font-medium text-neutral-900 relative">
                {/* {textArray.map((text, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }} 
                        className={`text-6xl lg:text-8xl xl:text-larger leading-none flex ${
                        index === 0 ? "justify-start" : index === 1 ? "justify-center font-dm-mono" : "justify-end"
                        }`}
                    >
                        {text}
                    </motion.span>
                ))} */}
                {textArray.map((text, textIndex) => (
                    <div key={textIndex} className="relative">

                        <span
                        className={`relative flex ${
                            textIndex === 0 ? "justify-start" : textIndex === 1 ? "justify-center font-dm-mono" : "justify-end"
                        } overflow-hidden whitespace-pre`}
                        >
                        {text.split("").map((char, charIndex) => (
                            <motion.span
                            key={charIndex}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: textIndex * 0.4 + charIndex * 0.05,
                                ease: "easeOut",
                            }}
                            className="text-6xl lg:text-8xl xl:text-larger leading-none"
                            >
                            {char}
                            </motion.span>
                        ))}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col pt-16 px-[22rem] gap-10 -mb-[4rem]">
                <span className="border border-neutral-900 w-[29rem]"></span>
                <span className="dm-sans font-normal text-xl w-[70%] text-neutral-500 leading-description">At Var Studio, we bring your ideas to life with cutting-edge, tailored digital solutions—designed one var at a time.</span>
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