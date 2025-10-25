import React from "react";

export default function Craftsmanship() {
    return (
        <div className=" w-full bg-[#ECEEEE] p-6 gap-[15px] flex flex-col rounded-[20px]">
            <div className="flex items-center gap-4">
                <div className="w-8 flex items-center p-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 32 35" fill="none">
                    <path d="M16 34L1 25.4729V14.1331M16 34L31 25.4729V14.1331M16 34V22.6288M16 18.0543L31 9.52715M16 18.0543L1 9.52715M16 18.0543V22.6288M31 9.52715L16 1L1 9.52715M31 9.52715V14.1331M1 9.52715V14.1331M16 22.6288L31 14.1331M16 22.6288L1 14.1331" stroke="black" stroke-width="1.5"/>
                    </svg>
                </div>
                <h2 className="font-sfpro font-semibold text-[24px] text-black">Craftsmanship</h2>
            </div>

            <p className="font-sfpro font-normal text-md text text-black leading-relaxed">
                From bespoke plaster sculptures to handcrafted décor elements, we
                design and produce unique artistic pieces that bring depth and
                individuality to every space. Each creation is made in-house with
                exceptional attention to detail — ensuring originality, quality, and a
                truly personal touch.
            </p>
        </div>
    )
}