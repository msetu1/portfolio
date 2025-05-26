"use client";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
       <div className="w-full text-center pt-2">
       <p className="text-sm font-bold text-gray-400">
       Copyright &copy;  {new Date().getFullYear()} - All rights reserved by Setu Akther.
      </p>
        </div>
    </footer>
  );
};

export default Footer;
