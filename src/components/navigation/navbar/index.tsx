import React from "react";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="
      w-full h-20
      bg-emerald-900 
      sticky top-0">
        <div className="container
         mx-auto 
         px-4 
         h-full">
          <div className="
          flex
          justify-between
          items-center 
          h-full">
            <Logo />
            
            <button
              type="button"
              title="Toggle Menu"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#1d2422"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>



            <div className="hidden md:block">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;