"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import logoImg from "../assets/logo.svg";

const services = [
  "Example service 1",
  "Example service 2",
  "Example service 3",
  "Example service 4",
];

const navLinks = [
  { label: "About", href: "#" },
  { label: "Services", href: "#", dropdown: services },
  { label: "FAQs", href: "#" },
  { label: "Contact", href: "#" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    const TOLERANCE = 60;
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 10);
      if (current < 10) {
        setVisible(true);
      } else if (current - lastScrollY.current > TOLERANCE) {
        setVisible(false);
        setDropdownOpen(false);
        lastScrollY.current = current;
      } else if (lastScrollY.current - current > TOLERANCE) {
        setVisible(true);
        lastScrollY.current = current;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-4 px-4 pointer-events-none"
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -120 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className={[
          "flex items-center justify-between px-6 py-3 rounded-full w-full max-w-4xl relative z-10 transition-all duration-300 pointer-events-auto",
          scrolled
            ? "bg-white shadow-xl shadow-gray-300/40"
            : "bg-white/80 backdrop-blur-sm shadow-md shadow-brand-muted/20",
        ].join(" ")}
      >
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img
            src={logoImg}
            alt="Dr. Trang Eye Clinic"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-base text-gray-700 hover:text-brand-hover transition-colors font-medium rounded-md cursor-pointer">
                  {link.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-max"
                      initial={{ opacity: 0, y: -5, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-1.5">
                        {services.map((s) => (
                          <a
                            key={s}
                            href="#"
                            className="block px-4 py-2.5 text-base text-gray-700 hover:text-brand-hover hover:bg-brand-light transition-colors whitespace-nowrap"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {s}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block px-3 py-2 text-base text-gray-700 hover:text-brand-hover transition-colors font-medium rounded-md"
                >
                  {link.label}
                </a>
              </div>
            ),
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2 text-base text-white bg-brand rounded-full hover:bg-brand-hover transition-colors font-semibold shadow-md shadow-brand-muted"
          >
            Book appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center cursor-pointer"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6 text-gray-900" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl shadow-gray-300/40 px-6 py-5 lg:hidden pointer-events-auto overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full text-base text-gray-900 font-medium py-3 cursor-pointer"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          className="bg-brand-light rounded-xl px-4 py-2 flex flex-col overflow-hidden"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {services.map((s) => (
                            <a
                              key={s}
                              href="#"
                              className="block py-2.5 text-sm text-gray-700 hover:text-brand-hover transition-colors"
                              onClick={toggleMenu}
                            >
                              {s}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      className="block text-base text-gray-900 font-medium py-3"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </a>
                  </div>
                ),
              )}

              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-brand rounded-full hover:bg-brand-hover transition-colors font-semibold"
                  onClick={toggleMenu}
                >
                  Book appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
