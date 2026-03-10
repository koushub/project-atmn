import { ArrowBigRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation

function Navbar() {
  const location = useLocation();
  const isReadPage = location.pathname === "/read";

  const BookButton = ({ className }) => (
    <Link 
      to="/read" 
      className={`flex items-center gap-2 cursor-pointer bg-gradient-to-r from-amber-700 to-amber-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-amber-500 hover:to-amber-700 transition duration-300 ${className ? className : ''}`}
    >
      Get complete Book
      <ArrowBigRight size={20} />
    </Link>
  );

  // Helper to handle conditional links
  const NavLinks = ({ mobile }) => (
    <>
      <li>
        <Link to="/#preview" className={`font-semibold ${mobile ? 'text-sm' : 'text-base'} text-accent hover:text-orange-600`}>
          Preview
        </Link>
      </li>
      <li>
        <Link to="/#features" className={`font-semibold ${mobile ? 'text-sm' : 'text-base'} text-info hover:text-blue-950`}>
          Offer
        </Link>
      </li>
      <li>
        <Link to="/#pricing" className={`font-semibold ${mobile ? 'text-sm' : 'text-base'} text-neutral hover:text-lime-700`}>
          Subscribe
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-sm relative z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-4 shadow space-y-3">
            <NavLinks mobile />
            {!isReadPage && (
              <li className="lg:hidden pt-2">
                <BookButton />
              </li>
            )}
          </ul>
        </div>
        
        {/* Logo Redirect to "/" */}
        <Link to="/" className="flex items-center gap-2">
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full overflow-hidden">
              <img alt="Logo" src="logo/smol-transparent-chakra.png" className="scale-125 object-cover" />
            </div>
          </div>
          <span className="btn btn-ghost text-xl normal-case">Project Atmn</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>

      <div className="navbar-end">
        {/* Hides button on /read page */}
        {!isReadPage && (
          <div className="hidden lg:block">
            <BookButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;