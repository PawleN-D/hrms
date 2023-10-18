import Image from 'next/image';
import person from '../../../public/profile.png';
const Navbar: React.FC = () => {
    return (
      <nav className="shadow-lg p-4 flex justify-between items-center">
        <div className="flex items-center flex-grow"> 
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300 w-3/4" // Adjust width here
          />
        </div>
        <div>
          
          <Image
            src={person}
            alt="User"
            className="w-12 h-12 rounded-full"
          />
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  