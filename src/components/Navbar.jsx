import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [sideBar, setSideBar] = useState(false);
    const MenuItems = ({ close }) => (
        <>
            <Link to="/" >
                <li onClick={close} className="hover:bg-[#3bc4e1] hover:text-white p-2">Home</li>
            </Link>

            <Link to="/browsebook">
                <li onClick={close} className="hover:bg-[#3bc4e1] hover:text-white p-2">Browse Books</li>
            </Link>
            <Link to="/addbook">
                <li onClick={close} className="hover:bg-[#3bc4e1] hover:text-white p-2">Add Book</li>
            </Link>
        </>
    );
    return (
        <>
            <nav className="flex justify-between items-center px-12 sticky top-0 z-50 bg-white">
                <div className="flex items-center">
                    <img src="../public/logo.png" alt="Library Logo" className="h-30"></img>
                </div>

                <button
                    className="md:hidden text-[#3bc4e1] px-4 py-2 rounded-lg font-semibold mb-4 text-3xl"
                    onClick={() => setSideBar(true)}>
                    ☰</button>

                <ul className="hidden md:flex gap-10 text-lg font-medium">
                    <MenuItems />
                </ul>
            </nav>

            {
                sideBar && (
                    <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 p-6 md:hidden">
                        <button
                            className="text-xl mb-6 text-red-600 absolute right-11"
                            onClick={() => setSideBar(false)}>
                        ✕</button>

                        <ul className="flex flex-col gap-6 text-lg font-medium">
                            <MenuItems close={() => setSideBar(false)} /> 
                        </ul>
                    </div>
                )
            }
        </>
    )
}
export default Navbar;