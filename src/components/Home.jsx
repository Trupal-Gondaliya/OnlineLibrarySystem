function Home() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-gray-50 min-h-[30vh]">
            <div className="md:w-1/2 space-y-6 animate-fade-in-left">
                <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
                    Welcome to <span className="text-[#3bc4e1]">OpenShelf Library</span>
                </h1>

                <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                    Explore a World of Stories. Browse our popular categories, check out
                    top-rated books, and find the perfect read today.
                </p>

                <img src='../public/wave.png' className='w-30'/>
                    
            </div>

            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                <img
                    src="/HomeImgLibrary.png"
                    alt="Library Illustration"
                    className="w-full max-w-md object-contain"
                />
            </div>
        </div>
    )
}
export default Home;