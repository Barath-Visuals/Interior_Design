import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white rounded-t-[50px] p-8 md:p-12">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:items-start">

        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          <h2 className="text-2xl lg:text-3xl font-semibold">Book a consultation</h2>

          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-gray-400 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-white"
          />

          <div>
            <p className="text-sm lg:text-lg lg:font-light text-gray-300">
              LIMA Studio Location :
            </p>
            <h3 className="text-2xl lg:text-3xl font-light mt-1">Chennai</h3>
          </div>

          <div>
            <p className="text-sm lg:text-lg lg:font-light text-gray-300">Contact :</p>
            <h3 className="text-2xl font-light mt-1">9874563210</h3>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-8 w-full lg:w-1/3 lg:mt-24">
          <div className="flex flex-col gap-2">
            <p className="font-semibold lg:text-base">Quick links</p>
            <p className="text-gray-300 text-sm lg:text-base cursor-pointer font-light hover:text-white">Studio</p>
            <p className="text-gray-300 text-sm lg:text-base cursor-pointer font-light hover:text-white">Service</p>
            <p className="text-gray-300 text-sm lg:text-base cursor-pointer font-light hover:text-white">Collection</p>
            <p className="text-gray-300 text-sm lg:text-base cursor-pointer font-light hover:text-white">Testimonial</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">Projects</p>
            <p className="text-gray-300 text-sm  lg:text-base cursor-pointer font-light hover:text-white">Indoor</p>
            <p className="text-gray-300 text-sm lg:text-base cursor-pointer font-light hover:text-white">Outdoor</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-light lg:text-base">Service</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/3 items-center lg:mt-6 lg:items-end text-center lg:text-right">
          <div className="flex gap-3 lg:mb-5">
            <div className="w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full"></div>
            <div className="w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full"></div>
            <div className="w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full"></div>
          </div>

          <p className="text-xs lg:text-sm text-gray-400 leading-tight">
            © Copyrights 2025 LIMA Interior Solution.inc | All Rights Reserved
          </p>
          <p className="text-xs lg:text-sm text-gray-400">
            Developed By <span className="text-white">Jaishaanth</span> |{" "}
            <span className="text-white">barathdesign</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
