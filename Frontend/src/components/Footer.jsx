import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-pink-500 text-white font-bold py-4 text-center shadow-md">
      <h1 className="text-lg">E-comm © {new Date().getFullYear()}</h1>
    </footer>
  );
};

export default Footer;
