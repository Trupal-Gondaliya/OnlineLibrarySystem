import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-[#264143] text-white py-10 px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-yellow-500">Openshelf Library</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Explore thousands of books, categories, and popular reads. Your digital reading companion.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <Link to={"/"}><li className="hover:text-[#3bc4e1] cursor-pointer">Home</li></Link>
            <Link to={"/browsebook"}><li className="hover:text-[#3bc4e1] cursor-pointer">Browse Book</li></Link>
            <Link to={"/addbook"}><li className="hover:text-[#3bc4e1] cursor-pointer">Add Books</li></Link>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">About This Project</h3>
          <p className="text-gray-300 leading-relaxed">
            Created by <span className="text-[#3bc4e1] font-semibold">Gondaliya Trupal</span>.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            This website is made for study & learning purposes only.
            All images and book content belong to their respective owners.
          </p>
        </div>

      </div>

      <div className="h-px bg-gray-600 my-8"></div>

      <div className="text-center text-gray-400 text-sm">
        © 2025 Online Library — All Rights Reserved.
      </div>
    </footer>
  );
}
export default Footer;