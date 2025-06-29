function Navbar() {
    return (
        <nav className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white px-6 py-4 shadow- max-w-6xl mx-auto rounded">
            <div className="grid grid-cols-6">
                <div className="col-start-1 col-span-2">
                    <h1 className="text-3xl font-bold">Weather Dashboard</h1>
                </div>
                <div className="col-end-7 col-span-2 flex">
                    <p className="text-xl font-semibold mx-10 hover:bg-blue-700">Home</p>
                    <p className="text-xl font-semibold mx-10">About</p>
                </div>
            </div>


        </nav>
    );

};

export default Navbar;