import { useState } from "react";
import bookCategoriesData from "../utils/bookCategoriesData";
import { Link } from "react-router-dom";

function BookCategories({ itemPreview }) {

    const [startIndex, setStartIndex] = useState(0);
    // const itemPreview = 3;

    const handleNext = () => {
        if (startIndex < bookCategoriesData.length - itemPreview) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const CARD_WIDTH = 280;

    return (
        <div className="px-12 py-16">
            <h1 className="text-5xl text-[#3bc4e1] font-bold">Book Categories</h1>
            <div className="flex items-center gap-4 px-4 mt-14">
                <button onClick={handlePrev}
                    className="bg-[#3bc4e1] text-white px-4 py-2 rounded font-bold text-xl disabled:opacity-30"
                    disabled={startIndex === 0}>&lt;</button>

                <div className="w-full overflow-hidden">

                    <div className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${startIndex * CARD_WIDTH}px)` }}>

                        {bookCategoriesData.map((data) => (
                            <Link to={`/browsebook/category/${data.title}`} key={data.id} className="w-[260px] mx-3 shrink-0">
                                <img src={data.image} className="h-[200px] w-full object-cover " />
                                <h1 className="text-[#264143] text-2xl text-center m-2">
                                    {data.title}
                                </h1>
                            </Link>
                        ))}
                    </div>
                </div>
                <button onClick={handleNext}
                    className="bg-[#3bc4e1] text-white px-4 py-2 rounded font-bold text-xl disabled:opacity-30"
                    disabled={startIndex >= bookCategoriesData.length - itemPreview }>&gt;</button>
            </div>
        </div >
    );
}

export default BookCategories;