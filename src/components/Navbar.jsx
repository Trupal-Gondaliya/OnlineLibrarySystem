import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="flex justify-between items-center px-12 sticky top-0 z-50 bg-white">
            <div className="flex items-center">
                <img src="../public/logo.png" alt="Library Logo" className="h-30 w-auto object-contain hover:opacity-80 transition-opacity"></img>
            </div>
            <ul className="flex gap-10 text-lg font-medium">
                <Link to="/">
                    <li className="hover:bg-[#3bc4e1] hover:text-white p-2">Home</li>
                </Link>
                
                <Link to="/browsebook">
                    <li className="hover:bg-[#3bc4e1] hover:text-white p-2">Browse Books</li>
                </Link>
                <Link to="/addbook">
                    <li className="hover:bg-[#3bc4e1] hover:text-white p-2">Add Book</li>
                </Link>
                
            </ul>

        </nav>
    )
}
export default Navbar;