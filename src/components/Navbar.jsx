import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar relative z-50 py-7 flex items-center justify-between px-6 md:px-12">
      {/* no language tab (single language) */}
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] p-1 md:bg-transparent md:text-transparent">
          Rafael
        </h1>
      </div>

      {/* Menu */}
      <ul
        className={`flex items-center sm:gap-10 gap-4 
          md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 
          md:opacity-100 bg-white/10 backdrop-blur-md 
          md:bg-transparent md:backdrop-blur-none
          p-4 rounded-br-2xl rounded-bl-2xl 
          transition-all md:transition-none
          ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li><a href="#home" className="sm:text-lg text-base font-medium">Home</a></li>
        <li><a href="#about" className="sm:text-lg text-base font-medium">About</a></li>
        <li><a href="#project" className="sm:text-lg text-base font-medium">Project</a></li>
        <li><a href="#contact" className="sm:text-lg text-base font-medium">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
