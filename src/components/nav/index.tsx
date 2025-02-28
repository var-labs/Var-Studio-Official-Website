"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navigation() {
    const [prevScroll, setPrevScroll] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const isScrollingUp = prevScroll > currentScroll;
            setVisible(isScrollingUp || currentScroll < 10);
            setPrevScroll(currentScroll);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScroll]);

    const links = [
        { text: 'Work', href: '/' },
        { text: 'Services', href: '/' },
        { text: 'About', href: '/' },
    ];

    return (
        <div className={`fixed top-0 w-full px-[5rem] mix-blend-difference backdrop-blur-[3px] z-50 transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
        }`}>
            <div className="flex justify-between items-center select-none py-6">
                <div className="flex items-center gap-3"
                    onMouseEnter={() => setIsLogoHovered(true)}
                    onMouseLeave={() => setIsLogoHovered(false)}
                >
                    <Image
                        src={"/logo.png"}
                        alt="VarStudio Logo"
                        draggable={false}
                        width={36}
                        height={36}
                        className="invert"
                    />
                    <span className="text-2xl font-semibold font-nunito text-neutral-0">
                        VarStudio
                    </span>
                </div>

                <div className="flex items-center text-xl font-normal dm-sans text-neutral-0 group">
                    {links.map((link, index) => (
                        <React.Fragment key={index}>
                        {index > 0 && (
                            <span className={`transition-colors ${hoveredLinkIndex === index ? "text-neutral-500" : "text-neutral-0"} group-hover:text-neutral-500`}>
                                ,
                            </span>
                        )}
                        <Link
                            href={link.href}
                            className={
                            hoveredLinkIndex === index 
                                ? "text-neutral-0" 
                                : isLogoHovered || (hoveredLinkIndex !== null && hoveredLinkIndex !== index) 
                                ? "text-neutral-500" 
                                : "text-neutral-0"
                            }
                            onMouseEnter={() => setHoveredLinkIndex(index)}
                            onMouseLeave={() => setHoveredLinkIndex(null)}
                        >
                            {link.text}
                        </Link>
                        </React.Fragment>
                    ))}
                </div>

                <div className="border border-neutral-0 hover:border-[#434343] hover:bg-[#888888] min-w-[10rem] max-w-[10rem] rounded-full flex flex-shrink-0 justify-center items-center relative overflow-hidden group hover:cursor-pointer">
                    <div 
                        className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] to-[#fafafa] 
                                opacity-0 group-hover:opacity-100 transition-opacity
                                rounded-b-[20px] mb-[0.3px]"
                    />
                    <div 
                        className="absolute w-[10px] h-full rotate-[40deg] right-[45.359px] top-[-4.47px]
                                rounded-[100px] bg-gradient-to-r from-[rgba(255,255,255,0)] from-[-47.55%] to-[rgba(0,0,0,0.8)] to-[99.44%]
                                blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                "
                    />
                    <span className="py-3 px-4 text-xl tracking-wide dm-sans text-neutral-0
                                relative z-10 group-hover:text-black transition-colors">
                        <span className="block group-hover:hidden font-normal">Let’s Talk!</span>
                        <span className="hidden group-hover:block font-medium">Talk with us!</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
