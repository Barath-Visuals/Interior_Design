import React, { useRef, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CuratedCollection from "./CuratedCollection"
import { gsap } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger)

export default function CollectionHeader() {
    // const heading = "Curated Collection";
    // const subHeading = "Discover our minimal masterpiece"
    // const text = "Discover thoughtfully selected piece that blend timeless design with everyday comfort.";
    // const headingWord = heading.split(" ");
    // const subHeadingWord = subHeading.split(" ");
    // const textWord = text.split(" ");
    const headingRef = useRef(null);
    const subHeadingRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if(headingRef.current) {
            const text = headingRef.current.innerText;
            headingRef.current.innerHTML = text
                .split("")
                .map((char) => 
                    char === " "
                        ? `<span class="char" style="display:inline-block; width:0.4em;">&nbsp;</span>`
                        : `<span class="char" style="display:inline-block; opacity:0;">${char}</span>`
                )
                .join("");
            const chars = headingRef.current.querySelectorAll(".char");

            gsap.to(chars,{
                y: 0,
                opacity: 1,
                stagger: 0.02,
                duration: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                    end: "top 60%",
                    scrub: true,
                },
            })
        }

        if(subHeadingRef.current){
            const text = subHeadingRef.current.innerText;
            subHeadingRef.current.innerHTML = text
                .split(" ")
                .map((word) => 
                    `<span class="word" style="display:inline-block; opacity:0; margin-right:1px;">${word}</span>`
                )
                .join(" ")
            const words = subHeadingRef.current.querySelectorAll(".word")

            gsap.to(words, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: subHeadingRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: true,
                },
            });
        }

        if(textRef.current) {
            const text = textRef.current.innerText;
            textRef.current.innerHTML = text
                .split(" ")
                .map((word) => 
                    `<span class="word" style="display:inline-block; opacity:0; margin-right:1px;">${word}</span>`
                )
                .join(" ")
            const words = textRef.current.querySelectorAll(".word")

            gsap.to(words, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: true,
                },
            });
        }

        return () => ScrollTrigger.getAll().forEach((st) => st.kill())
    }, []);

    return(
        <div className="w-full flex flex-col items-center justify-center px-5 gap-5 mt-3 mb-3">
            <div className="w-full flex items-center justify-start">
                <span className="font-sfpro font-medium text-base text-center px-3 py-1 border-[1px] border-black rounded-full hover:text-white hover:bg-black hover:border-black">
                    Explore Collections
                </span>
            </div>
            <div className="flex w-full justify-between gap-5 max-[640px]:flex-col ">
                <div className="flex flex-col w-full items-start justify-center">
                    <span ref={headingRef} className=" flex-wrap justify-end font-sfpro font-regular text-[clamp(32px,6vw,64px)]">
                        Curated Collection
                    </span>
                    <span ref={subHeadingRef} className="  flex-wrap justify-end font-sfpro font-regular text-base text-black/50">
                        Discover our minimal masterpiece
                    </span>
                </div>
                <div className="flex items-start justify-center text-right w-auto max-[640px]:text-left ">
                    <span ref={textRef} className=" flex-wrap justify-end font-sfpro font-regular text-base text-black/50">
                        Discover thoughtfully selected piece that blend timeless design with everyday comfort.
                    </span>
                </div>
            </div>
            <CuratedCollection/>
        </div>
    )
}