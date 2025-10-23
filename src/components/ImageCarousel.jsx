import { useState, useEffect } from "react"
import OptimizeImage from "../utils/optimizeImage";

export default function ImageCarosuel({ images }) {

    const [optimizedImage, setOptimizedImage] = useState([]);

    useEffect(() => {
        const processImage = async () => {
            const result = await Promise.all(
            images.map(async (img) => ({
                src: await OptimizeImage(img.src),
                category: img.category
            }))
            );
            setOptimizedImage(result);
        };
        processImage();
    }, [images]);
    return(
        <div className="flex flex-nowrap overflow-x-auto gap-6 p-4 w-full scrollbar-hide">
            {
                optimizedImage.map((img, index) => (
                    <div key={index} className="min-w-[300px] max-w-[300px] h-[400px] rounded-2xl relative overflow-hidden ">
                        <img
                            src={img.src}
                            alt={img.category}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 text-white text-sm flex flex-col p-4 w-full h-full justify-between">
                            <div className="w-full items-center justify-end flex">
                                <button
                                    className="p-2 w-[40px] h-[40px] -rotate-45 rounded-full bg-white transition p-2.5 "
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 15" fill="none">
                                        <path d="M1 6.36377C0.447715 6.36377 0 6.81148 0 7.36377C0 7.91605 0.447715 8.36377 1 8.36377V7.36377V6.36377ZM17.7071 8.07088C18.0976 7.68035 18.0976 7.04719 17.7071 6.65666L11.3431 0.292702C10.9526 -0.0978226 10.3195 -0.0978226 9.92893 0.292702C9.53841 0.683226 9.53841 1.31639 9.92893 1.70692L15.5858 7.36377L9.92893 13.0206C9.53841 13.4111 9.53841 14.0443 9.92893 14.4348C10.3195 14.8254 10.9526 14.8254 11.3431 14.4348L17.7071 8.07088ZM1 7.36377V8.36377H17V7.36377V6.36377H1V7.36377Z" fill="black"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="font-sfpro font-regular text-[18px] items-center mb-4 ">
                                <span className="text-center bg-black/50 rounded-[8px] p-2">
                                    {img.category}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}