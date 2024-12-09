import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white py-8">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Content */}
        <div className="space-y-4">
          <p className="text-lg font-semibold">Follow Us</p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-[#9d7e54] transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white hover:text-[#9d7e54] transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white hover:text-[#9d7e54] transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Designed by */}
        <div className="mt-8">
          <p className="text-sm">
            Designed by{" "}
            <a
              href="https://www.github.com/BlissMahlathi"
              className="text-[#9d7e54] hover:text-white transition-colors duration-300"
            >
              Hlulani Bliss Mahlathi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
