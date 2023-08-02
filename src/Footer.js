import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="text-white hover:text-gray-400 transition-all">
          <i className="fab fa-facebook-square text-2xl"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition-all">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition-all">
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
      </div>
      <p className="text-lg ">I love coffee <i className="fa fa-heart text-1xl yellow-color "></i> </p>
    </footer>
  );
};

export default Footer;
