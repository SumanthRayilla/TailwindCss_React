// Home.js
import React from 'react';
//import Header from './Header';

const Home = () => {
  return (
    <div>
         <div class="text-gray-600 body-font bg-yellow-300">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src="https://c1.wallpaperflare.com/preview/661/512/921/coffee-beverage-cup-coffee-cup.jpg" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Coffee ? 
            </h1>
            <p class="mb-8 leading-relaxed"> Coffee  mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div class="flex justify-center space-x-3">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">American</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Indian</button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-gray-900 font-medium  body-font bg-orange-300">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 sapce-x-4">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Amazing Coffee</h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Coffee, beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plants of African origin. Coffee is one of the three most popular beverages in the world (alongside water and tea) and one of the most profitable international commodities.</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://c1.wallpaperflare.com/preview/661/512/921/coffee-beverage-cup-coffee-cup.jpg" alt="content"></img>
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">coffee</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Cappuccino</h2>
                <p class="leading-relaxed text-base">Though coffee is the basis for an endless array of beverages, its popularity is mainly attributed to its invigorating effect, which is produced by caffeine, an alkaloid present in coffee.</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQyhH4Jz27Lokh0zXDCghuC_-l8LGo0Gs4Q&usqp=CAU" alt="content"></img>
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">coffee</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Espresso</h2>
                <p class="leading-relaxed text-base">Though coffee is the basis for an endless array of beverages, its popularity is mainly attributed to its invigorating effect, which is produced by caffeine, an alkaloid present in coffee.</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbQCX3u4g1e_hmgaOAfQHT9RunewHHqIQpg&usqp=CAU" alt="content"></img>
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">coffee</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Americano</h2>
                <p class="leading-relaxed text-base">Though coffee is the basis for an endless array of beverages, its popularity is mainly attributed to its invigorating effect, which is produced by caffeine, an alkaloid present in coffee.</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKNFfQsBHhIZG96azPFrZbb_rfDYeeOEMzA&usqp=CAU" alt="content"></img>
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">coffee</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Mocha Latte </h2>
                <p class="leading-relaxed text-base">Though coffee is the basis for an endless array of beverages, its popularity is mainly attributed to its invigorating effect, which is produced by caffeine, an alkaloid present in coffee.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
   
     <div class="bg-cover bg-no-repeat bg-center h-screen m-0" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/top-view-coffee-with-copy-space-autumn-leaves_23-2148630212.jpg')", filter: "brightness(80%)" }}>
       <div class="text-right font-medium title-font text-sans text-2xl text-gray-900 px-60 py-11 w-3/4">Event Registration</div>
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

export default Home;
