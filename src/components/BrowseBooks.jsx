// import allBooksData from "../utils/allBooksData";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBooks() {
    const book = useSelector(store => store.books.books);
    const [selectedAuthor, setSelectedAuthor] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [search, setSearch] = useState("");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const authors = [...new Set(book.map(book => book.author))];

    const categories = [...new Set(book.map(book => book.category))];

    const { title: categoryFromURL } = useParams();
    const [urlCategory, setUrlCategory] = useState(categoryFromURL);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedCategory.length > 0 || selectedAuthor.length > 0) {
            setUrlCategory(null);
            navigate("/browsebook", { replace: true });
        }
    }, [selectedCategory, selectedAuthor]);

    const filteredBooks = book.filter(book => {

        let matchAuthor = true;

        if (selectedAuthor.length > 0) {
            matchAuthor = selectedAuthor.includes(book.author);
        }

        let matchCategory = true;

        if (urlCategory) {
            if (selectedCategory.length === 0 && selectedAuthor.length === 0) {
                matchCategory = book.category.toLowerCase() === urlCategory.toLowerCase();
            } else {
                matchCategory = true;
            }
        } else {
            if (selectedCategory.length > 0) {
                matchCategory = selectedCategory.includes(book.category);
            }
        }

        const matchSearch =
            book.title.toLowerCase().includes(search.toLowerCase());

        return matchAuthor && matchCategory && matchSearch;
    });


    const toggleAuthor = (author) => {
        setSelectedAuthor(prev =>
            prev.includes(author) ? prev.filter(a => a !== author) : [...prev, author]
        );
    };

    const toggleCategory = (cat) => {
        setSelectedCategory(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const AllAuthor = ({ drawer }) => (
        <>
            {authors.map(author => (
                <label key={author} className="flex items-center gap-2 mb-2">
                    <input
                        type="checkbox"
                        checked={selectedAuthor.includes(author)}
                        onChange={() => { toggleAuthor(author); drawer && drawer(); }}
                    />
                    <span>{author}</span>
                </label>
            ))}
        </>
    );

    const AllCategories = ({drawer}) => (
        <>
            {categories.map(cat => (
                <label key={cat} className="flex items-center gap-2 mb-2">
                    <input
                        type="checkbox"
                        checked={selectedCategory.includes(cat)}
                        onChange={() => { toggleCategory(cat); drawer && drawer();}}
                    />
                    <span>{cat}</span>
                </label>
            ))}
        </>
    );

    return (
        <div className="px-4 py-6 md:px-30 md:py-20 bg-gray-100 flex md:flex-row flex-col gap-6 relative">
            {/* Mobile UI */}
            <button
                className="md:hidden bg-[#3bc4e1] text-white px-4 py-2 rounded-lg font-semibold mb-4 w-32 fixed"
                onClick={() => setDrawerOpen(true)}>
                Filter ☰</button>

            <div className={`
                fixed top-0 left-0 h-full overflow-y-scroll w-full bg-white shadow-xl p-5 z-50
                transform transition-transform duration-300
                ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
                md:hidden`}>

                <button
                    className="font-bold text-xl absolute right-4 top-4"
                    onClick={() => setDrawerOpen(false)}>
                    ❌</button>

                <h1 className="font-bold text-2xl mb-4 text-[#3bc4e1] mt-8">Author</h1>
                <AllAuthor drawer={() => setDrawerOpen(false)} />

                <h1 className="font-bold text-2xl mt-5 mb-4 text-[#3bc4e1]">Category</h1>
                <AllCategories drawer={() => setDrawerOpen(false)} />
            </div>

            {/* Desktop UI */}
            <div className="w-[250px] space-y-6 hidden md:block">
                <div>
                    <h1 className="font-bold text-3xl mb-2 text-[#3bc4e1]">Author</h1>
                    <AllAuthor />
                </div>

                <div>
                    <h1 className="font-bold text-3xl mb-2 text-[#3bc4e1]">Category</h1>
                    <AllCategories />
                </div>
            </div>

            <div className="flex-1">

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search books..."
                        className="w-full p-2 border rounded-lg shadow-sm mt-16"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {filteredBooks.map(book => (
                        <div
                            key={book.id}
                            className="flex gap-4 items-start p-4 bg-white rounded-xl shadow">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-28 h-full object-cover rounded-lg"
                            />
                            <div className="flex flex-col gap-2 w-full">
                                <h2 className="font-bold text-xl text-[#3bc4e1]">{book.title}</h2>
                                <p className="text-gray-600 text-sm">Author : {book.author}</p>
                                <p className="text-gray-500 text-sm">Category : {book.category}</p>
                                < p className="text-md">{book.shortDescription}</p>
                                <p className="text-yellow-600 font-semibold">
                                    ⭐ {book.rating}
                                </p>
                                <Link to={`/bookDetails/${book.id}`} className="mt-2">
                                    <button className="block w-full text-[#3bc4e1] border border-[#3bc4e1] rounded-lg py-2 text-center hover:bg-[#3bc4e1] hover:text-white transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default BrowseBooks;
