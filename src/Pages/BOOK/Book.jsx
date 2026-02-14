import React from 'react';

const Book = ({book}) => {
    const {  bookName, author, image, rating, category, tags } = book
    
    return (
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
                    {/* Rating Star Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Book;