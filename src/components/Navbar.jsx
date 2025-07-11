import { Link, useNavigate } from "react-router-dom";



function Navbar() {
    const navigate = useNavigate();
    
    const handleSearch = () => {
        navigate('/search');
    }

    return (
        <nav className="flex justify-between  items-center bg-gradient-to-br from-green-900 to-gray-600 text-white p-4 mx-auto rounded">
            
            <div className="px-4 text-2xl font-bold">Weather Dashboard</div>    
            
                <button className=" text-2xl font-bold hover:scale-110 px-3  rounded" onClick={handleSearch}>
                        Search 
                </button> 
                <div className=" flex   ">
                        <Link to ="/" className="text-xl font-semibold mx-10 hover:scale-110">Home </Link>
                        <Link to ="/dashboard" className="text-xl font-semibold mx-10  hover:scale-110">Dashboard </Link>
                        <Link to ="/about" className="text-xl font-semibold mx-10 hover:scale-110">About </Link>
                        <Link to ="/contact" className="text-xl font-semibold mx-10 hover:scale-110">Contact </Link>
                        
                        
                </div>
            



        </nav>
    );

};

export default Navbar;