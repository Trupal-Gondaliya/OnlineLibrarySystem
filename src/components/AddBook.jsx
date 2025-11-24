import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    image: "",
    rating: "",
    author: "",
    shortDescription: "",
    longDescription: "",
    publishedDate: "",
    language: "",
    price: "",
    pages: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.author.trim()) e.author = "Author is required";
    if (!form.category.trim()) e.category = "Category is required";
    if (!form.shortDescription.trim()) e.shortDescription = "Short description required";
    if (!form.rating || isNaN(Number(form.rating)) || Number(form.rating) < 0 || Number(form.rating) > 5) {
      e.rating = "Rating must be a number between 0 and 5";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // create id (use timestamp + random to reduce collision)
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

    const newBook = {
      id,
      title: form.title,
      author: form.author,
      category: form.category,
      shortDescription: form.shortDescription,
      longDescription: form.longDescription,
      image: form.image || "/default-book.png", 
      rating: Number(form.rating),
      details: {
        publishedDate: form.publishedDate || "Unknown",
        language: form.language || "Unknown",
        price: form.price || "Free",
        pages: form.pages || "N/A",
      }
    };

    dispatch(addBook(newBook));
    navigate("/browsebook");
  };

  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-[#3bc4e1] mb-6">Add New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <div>
          <label className="block font-medium">Title *</label>
          <input name="title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label className="block font-medium">Author *</label>
          <input name="author" value={form.author} onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.author && <p className="text-red-600 text-sm">{errors.author}</p>}
        </div>

        <div>
          <label className="block font-medium">Category *</label>
          <input name="category" value={form.category} onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
        </div>

        <div>
          <label className="block font-medium">Short Description *</label>
          <textarea name="shortDescription" value={form.shortDescription} onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.shortDescription && <p className="text-red-600 text-sm">{errors.shortDescription}</p>}
        </div>

        <div>
          <label className="block font-medium">Long Description</label>
          <textarea name="longDescription" value={form.longDescription} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Image URL</label>
            <input name="image" value={form.image} onChange={handleChange} className="w-full p-2 border rounded" placeholder="/path-or-url.jpg" />
          </div>

          <div>
            <label className="block font-medium">Rating (0-5) *</label>
            <input name="rating" value={form.rating} onChange={handleChange} className="w-full p-2 border rounded" />
            {errors.rating && <p className="text-red-600 text-sm">{errors.rating}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input name="publishedDate" value={form.publishedDate} onChange={handleChange} placeholder="Published Date" className="p-2 border rounded" />
          <input name="language" value={form.language} onChange={handleChange} placeholder="Language" className="p-2 border rounded" />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="p-2 border rounded" />
        </div>

        <div>
          <input name="pages" value={form.pages} onChange={handleChange} placeholder="Pages" className="p-2 border rounded w-32" />
        </div>

        <div className="flex gap-4">
          <button type="submit" className="bg-[#3bc4e1] text-white px-4 py-2 rounded">Add Book</button>
          <button type="button" onClick={() => navigate("/browsebook")} className="px-4 py-2 rounded border">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
