import popularBooksData from "../utils/popularBooksData";

function PopularBook() {
    return (
        <div className="px-12 py-12">
            <h1 className="text-5xl text-[#3bc4e1] font-bold mb-10">
                Popular Books
            </h1>

            <div className="flex gap-8 flex-wrap">

                {popularBooksData.map((data) => (
                    <div
                        key={data.id}
                        className="flex flex-col items-center w-[200px] h-[370px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">
                        
                        <div className="w-40 h-[250px] overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="mt-3 text-xl font-semibold text-[#264143] text-center">
                            {data.title}
                        </p>

                        <p className="text-yellow-500 font-bold text-lg">
                            ⭐ {data.rating}
                        </p>

                        <button
                        className="bg-[#3bc4e1] rounded-4xl p-2 m-2">
                            View Details</button>
                    </div>
                ))}

            </div>
        </div>
    );

}
export default PopularBook;