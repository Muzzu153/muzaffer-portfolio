import React from "react";
import { useState, useEffect } from "react";
import PhysicalButton from "../ui/PhysicalButton";
import { personalData } from "../../data/personal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Projects",
      href: "#projects",
    },
  ];

  // Effect to handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "services", "projects"];
      const scrollPosition = window.scrollY + 100; // Add offset for better trigger point

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle link clicks (closes mobile menu)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-light border-b-4 border-dark border font-press">
      <nav className="max-w-6xl mx-auto px-5 py-3 flex justify-center items-center">
        {/* Logo */}
        {/* <Logo /> */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                uppercase text-base p-2 transition-colors
                ${
                  activeSection === link.href.substring(1)
                    ? "bg-highlight border-2 border-dark"
                    : "hover:text-primary"
                }
              `}
            >
              {link.name}
            </a>
          ))}
          <PhysicalButton
            href={`mailto:${personalData.email}`}
            variant="primary"
            size="p-4"
          >
            Hire Me
          </PhysicalButton>
        </div>

        {/* Mobile "Command Bar" */}
        <div className="md:hidden w-full flex items-center justify-between gap-4 text-xs">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border-4 border-dark px-4 py-3 uppercase bg-white"
            >
              Sections
            </button>
            {/* Mobile Dropdown Panel */}
            {isOpen && (
              <div className="absolute top-full  mt-3 w-30 bg-light border-4 border-dark p-4">
                <div className="flex flex-col items-center gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="uppercase p-1"
                      onClick={handleLinkClick} // Close menu on click
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <PhysicalButton
            href={`mailto:${personalData.email}`}
            variant="primary"
            size="p-2"
          >
            Hire Me
          </PhysicalButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
