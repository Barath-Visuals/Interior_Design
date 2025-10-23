import { useState, useEffect } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
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
                className={`absolute top-full left-0 w-full bg-white rounded-[12px] mt-2 py-4 flex flex-col items-center gap-4 shadow-md md:hidden transition-all duration-500 ${
                    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
                }`}
                >
                    <button className="font-sfpro text-base border border-black/50 rounded-full px-4 py-1.5 hover:bg-black hover:text-white transition-all duration-300">
                        Studio
                    </button>
                    <button className="font-sfpro text-base text-black hover:text-gray-600 transition-all duration-300">
                        Projects
                    </button>
                    <button className="font-sfpro text-base text-black hover:text-gray-600 transition-all duration-300">
                        Service
                    </button>
                </div>

            </div>
    </header>
    )
}