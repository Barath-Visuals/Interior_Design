import React from "react";

export default function Visualization() {
    return (
        <div className="w-full bg-[#ECEEEE] p-6 gap-[15px] flex flex-col rounded-[20px]">
            <div className="flex items-center gap-4">
                <div className="w-8 flex items-center p-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 31 35" fill="none">
                        <path d="M16.4636 1.55635L25.8368 6.96799C27.2052 7.75803 27.1602 9.7482 25.7575 10.4755L16.4229 15.3157C15.8444 15.6157 15.156 15.615 14.5781 15.3139L4.85708 10.2491C3.43186 9.50653 3.42017 7.47134 4.83676 6.71245L14.5192 1.52544C15.129 1.19873 15.8645 1.21042 16.4636 1.55635Z" stroke="black" stroke-width="1.5"/>
                        <path d="M12.9482 17.4337L3.9482 12.5875C2.61574 11.87 1 12.8351 1 14.3484V25.8398C1 26.5543 1.3812 27.2146 2 27.5718L11 32.768C12.3333 33.5378 14 32.5755 14 31.0359V19.1946C14 18.4588 13.596 17.7825 12.9482 17.4337Z" stroke="black" stroke-width="1.5"/>
                        <path d="M18.0518 17.4337L27.0518 12.5875C28.3843 11.87 30 12.8351 30 14.3484V25.8398C30 26.5543 29.6188 27.2146 29 27.5718L20 32.768C18.6667 33.5378 17 32.5755 17 31.0359V19.1946C17 18.4588 17.404 17.7825 18.0518 17.4337Z" stroke="black" stroke-width="1.5"/>
                    </svg>
                </div>
                <h2 className="font-sfpro font-semibold text-[24px] text-black">Visualization</h2>
            </div>

            <p className="font-sfpro font-normal text-md text-black leading-relaxed">
                Visualize your space before it’s built. Our realistic 3D renderings and lighting simulations allow you to explore materials, ambiance, and mood with precision — ensuring your design feels exactly right before execution begins.
            </p>
        </div>
    )
}