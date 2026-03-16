import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Added relative to header so the absolute menu stays attached to it
    <header className="relative">
      <nav className="w-full p-6 sm:px-16 sm:py-8 flex items-center justify-between ">
        {/* Logo Section */}      
            <img src="/logo.png" alt="Logo" className="w-12 h-14" />

        <div className="flex gap-8 items-center">
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-[#4a4645] cursor-pointer font-semibold">
            <li>How it works</li>
            <li>Use cases</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex font-bold items-center gap-2">
            <button className="border border-[#dad4cf] p-2 rounded-xl ">
         <img src="/nav-img2.png" alt="Logo" className="w-8 h-8" />
         </button>
           <button className=" bg-[#ffffff] p-2 rounded-xl ">
         <img src="/nav-img1.png" alt="Logo" className="w-8 h-8" />
         </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#1a1a1a] z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu - Now Overlays Content */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f6f6f6] p-6 flex flex-col gap-6 md:hidden border-t border-gray-100 shadow-xl z-40">
          <ul className="flex flex-col gap-4 text-[#4b4b4b] text-lg">
           
           <li>How it works</li>
            <li>Use cases</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
          <div className="flex items-center gap-3 font-bold ">
            <button className="text-left  border border-[#dad4cf] py-2 px-4 rounded-lg " onClick={() => setIsOpen(false)}>
                 <img src="/nav-img2.png" alt="Logo" className="w-8 h-8" />
            </button>
            <button className="bg-[#ffffff] text-[#c5c4c5] rounded-xl px-5 py-2.5 font-medium" onClick={() => setIsOpen(false)}>
              <img src="/nav-img1.png" alt="Logo" className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;