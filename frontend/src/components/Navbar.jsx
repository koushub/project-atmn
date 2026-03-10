import { ArrowBigRight } from "lucide-react";

function Navbar() {
  // We define the button as a constant so you don't have to repeat the same styles in two places
  const BookButton = ({ className }) => (
    <a className={`flex items-center gap-2 cursor-pointer bg-gradient-to-r from-amber-700 to-amber-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-amber-500 hover:to-amber-700 transition duration-300 ${className}`}>
      Get complete Book
      <ArrowBigRight size={20} />
    </a>
  );

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-4 shadow space-y-3">
            <li><a href="#preview" className="font-semibold text-sm text-accent hover:text-orange-600">Preview</a></li>
          <li><a href="#features" className="font-semibold text-sm text-info hover:text-blue-950">Offer</a></li>
          <li><a href="#pricing" className="font-semibold text-sm text-neutral hover:text-lime-700">Subscribe</a></li>
            {/* MOBILE ONLY BUTTON: Shown on mobile (hidden on large screens) */}
            <li className="lg:hidden pt-2">
              <BookButton />
            </li>
          </ul>
        </div>
        
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full overflow-hidden">
            <img alt="Logo" src="logo/transparent-chakra.png" className="scale-125 object-cover" />
          </div>
        </div>
        <a className="btn btn-ghost text-xl">Project Atmn</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#preview" className="font-semibold text-base text-accent hover:text-orange-600">Preview</a></li>
          <li><a href="#features" className="font-semibold text-base text-info hover:text-blue-950">Offer</a></li>
          <li><a href="#pricing" className="font-semibold text-base text-neutral hover:text-lime-700">Subscribe</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        {/* DESKTOP ONLY BUTTON: Hidden on mobile (block on large screens) */}
        <div className="hidden lg:block">
          <BookButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;