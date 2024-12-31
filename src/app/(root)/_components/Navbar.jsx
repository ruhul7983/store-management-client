
const Navbar = () => {
    return (
        <div className="flex justify-center items-center py-4">
            <ul className="flex gap-x-5">
                <li className="hover:bg-gray-700 px-2 py-1 rounded transition-all">Home</li>
                {/* <li className="hover:bg-gray-700 px-2 py-1 rounded transition-all">Blog</li> */}
                {/* <li className="hover:bg-gray-700 px-2 py-1 rounded transition-all">Contact</li> */}
                <li className="hover:bg-gray-700 px-2 py-1 rounded transition-all">Generate Invoice</li>
            </ul>
        </div>
    );
};

export default Navbar;