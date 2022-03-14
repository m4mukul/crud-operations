import React from 'react';

import logo from './logo.svg';


function Home(){
    return(
        <div className='h-80'>
          <div className="p-6 max-w-sm m-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
              <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div className="">
              <h4 className="text-xl font-medium text-black">ChitChat</h4>
              <p className="text-gray-500">You have a new message!</p>
            </div>
          </div>
      </div>
    )
}

export default Home;