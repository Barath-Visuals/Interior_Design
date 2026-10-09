import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function TestimonialContext() {
    const text = "🌟 What Our Clients Says About LIMA Interior Solution.";
    const subText = "Our client’s feedback reflects the passion, dedication, and creativity behind everything we create. See what they share about their journey with us!"
    const words = text.split(" ");
    const wordS = subText.split(" ");

    const container = useRef(null)

    useEffect(() => {
        const wordElement = container.current.querySelectorAll(".word");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            },
        });

        tl.to(wordElement, {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "power2.out",
            duration: 0.5,
        })

        return() => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        }
    }, []);

    return(
        <div className="flex flex-col justify-center gap-2">
            <div className="flex flex-wrap">
                {words.map((word, index) => (
                    <div key={index} className="items-center h-auto w-auto">
                        <div className="w-full h-full">
                            <span className={`font-sfpro font-regular text-[clamp(32px,6vw,64px)] mr-2 ${ word === "LIMA" ? "text-black" : "text-[#A0A0A0]" }`}>
                                {word}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div ref={container} className="w-full font-sfpro font-regular text-base text-left flex flex-wrap ">
                {wordS.map((word, index) => (
                    <span key={index} className="word" style={{ opacity : 0, marginRight : "3px" }}>
                        {word}
                    </span>
                ))}
            </div>
        </div>
    )
}