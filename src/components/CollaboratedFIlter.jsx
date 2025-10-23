import { useRef } from "react";

export default function Filter({ categories, active, onSelect, onReset}) {
    const scrollRef = useRef(null);

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    }

    return(
        <div className="flex items-center gap-2 w-full px-4 ">
            <div className="flex flex-nowrap overflow-x-auto gap-3 scrollbar-hide flex-1 h-auto items-center" ref={scrollRef}>
                {categories.map((category) => (
                    <div
                        key={category}
                        className={`flex items-center justify-center gap-2 flex-shrink-0 px-5 py-2 rounded-full border transition-all duration-300 text-sm
                        ${
                            active === category
                            ? "border-black text-black font-semibold bg-white"
                            : "border-grey-300 text-grey-600 hover:border-black/40 hover:text-black"
                        }`}
                    >
                        <button
                            onClick={() => onSelect(category)}
                            className="flex items-center gap-2 font-sfpro font-regular text-[14px]"
                        >
                            {category}
                        </button>
                        {active === category && category !== "All Collection" && (
                            <button onClick={onReset} className="w-[14px] items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 17 17" fill="none">
                                    <line x1="1.20711" y1="0.5" x2="16.5" y2="15.7929" stroke="black" stroke-linecap="round"/>
                                    <line x1="0.5" y1="15.7929" x2="15.7929" y2="0.500001" stroke="black" stroke-linecap="round"/>
                                </svg>
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <button
                onClick={handleScrollRight}
                className="p-2 h-[36px] rounded-full border border-grey hover:bg-grey-100 transition p-3"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 15" fill="none">
                    <path d="M1 6.36377C0.447715 6.36377 0 6.81148 0 7.36377C0 7.91605 0.447715 8.36377 1 8.36377V7.36377V6.36377ZM17.7071 8.07088C18.0976 7.68035 18.0976 7.04719 17.7071 6.65666L11.3431 0.292702C10.9526 -0.0978226 10.3195 -0.0978226 9.92893 0.292702C9.53841 0.683226 9.53841 1.31639 9.92893 1.70692L15.5858 7.36377L9.92893 13.0206C9.53841 13.4111 9.53841 14.0443 9.92893 14.4348C10.3195 14.8254 10.9526 14.8254 11.3431 14.4348L17.7071 8.07088ZM1 7.36377V8.36377H17V7.36377V6.36377H1V7.36377Z" fill="black"/>
                </svg>
            </button>
        </div>
    )
}