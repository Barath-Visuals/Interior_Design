import { gsap } from "gsap/gsap-core";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function TestimonialAnalysisBox() {
    gsap.registerPlugin(ScrollTrigger)
    const stats = [
        {
            number: 50,
            symbol: "+",
            title: "Projects Completed",
            description:
                "Over 250+ projects successfully completed — showcasing our extensive experience, craftsmanship, and diverse portfolio of residential and commercial spaces.",
        },
        {
            number: 8,
            symbol: "+",
            title: "Years of Experience",
            description:
                "With over 10 years of experience, Liam Interior Solutions has built a reputation for delivering elegant, wealth of knowledge and skill to every project.",
        },
        {
            number: 30,
            symbol: "+",
            title: "Happy Clients 🥳",
            description:
                "Proudly serving more than 200 satisfied clients who have trusted us with their interior design needs.",
        },
    ];

    const boxesRef = useRef([]);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(boxesRef.current,
                {y : 50, opacity : 0},
                {
                    y : 0,
                    opacity : 1,
                    duration: 2,
                    ease: "power3.inOut",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: boxesRef.current[0],
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
            return () => ctx.revert()
        })
    }, []);

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 font-sfpro justify-items-center ">
            {stats.map((item, index) => (
                <div key={index} ref={(el) => boxesRef.current[index] = el} className="w-auto h-full overflow-hidden">
                        <div
                            className="flex flex-col bg-[#E5F1FF] p-5 rounded-3xl justify-between sm:justify-start lg:justify-between text-left min-h-[250px] h-full"
                        >
                            <div className="flex font-medium leading-none items-center text-black">
                                <span className="text-[80px]">{item.number}</span>
                                <span className="text-[50px]">{item.symbol}</span>
                            </div>
                            <div className="mt-3">
                                <span className="block text-lg font-medium">{item.title}</span>
                                <span className="block text-sm text-gray-600 mt-1">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    );
}
