import React from "react";
import Studio_image from "../assets/images/ali-moradi-Je1_Y3jYy50-unsplash.jpg";

export default function StudioSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center px-5 gap-5 mt-3 mb-3">
            <div className="w-full flex items-center justify-start">
                <span className="font-sfpro font-medium text-lg text-center px-3 py-1 border-[1px] border-black rounded-full hover:text-white hover:bg-black hover:border-black">
                    Studio
                </span>
            </div>
            <div className="flex flex-col xl:flex-row gap-4">
                <div className="w-full rounded-[40px] bg-gray-100 p-6 flex flex-col xl:flex-row gap-6 flex-[2] justify-center">
                    <div className=" xl:min-w-[380px] xl:max-w-[380px] lg:h-full">
                        <img src={Studio_image} alt="Studio Hero" className="w-full h-full rounded-[24px]"/>
                    </div>
                    <div>
                        <h2 className=" text-[30px] sm:text-[64px] font-medium mb-3 font-sfpro">Our Studio</h2>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        Every design begins with curiosity — a sketch, a mood, a spark of inspiration.
                        <br /><br/>
                        At LIMA Studio, ideas evolve into tangible beauty through thoughtful
                        experimentation and precise craftsmanship. Here, art meets architecture,
                        and every detail is refined to perfection before it takes form in the real world.
                        <br /><br/>
                            Within our studio, creativity flows from concept boards to 3D visualization screens —
                            where materials, textures, and light are explored to perfection. Each corner reflects
                            the same aesthetic we bring to our clients’ spaces — clean, modern, and enduring.
                            <br /><br/>
                            Our studio isn’t just a workspace; it’s a reflection of our belief that design is
                            an experience. It’s where collaboration thrives, imagination takes form, and where
                            passion and purpose blend to craft elegance for every client.
                            </p>
                    </div>
                </div>
                <div className="bg-gray-100 p-5 rounded-[40px] shadow-sm flex-[1]">
                    <h2 className="text-4xl font-medium mb-3 font-sfpro">Our Design Philosophy</h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    We believe interiors should tell a story — one that reflects the people who live within them.
                    Guided by minimalism and functionality, we create timeless environments that feel effortless yet intentional.
                    </p>
                    <ul className="text-gray-700 text-sm sm:text-base mt-3 space-y-2">
                    <li>
                        <span className="font-medium font-sfpro">Purpose-Driven Design</span> — <span className="font-normal">Every detail serves a function, and every function elevates comfort.</span>
                    </li>
                    <li>
                        <span className="font-medium font-sfpro">Sustainable Thinking</span> — We craft designs that are timeless and environmentally conscious.
                    </li>
                    <li>
                        <span className="font-medium font-sfpro">Collaborative Creation</span> — From our clients to our craftsmen, every voice shapes the outcome.
                    </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
                    Our work is grounded in simplicity — yet layered with emotion. Whether it’s a residence, a studio,
                    or a commercial environment, we aim to create spaces that feel alive, thoughtful, and distinctly LIMA.
                    </p>
                </div>
            </div>
        </div>
        















        //chekc
//         <div className="w-full flex flex-col items-center justify-center px-4 sm:px-5 gap-4 sm:gap-5 mt-3 mb-3">
//     <div className="w-full flex items-center justify-start">
//         <span className="font-sfpro font-medium text-base sm:text-lg text-center px-3 py-1 border-[1px] border-black rounded-full hover:text-white hover:bg-black hover:border-black transition-colors duration-200">
//             Studio
//         </span>
//     </div>
    
