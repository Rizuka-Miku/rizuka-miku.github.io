
interface HeaderProps {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectRef: React.RefObject<HTMLDivElement>;
    coverRef: React.RefObject<HTMLDivElement>;
  }

  const Header = ({ homeRef, aboutRef, projectRef, coverRef }: HeaderProps) => {

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="px-4 lg:px-6 h-14 flex items-center fixed w-screen bg-[#A1326F]">
            <div className="flex items-center justify-center cursor-pointer">
                <img src="/rizuka-bocil.png" className="w-12 h-12" onClick={() => scrollToRef(homeRef)} />
            </div>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <div className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 cursor-pointer text-white" onClick={() => scrollToRef(aboutRef)}>
                    About
                </div>
                <div className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 cursor-pointer text-white" onClick={() => scrollToRef(projectRef)}>
                    Original Song
                </div>
                <div className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 cursor-pointer text-white" onClick={() => scrollToRef(coverRef)}>
                    Cover Song
                </div>
                <a href="https://rizuka-miku.github.io/discord" className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 text-white">
                    Join Rizuniverse
                </a>
            </nav>
        </header>
    );
};

export default Header;

    