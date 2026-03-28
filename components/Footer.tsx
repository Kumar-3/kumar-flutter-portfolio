import { Github, Linkedin, Smartphone } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <Smartphone className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white font-heading tracking-tight">
              Kumar<span className="text-teal-400">.</span>Dev
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kumar K. Kharare. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/kumark3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-teal-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/Kumar-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-teal-400 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
