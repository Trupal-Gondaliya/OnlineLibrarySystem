import { useState } from "react";
import bookCategoriesData from "../utils/bookCategoriesData";
import { Link } from "react-router-dom";

function BookCategories({ itemPreview }) {

    const [startIndex, setStartIndex] = useState(0);
    // const itemPreview = 3;

    const handleNext = () => {
        if (startIndex + itemPreview < bookCategoriesData.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const visibleItems = bookCategoriesData.slice(
        startIndex,
        startIndex + itemPreview
    );

    return (
        <div className="px-12 py-16">
            <h1 className="text-5xl text-[#3bc4e1] font-bold">Book Categories</h1>
            <div className="flex items-center gap-4 px-4 mt-14 justify-between">
                <button onClick={handlePrev}
                    className="text-2xl font-bold bg-[#3bc4e1] px-3 pb-1 text-white hover:bg-amber-200 disabled:hover:bg-[#3bc4e1] disabled:opacity-30"
                    disabled={startIndex === 0}>&lt;</button>
                <div className="flex gap-6">
                    {visibleItems.map((data) => (
                        <Link to={`/browsebook/category/${data.title}`}>
                            <div
                                key={data.id}
                                className="flex flex-col items-center w-full h-[230px]">
                                <img src={data.image} className="object-cover w-full h-full" />
                                <h1 className="text-[#264143] text-2xl text-center m-2">
                                    {data.title}
                                </h1>
                            </div>
                        </Link>
                    ))}
                </div>
                <button onClick={handleNext}
                    className="text-2xl font-bold bg-[#3bc4e1] px-3 pb-1 text-white hover:bg-amber-200 disabled:hover:bg-[#3bc4e1] disabled:opacity-30"
                    disabled={startIndex + itemPreview >= bookCategoriesData.length}>&gt;</button>
            </div>
        </div >
    );
}

export default BookCategories;