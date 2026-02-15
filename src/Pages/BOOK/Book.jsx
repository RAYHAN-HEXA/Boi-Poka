import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({book}) => {
    const {  bookName, author, image, rating, category, tags,bookId } = book
    
    return (
       <Link to={`/bookDetails/${bookId}`} >
        <div className='border-amber-900' >
           <div className="card w-full bg-white border border-[#13131326] p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer">
            {/* Image container with light gray background */}
            <figure className="bg-[#F3F3F3] rounded-2xl py-8 flex justify-center items-center p-3">
                <img
                    className="h-40 object-contain rounded shadow-sm w-[400px]"
                
                    src={image}
                    alt={bookName}
                />
            </figure>

            {/* Tags section */}
            <div className="flex flex-wrap gap-3 mt-6 mb-4">
                {tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="px-4 py-1 bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-sm font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Book Name & Author */}
            <div className="flex-grow">
                <h2 className="text-2xl font-bold text-[#131313] font-serif mb-2 leading-tight">
                    {bookName}
                </h2>
                <p className="text-[#131313CC] font-medium mb-4">By : {author}</p>
            </div>

            {/* Divider Line (Dashed) */}
            <div className="border-t border-dashed border-[#13131326] my-4"></div>

            {/* Footer: Category & Rating */}
            <div className="flex justify-between items-center text-[#131313CC] font-medium">
                <p>{category}</p>
                <div className="flex items-center gap-2">
                    <span>{rating}</span>
                   <FaStar></FaStar>
                </div>
            </div>
        </div> 
        </div>
       
       </Link>
    );
};

export default Book;