import { useParams, useNavigate } from "react-router-dom";
// import allBooksData from "../utils/allBooksData";     // used before redux
import { useSelector } from "react-redux";

function BookDetails() {
    const param = useParams();
    const navigate = useNavigate();

    const books = useSelector(store => store.books.books);
    const bookData = books.find(b => String(b.id) === String(param.id));

    // used before redux
    // const bookData = allBooksData.find(book => String(book.id) === String(param.id));

    return (
        <>
            {
                bookData ? (
                    <div className="relative max-w-6xl mx-auto p-6">
                        <button
                            onClick={() => navigate('/browsebook')}
                            className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            Back to Browse Books
                        </button>

                        <div className="flex flex-col md:flex-row gap-8">

                            <div className="w-full md:w-1/3">
                                <img
                                    src={bookData.image}
                                    alt={bookData.title}
                                    className="w-full rounded-xl shadow-lg"
                                />
                            </div>

                            <div className="w-full md:w-2/3 flex flex-col gap-4">

                                <h1 className="text-3xl font-semibold text-[#3bc4e1]">
                                    {bookData.title}
                                </h1>

                                <p className="text-lg text-gray-700">
                                    {bookData.shortDescription}
                                </p>

                                <p className="text-yellow-600 font-semibold text-2xl">
                                    ⭐ {bookData.rating}
                                </p>

                                <div className="mt-6 border-t pt-4">
                                    <h2 className="text-xl font-semibold text-[#3bc4e1] mb-2">
                                        About this book
                                    </h2>

                                    <p className="text-gray-700 mb-3">{bookData.longDescription}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">

                                        <p><strong>Author:</strong> {bookData.author}</p>
                                        <p><strong>Category:</strong> {bookData.category}</p>
                                        <p><strong>Published:</strong> {bookData.details.publishedDate}</p>
                                        <p><strong>Language:</strong> {bookData.details.language}</p>
                                        <p><strong>Price:</strong> {bookData.details.price}</p>
                                        <p><strong>Pages:</strong> {bookData.details.pages}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : (
                    <h2 className="text-red-700 text-5xl">Book not found !!!</h2>
                )
            }

        </>
    )
}
export default BookDetails;