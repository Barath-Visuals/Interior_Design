import { useState } from "react";
import Filter from "./CollaboratedFIlter";
import ImageCarosuel from "./ImageCarousel";
import Kitchen from "../assets/images/sven-brandsma-3hEGHI4b4gg-unsplash.jpg";
import DiningRoom from "../assets/images/sanju-pandita-e5i60lTLJhU-unsplash.jpg";
import LivingRoom from "../assets/images/ali-moradi-Je1_Y3jYy50-unsplash.jpg";
import Indoor from "../assets/images/urja-bhatt-rSjbGc1FhqM-unsplash.jpg";
import Outdoor from "../assets/images/gonzz-ndG1YdTQBOk-unsplash.jpg";
import OfficeRoom from "../assets/images/mia-baker-jjhvyxm34nY-unsplash.jpg";
import BedRoom from "../assets/images/spacejoy-eyEy5YZhSvU-unsplash.jpg";

export default function CuratedCollection() {
    const initialCategories = [
        "All Collection",
        "Modular Kitchen",
        "Classical Kitchen",
        "Cliff Bed Room",
        "Bed Room",
        "Dining Room",
        "Living Room",
        "Office Room",
        "Outdoor",
        "Indoor",
        "Interior",
        "Exterior",
    ];

    const images = [
        { category: "Modular Kitchen", src: Kitchen},
        { category: "Dining Room", src: DiningRoom },
        { category: "Living Room", src: LivingRoom },
        { category: "Bed Room", src: BedRoom },
        { category: "Office Room", src: OfficeRoom },
        { category: "Outdoor", src: Outdoor },
        { category: "Indoor", src: Indoor },
    ];
    const [categories, setCategories] = useState(initialCategories);
    const [activeCategory, setActiveCategory] = useState("All Collection")

    const handleSelect = (category) => {
        setActiveCategory(category)

        const newOrder = [category, ...categories.filter((c) => c !== category)];
        setCategories(newOrder)
    }

    const handleReset = () => {
        setActiveCategory("All Collection");
        setCategories(initialCategories);
    }

    const filteredImages = activeCategory === "All Collection" ? images : images.filter((img) => img.category === activeCategory);

    return(
        <div className="flex flex-col gap-6 py-6 items-center w-full overflow-hidden">
            <Filter
                categories={categories}
                active={activeCategory}
                onSelect={handleSelect}
                onReset={handleReset}
            />
            <ImageCarosuel images={filteredImages}/>
        </div>
    )
}