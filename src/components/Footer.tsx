import { Share2, MessageCircle, Link, Globe, Send, PenTool } from "lucide-react";
import logo from "../assets/logo.svg";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact", href: "#" },
];

const socialIcons = [Share2, MessageCircle, Link, Globe, Send, PenTool];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="h-1 bg-gradient-to-r from-brand via-brand-hover to-brand-dark" />

      <div className="max-w-7xl mx-auto px-10 py-16 flex flex-col items-center gap-8">
        <img
          src={logo}
          alt="Dr. Trang Eye Clinic"
          className="h-15"
        />

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          {socialIcons.map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-white transition-colors"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
        
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dr. Trang Eye Clinic, All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