//     <div className="w-full flex flex-col lg:flex-row gap-4">
//         {/* Main Studio Section */}
//         <div className="w-full rounded-xl bg-gray-100 p-4 sm:p-6 flex flex-col xl:flex-row gap-4 sm:gap-6 lg:flex-[1.5]">
//             <div className="w-full xl:min-w-[320px] xl:max-w-[340px] xl:flex-shrink-0">
//                 <img 
//                     src={Studio_image} 
//                     alt="Studio Hero" 
//                     className="w-full h-64 sm:h-80 lg:h-[400px] object-cover rounded-xl"
//                 />
//             </div>
//             <div className="flex flex-col">
//                 <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 font-sfpro">Our Studio</h2>
//                 <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
//                     Every design begins with curiosity — a sketch, a mood, a spark of inspiration.
//                     <br /><br/>
//                     At LIMA Studio, ideas evolve into tangible beauty through thoughtful
//                     experimentation and precise craftsmanship. Here, art meets architecture,
//                     and every detail is refined to perfection before it takes form in the real world.
//                     <br /><br/>
//                     Within our studio, creativity flows from concept boards to 3D visualization screens —
//                     where materials, textures, and light are explored to perfection. Each corner reflects
//                     the same aesthetic we bring to our clients' spaces — clean, modern, and enduring.
//                     <br /><br/>
//                     Our studio isn't just a workspace; it's a reflection of our belief that design is
//                     an experience. It's where collaboration thrives, imagination takes form, and where
//                     passion and purpose blend to craft elegance for every client.
//                 </p>
//             </div>
//         </div>

//         {/* Design Philosophy Section */}
//         <div className="w-full bg-gray-100 p-4 sm:p-5 rounded-xl shadow-sm lg:flex-[1]">
//             <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-sfpro">Our Design Philosophy</h2>
//             <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
//                 We believe interiors should tell a story — one that reflects the people who live within them.
//                 Guided by minimalism and functionality, we create timeless environments that feel effortless yet intentional.
//             </p>
//             <ul className="text-gray-700 text-sm sm:text-base mt-3 space-y-2">
//                 <li>
//                     <strong>Purpose-Driven Design</strong> — Every detail serves a function, and every function elevates comfort.
//                 </li>
//                 <li>
//                     <strong>Sustainable Thinking</strong> — We craft designs that are timeless and environmentally conscious.
//                 </li>
//                 <li>
//                     <strong>Collaborative Creation</strong> — From our clients to our craftsmen, every voice shapes the outcome.
//                 </li>
//             </ul>
//             <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
//                 Our work is grounded in simplicity — yet layered with emotion. Whether it's a residence, a studio,
//                 or a commercial environment, we aim to create spaces that feel alive, thoughtful, and distinctly LIMA.
//             </p>
//         </div>
//     </div>
// </div>
        
        
        
        
//         <div className="w-full flex flex-col items-center justify-center px-5 py-8">
//   {/* Header */}
//   <div className="w-full flex items-center justify-start mb-4">
//     <span className="font-sfpro font-medium text-lg text-center px-3 py-1 border border-black rounded-full hover:text-white hover:bg-black transition-all duration-300">
//       Studio
//     </span>
//   </div>

//   {/* Main Card Container */}
//   <div className="w-full p-5 flex flex-col lg:flex-row items-start gap-6">
//     <div className="w-full rounded-xl overflow-hidden">
//       <img
//         src={Studio_image}
//         alt="Studio Hero"
//         className="w-[360px] object-cover rounded-xl"
//       />
//     </div>

//     <div className="w-full flex flex-col gap-6">
//       <div>
//         <h2 className="text-2xl font-bold mb-3 font-sfpro">Our Studio</h2>
//         <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
//           Every design begins with curiosity — a sketch, a mood, a spark of inspiration.
//           <br /><br />
//           At LIMA Studio, ideas evolve into tangible beauty through thoughtful
//           experimentation and precise craftsmanship. Here, art meets architecture,
//           and every detail is refined to perfection before it takes form in the real world.
//           <br /><br />
//           Within our studio, creativity flows from concept boards to 3D visualization screens —
//           where materials, textures, and light are explored to perfection. Each corner reflects
//           the same aesthetic we bring to our clients’ spaces — clean, modern, and enduring.
//           <br /><br />
//           Our studio isn’t just a workspace; it’s a reflection of our belief that design is
//           an experience. It’s where collaboration thrives, imagination takes form, and where
//           passion and purpose blend to craft elegance for every client.
//         </p>
//       </div>

//       {/* Design Philosophy Section */}
      
//     </div>
//   </div>
// </div>


    )
}