import Craftsmanship from "./Craftmanship";
import Construction from "./Construction";
import Revitalization from "./Revitalization";
import Visualization from "./Visualization";

export default function ServiceBox() {
    return(
        <div className="w-full flex flex-col items-center justify-center px-5 gap-5 mt-3 mb-3">
            <div className="w-full flex items-center justify-start">
                <span className="font-sfpro font-medium text-lg text-center px-3 py-1 border-[1px] border-black rounded-full hover:text-white hover:bg-black hover:border-black">
                    Service
                </span>
            </div>
            <div className="w-full grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr ">
                <Craftsmanship/>
                <Construction/>
                <Visualization/>
                <Revitalization/>
            </div>
        </div>
    )
}