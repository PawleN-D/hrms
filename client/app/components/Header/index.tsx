const Navbar: React.FC = () => {
    return (
      <nav className="bg-[#a8d3eb] p-4 flex justify-between items-center">
        <div className="flex items-center flex-grow"> 
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300 w-3/4" // Adjust width here
          />
        </div>
        <div>
          
          <img
            src="../../../public/profile.png"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  