import { useState } from "react";

interface HeaderProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  coverRef: React.RefObject<HTMLDivElement>;
}

const Header = ({ homeRef, aboutRef, projectRef, coverRef }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsDropdownOpen(false); // Close dropdown after clicking a link
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#A1326F] text-white px-4 lg:px-6 h-14 flex items-center z-50">
      {/* Logo */}
      <div className="flex items-center justify-center cursor-pointer">
        <img
          src="/rizuka-bocil.png"
          className="w-12 h-12"
          alt="Logo"
          onClick={() => scrollToRef(homeRef)}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
        <div
          className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
          onClick={() => scrollToRef(aboutRef)}
        >
          About
        </div>
        <div
          className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
          onClick={() => scrollToRef(projectRef)}
        >
          Original Song
        </div>
        <div
          className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
          onClick={() => scrollToRef(coverRef)}
        >
          Cover Song
        </div>
        <a
          href="https://rizuka-miku.github.io/discord"
          className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
        >
          Join Rizuniverse
        </a>
      </nav>

      {/* Mobile Navigation */}
      <div className="ml-auto md:hidden">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="p-2 text-white hover:bg-white hover:text-[#A1326F] rounded"
        >
          ☰
        </button>

        {isDropdownOpen && (
          <div className="absolute top-14 right-4 bg-white text-[#A1326F] rounded shadow-lg w-48">
            <div
              className="px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-100"
              onClick={() => scrollToRef(aboutRef)}
            >
              About
            </div>
            <div
              className="px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-100"
              onClick={() => scrollToRef(projectRef)}
            >
              Original Song
            </div>
            <div
              className="px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-100"
              onClick={() => scrollToRef(coverRef)}
            >
              Cover Song
            </div>
            <a
              href="https://rizuka-miku.github.io/discord"
              className="block px-4 py-2 text-sm font-medium hover:bg-gray-100"
            >
              Join Rizuniverse
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
