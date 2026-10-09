import ReviewImage1 from "../assets/images/bailey-alexander-WCBeEhZb4H0-unsplash.jpg";
import ReviewImage2 from "../assets/images/le-quan-ErDrzSvSNv4-unsplash.jpg";
import ReviewImage3 from "../assets/images/backbone-L4iRkKL5dng-unsplash.jpg";
import { useState, useEffect, useRef } from "react";
import OptimizeImage from "../utils/optimizeImage";
import Arrow from "./ArrowButton";

export default function ReviewBox( {scrollContainerRef} ) {
    //Dynamic Images and Reviews
    const reviews = [
        {
            text: "Incredibly creative and detail-oriented. They transformed a dull space into something vibrant and warm. Couldn’t be happier!",
            image: ReviewImage1,
        },
        {
            text: "Truly impressed with their dedication. They understood my style perfectly and brought it to life with so much care.",
            image: ReviewImage2,
        },
        {
            text: "Loved how they mixed modern elements with a cozy touch. Every guest who visits compliments the interiors! 🌿",
            image: ReviewImage3,
        },
        {
            text: "Loved how they mixed modern elements with a cozy touch. Every guest who visits compliments the interiors! 🌿",
            image: ReviewImage3,
        },
        {
            text: "Loved how they mixed modern elements with a cozy touch. Every guest who visits compliments the interiors! 🌿",
            image: ReviewImage3,
        },
    ];
    //Optimize Image Function
    const [optimizedReviews, setOptimizedReviews] = useState([]);
    useEffect(() => {
        const processReviewImages = async () => {
            const result = await Promise.all(
                reviews.map(async (r) => ({
                    ...r,
                    image: await OptimizeImage(r.image, 800, 0.7)
                }))
            )
            setOptimizedReviews(result)
        }
        processReviewImages()
    }, []);

    //Arrow Function
    const scroll = (direction) => {
        const conatiner = scrollContainerRef.current
        const scrollAmount = 300

        if(conatiner) {
            conatiner.scrollBy({
                left : direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
        }
    }

    return(
        <div className="w-full relative bg-[#ECEEEE] ">
            <div ref={scrollContainerRef} className="flex gap-7 scrollbar-hide overflow-x-auto  snap-x snap-mandatory scroll-smooth p-7">
                {optimizedReviews.map((review, index) => (
                    <div key={index} className="flex-shrink-0 snap-center w-[280px] bg-white rounded-3xl shadow-xl transition-transform duration-300 p-3">
                        <div className="w-full h-[180px] rounded-xl overflow-hidden">
                            <img src={review.image} alt={`Review ${index + 1}`} className="w-full h-full object-cover rounded-xl"/>
                        </div>
                        <div className="py-5 flex flex-col gap-2">
                            <span className="w-[18px] ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 17 15" fill="none">
                                    <path d="M0 9.125C0 6.375 0.375 4.39583 1.125 3.1875C1.91667 1.97917 3.25 0.916667 5.125 0L7.4375 3.0625C5.9375 3.85417 5.02083 4.54167 4.6875 5.125C4.39583 5.66667 4.25 6.35417 4.25 7.1875H7.5V14.6875H0V9.125ZM9.0625 9.125C9.0625 6.375 9.4375 4.39583 10.1875 3.1875C10.9375 1.97917 12.2708 0.916667 14.1875 0L16.4375 3.0625C14.9792 3.85417 14.0833 4.54167 13.75 5.125C13.4167 5.66667 13.25 6.35417 13.25 7.1875H16.5V14.6875H9.0625V9.125Z" fill="#ECEEEE"/>
                                </svg>
                            </span>
                            <span className="leading-relaxed font-sfpro font-regular text-base">
                                {review.text}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full md:hidden">
                <Arrow direction="left" onClick={() => scroll("left")}/>
                <Arrow direction="right" onClick={() => scroll("right")}/>
            </div>
        </div>
    )
}