// Header.js
import React from 'react';
//import { Link } from 'react-router-dom';  
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Header = () => {
  return (
    <header class="text-gray-600 body-font bg-gray-800">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>*/}
        <img class="h-14 w-14 rounded-full" alt="hero" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYq_-q_XMmwJpuGeh3ECUCg_5ofKUhnuf4A&usqp=CAU" />

            <span class="ml-3 text-xl text-white">Coffee</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
          <button>  <a href="contact.html" class="mr-5 hover:text-gray-900 hover:bg-gray-100 border-0 py-1 px-3 rounded focus:outline-none">Menu</a></button>
        <button>  <a href="Event.js" class="mr-5 hover:text-red-900 hover:bg-gray-100 border-0 py-1 px-3 rounded focus:outline-none">Events</a></button>
      <button> <a href="About.html" class="mr-5 hover:text-gray-900 hover:bg-gray-100 border-0 py-1 px-3 rounded focus:outline-none">About</a></button>
    <button>  <a class="mr-5 hover:text-gray-900 hover:bg-gray-100 border-1 py-1 px-3  rounded focus:outline-none">Contacts</a></button>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Offers
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
  );
};

export default Header;
