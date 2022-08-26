import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {    Link  } from "react-router-dom";
function Read(){
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6209e9e092946600171c55a1.mockapi.io/fakeCrud`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let {id, username, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', username);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
     }
     const getData = () => {
        axios.get(`https://6209e9e092946600171c55a1.mockapi.io/fakeCrud/`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

     const onDelete = (id) => {
        axios.delete(`https://6209e9e092946600171c55a1.mockapi.io/fakeCrud/${id}`).then(() => {
            getData();
        })
      }

    return(
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                >
                    <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Last Name
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Checkbox
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Update
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Delete
                        </th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {APIData.map((data) => {
                        return (
                            <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img
                                    className="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                    {data.firstName}
                                    </p>
                                    
                                </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{data.lastName}</p>
                                
                            </td>
                            
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span
                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                >
                                <span
                                    aria-hidden
                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">{data.checkbox ? 'Checked' : 'Unchecked'}</span>
                                </span>
                            </td>
                            <Link to='/update'>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <button onClick={() => setData(data)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
                                Update
                                </button>   
                            </td>
                            </Link>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <button onClick={() => onDelete(data.id)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
                                Delete
                                </button>   
                            </td>
                            </tr>
                    )})}
                        
                        
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Read;
