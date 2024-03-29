
import React, { useState } from 'react';
import axios from 'axios';


function Create(){
    const [username, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = (e) => {
        e.preventDefault();
        axios.post(`https://6209e9e092946600171c55a1.mockapi.io/fakeCrud`, {
            username,
            lastName,
            checkbox
        }).then(res => { console.log(res) })
    }
    
    return(
            <div className="max-w-screen-md mx-auto p-5">
                <div className="text-center mb-16">
                <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
                    Contact
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                    Get In <span className="text-indigo-600">Touch</span>
                    </h3>
                </div>
                
                <form className="w-full" onSubmit={postData}>
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    First Name
                    </label>
                    <input  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Janve" onChange={(e) => setFirstName(e.target.value)} />
                   
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" onChange={(e) => setLastName(e.target.value)} />
                </div>
                </div>
               
                
                <div className="flex flex-wrap -mx-3 mb-6">
                
                <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                    <label className="block text-gray-500 font-bold">
                        <input onChange={(e) => setCheckbox(!checkbox)} className="mr-2 leading-tight" type="checkbox" />
                        <span className="text-sm">
                        Send me your newsletter!
                        </span>
                    </label>
                    </div>
                    <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"  type="submit">
                    Send Message
                    </button>
                </div>
                    
                </div>
                
            </form>
            </div>
    )
}


export default Create;
