import allBooksData from "../utils/allBooksData";
import { use, useState } from "react";
import { useParams } from "react-router-dom";

function BrowseBooks() {
    const [selectedAuthor, setSelectedAuthor] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [search, setSearch] = useState("");

    const authors = [...new Set(allBooksData.map(book => book.author))];

    const categories = [...new Set(allBooksData.map(book => book.category))];

    const { title: categoryFromURL } = useParams();

    const filteredBooks = allBooksData.filter(book => {
        const matchAuthor = selectedAuthor.length === 0 || selectedAuthor.includes(book.author);
        let matchCategory = true;
        
        if (categoryFromURL) {
            matchCategory = book.category.toLowerCase() === categoryFromURL.toLowerCase();
        }
        else if (selectedCategory.length > 0) {
            matchCategory = selectedCategory.includes(book.category);
        } else {
           matchCategory = true;
        }
        const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
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

    return (
        <div className="flex gap-6 px-30 py-20 bg-gray-100">

            <div className="w-[250px] space-y-6">

                <div>
                    <h1 className="font-bold text-3xl mb-2 text-[#3bc4e1]">Author</h1>
                    {authors.map(author => (
                        <label key={author} className="flex items-center gap-2 mb-1">
                            <input
                                type="checkbox"
                                onChange={() => toggleAuthor(author)}
                            />
                            <span>{author}</span>
                        </label>
                    ))}
                </div>

                <div>
                    <h1 className="font-bold text-3xl mb-2 text-[#3bc4e1]">Category</h1>
                    {categories.map(cat => (
                        <label key={cat} className="flex items-center gap-2 mb-1">
                            <input
                                type="checkbox"
                                onChange={() => toggleCategory(cat)}
                            />
                            <span>{cat}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="flex-1">

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search books..."
                        className="w-full p-2 border rounded-lg shadow-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {filteredBooks.map(book => (
                        <div
                            key={book.id}
                            className="flex gap-4 items-center p-4 bg-white rounded-xl shadow">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-28 h-36 object-cover rounded-lg"
                            />
                            <div>
                                <h2 className="font-bold text-xl text-[#3bc4e1]">{book.title}</h2>
                                <p className="text-gray-600 text-sm">Author : {book.author}</p>
                                <p className="text-gray-500 text-sm">Category : {book.category}</p>
                                < p className="text-md">{book.shortDescription}</p>
                                <p className="text-yellow-600 font-semibold">
                                    ⭐ {book.rating}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default BrowseBooks;
