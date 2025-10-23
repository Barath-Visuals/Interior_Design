import React from "react"
import CuratedCollection from "./CuratedCollection"

export default function CollectionHeader() {
    return(
        <div className="w-full flex flex-col items-center justify-center px-5 gap-5 mt-3 mb-3">
            <div className="w-full flex items-center justify-start">
                <span className="font-sfpro font-medium text-[14px] text-center px-3 py-1 border-[1px] border-black rounded-full hover:text-white hover:bg-black hover:border-black">
                    Explore Collections
                </span>
            </div>
            <div className="flex w-full justify-between gap-5 max-[640px]:flex-col ">
                <div className="flex flex-col w-full items-start justify-center">
                    <span className="font-sfpro font-regular text-[clamp(32px,6vw,64px)]">
                        Curated Collection
                    </span>
                    <span className="font-sfpro font-regular text-[16px] text-black/50">
                        Discover our minimal masterpiece
                    </span>
                </div>
                <div className="flex items-start justify-center text-right w-auto max-[640px]:text-left ">
                    <span className="font-sfpro font-regular text-[16px] text-black/50">
                        Discover thoughtfully selected piece that blend timeless design with everyday comfort.
                    </span>
                </div>
            </div>
            <CuratedCollection/>
        </div>
    )
}