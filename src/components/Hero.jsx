import React from "react";
import Interior_image from "../assets/images/prydumano-design-vIbxvHj9m9g-unsplash (1).jpg";

export default function Hero() {
    return(
        <div className="box-border flex w-full h-screen relative items-center justify-center overflow-hidden">
                <img 
                    src={Interior_image}
                    alt="Bed Room interior"
                    className="w-full h-full object-cover"
                />
            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10 md:px-12 lg:px-0">    
                <div className="max-w-[650px] flex flex-col items-center justify-center text-white gap-[10px]">
                    <span className="font-sfpro font-semibold text-[clamp(32px,6vw,64px)] leading-tight">Crafted Elegance for Every Space</span>
                    <span className="font-sfpro font-normal text-[clamp(12px,2vw,18px)] leading-relaxed">From concept to completion, Liam Interior Solutions delivers seamless turnkey interiors for homes, offices, and commercial spaces — blending design, functionality, and craftsmanship in every detail.</span>
                    <div className="flex items-center gap-[10px] w-full">
                        <button className="font-sfpro font-normal text-[clamp(12px,2vw,16px)] px-[16px] py-[8px] rounded-full bg-white text-black box-border transition-all duration-300">Book a Consultation</button>
                        <button className="font-sfpro font-normal text-[clamp(12px,2vw,16px)] px-[16px] py-[8px] rounded-full bg-black border border-transparent hover:bg-[#222222] transition-all duration-300 box-border">View Our Projects</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}