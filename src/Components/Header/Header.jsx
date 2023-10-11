export default function Header() {
  return (
    <header className="h-20 sm:h-36 w-full flex items-center justify-end text-secondary">
      <div className="h-full flex w-2/3 sm:w-2/5 items-end justify-around mb-10 lg:text-2xl sm:text-xl text-sm xs:text-md">
        <p className="relative group">
          <a
            href="#projects"
            className="hover:text-fifth transition-colors duration-300 ease-in-out"
          >
            Projects
            <span className="absolute left-0 w-0 h-1 bg-fifth transition-width duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </p>
        <p className="relative group">
          <a
            href="#contact"
            className="hover:text-fifth transition-colors duration-300 ease-in-out"
          >
            Contact
            <span className="absolute left-0 w-0 h-1 bg-fifth transition-width duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </p>
        <p className="relative group">
          <a
            href="https://medium.com/@szwilliamson01"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fifth transition-colors duration-300 ease-in-out"
          >
            Blog
            <span className="absolute left-0 w-0 h-1 bg-fifth transition-width duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </p>
      </div>
    </header>
  );
}
