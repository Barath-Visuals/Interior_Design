import { useState, useEffect, useRef } from "react";
import {gsap} from "gsap";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const buttonRef = useRef([]);
    useEffect(() => {
        if(menuOpen) {
            gsap.fromTo(buttonRef.current,
                {y : 30, opacity : 0},
                {y : 0, opacity : 1,
                    duration: 1.5,
                    stagger: 0.15,
                    ease: "power3.inOut",
                }
            )
        }
    }, [menuOpen]);
    return(
        <header className="fixed top-2 left-0 w-full flex justify-center z-50 px-4 py-4">
            <div className="bg-white/20 backdrop-blur-[10px] relative flex w-full max-w-[1100px] items-center justify-between rounded-[12px] p-2 ">
                <span className="font-sfpro font-semibold text-lg tracking-wide">
                    Liam Interior
                </span>

                <div className="flex items-center justify-center gap-[18px]">
                    <div
                        className={`burger md:hidden relative w-6 h-[2px] bg-black rounded-sm cursor-pointer transition-all duration-300 ${
                            menuOpen ? "bg-transparent" : ""
                        }`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span
                            className={`absolute left-0 w-6 h-[2px] bg-black rounded-sm transition-all duration-300 ${
                            menuOpen ? "rotate-45 top-0" : "-top-2"
                            }`}
                        ></span>
                        <span
                            className={`absolute left-0 w-6 h-[2px] bg-black rounded-sm transition-all duration-300 ${
                            menuOpen ? "-rotate-45 top-0" : "top-2"
                            }`}
                        ></span>
                    </div>

                    <nav className="hidden md:flex items-center gap-3 sm:gap-2">
                        <button className="font-sfpro text-sm sm:text-base rounded-[8px] px-3 py-1.5 hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                            Studio
                        </button>
                        <button className="font-sfpro text-sm sm:text-base rounded-[8px] px-3 py-1.5 hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                            Projects
                        </button>
                        <button className="font-sfpro text-sm sm:text-base rounded-[8px] px-3 py-1.5 hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                            Service
                        </button>
                    </nav>
                    <button className="font-sfpro text-sm sm:text-base bg-black text-white rounded-[8px] px-4 py-1.5 border border-transparent hover:bg-[#222222] border border-black transition-all duration-300">
                        Connect.
                    </button>
                </div>

                <div
                className={`absolute top-full left-0 w-full bg-white rounded-[12px] mt-2 py-4 flex flex-col items-center gap-4 md:hidden transition-all duration-500 ${
                    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                >
                    <div className="w-full h-full gap-2 flex flex-col p-4 items-start justify-between">
                        {["Studio", "Projects", "Service"].map((label, index) => (
                            <div className="overflow-hidden w-auto" key={index}>
                                <div
                                    
                                    ref={(el) => (buttonRef.current[index] = el)}
                                    className="overflow-hidden w-auto"
                                >
                                    <button className="font-sfpro text-2xl rounded-full px-4 py-1.5 hover:bg-black hover:text-white transition-all duration-300">
                                        {label}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
    </header>
    )
}