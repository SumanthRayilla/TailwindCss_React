import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Event = () => {
  return (
    <div>
      <Header />
      <div class="bg-cover bg-no-repeat bg-center h-screen" style={{ backgroundImage: "url('/src/img/coffee.jpg')", filter: "brightness(50%)" }}>
        <div class="text-right text-white text-2xl px-60 py-11 w-3/4">Event Registration</div>
        <div class="flex justify-end">
          <div class="grid grid-cols-2 gap-4 px-2 w-3/5">
            <input type="text" class="bg-gray-200 p-4 rounded-lg" placeholder="Name" />
            <input type="text" class="bg-gray-200 p-4 rounded-lg" placeholder="Event" />
            <input type="text" class="bg-gray-200 p-4 rounded-lg" placeholder="Date" />
            <input type="text" class="bg-gray-200 p-4 rounded-lg" placeholder="E-mail" />
            <input type="text" class="bg-gray-200 p-4 rounded-lg" placeholder="Event Time" />
            <input type="text" class="bg-gray-200 p-4 rounded-lg" placeholder="Phone Number" />
            <input type="text" class="bg-gray-200 p-4 rounded-lg" placeholder="Your Message" />
          </div>
        </div>
        <div class="flex justify-end w-5/6 px-32 py-9">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
