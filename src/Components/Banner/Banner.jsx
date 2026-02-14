import React from 'react';
import bookIMg from "../../assets/books.jpg"
const Banner = () => {
    return (
        <div className='flex justify-around m-10 p-24 bg-gray-400 rounded-xl'>
            <div >
<h1 className='text-7xl' >Books to freshen up your bookshelf</h1>
<button className=' mt-5 btn btn-neutral bg-green-700 ' >View The List</button>
            </div>
           <div >
<img src={bookIMg} className='rounded-xl' alt="" />
            </div> 
        </div>
    );
};

export default Banner;