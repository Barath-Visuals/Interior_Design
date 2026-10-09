import TestimonialContext from "./TestimonialContext";
import ReviewBox from "./TestimonialReviewBox";
import TestimonialAnalysisBox from "./TestimonialAnalysisBox";
import { useRef } from "react";

export default function Testimonial() {
    const scrollContainerRef = useRef(null);
    
    return(
        <div className="w-full flex flex-col items-center justify-center px-5 gap-5 mt-3 mb-3 ">
            <div className="w-full flex items-center justify-start">
                <span className="font-sfpro font-medium text-base text-center px-3 py-1 border-[1px] border-black rounded-full hover:text-white hover:bg-black hover:border-black">
                    Testimonial
                </span>
            </div>
            <div className="flex flex-col w-full ">
                <div className="flex flex-col lg:flex-row items-start justify-between w-full mx-auto overflow-hidden">
                    <div className="min-w-[300px] mb-6 lg:mb-0">
                        <TestimonialContext/>
                    </div>
                    <div className="w-full overflow-x-auto rounded-[40px]">
                        <ReviewBox scrollContainerRef={scrollContainerRef}/>
                    </div>
                </div>
            </div>
            <TestimonialAnalysisBox/>
        </div>
    )
}