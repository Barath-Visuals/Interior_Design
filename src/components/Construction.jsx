import React from "react";

export default function Construction() {
    return (
        <div className="w-full bg-[#ECEEEE] p-6 gap-[15px] flex flex-col rounded-[20px]">
            <div className="flex items-center gap-4">
                <div className="w-8 flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 40 33" fill="none">
                        <path d="M6.29102 11.1011V28.3036C6.29102 29.9605 7.63416 31.3036 9.29102 31.3036H31.1898C32.8466 31.3036 34.1898 29.9605 34.1898 28.3036V11.1011" stroke="black" stroke-width="1.5"/>
                        <path d="M39 14.9494L21.7754 2.30347C20.7189 1.52779 19.2811 1.52779 18.2246 2.30347L1 14.9494" stroke="black" stroke-width="1.5"/>
                        <path d="M15.9111 31.3034V18.873C15.9111 17.7685 16.8066 16.873 17.9111 16.873H22.0883C23.1929 16.873 24.0883 17.7685 24.0883 18.873V31.3034" stroke="black" stroke-width="1.5"/>
                    </svg>
                </div>
                <h2 className="font-sfpro font-semibold text-[24px] text-black">Construction</h2>
            </div>

            <p className="font-sfpro font-normal text-md text-black leading-relaxed">
                We don’t just design — we build. Our team transforms 3D concepts into reality with seamless execution, managing every stage from planning and construction to finishing and furnishing. With a single, dedicated team overseeing the process, every project reflects one clear vision — yours.
            </p>
        </div>
    )
}