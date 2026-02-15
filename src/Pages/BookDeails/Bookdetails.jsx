import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const Bookdetails = () => {
const handleBookStored = () =>{
        // store with id 
    // where to store 
    // array or collecion
    // if the book already exist the show a alert 
    // of book not exist then push to he collection or array

}
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const book = data.find ( book => book.bookId === bookId);
    console.log(book)

  
    return (
     <div className="min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl p-8 md:p-12 gap-10 max-w-6xl w-full shadow-sm border border-gray-100">
        
        {/* Left Side: Book Cover Image */}
        <div className="md:w-2/5 bg-[#F3F3F3] rounded-2xl flex items-center justify-center p-12">
          <img 
            src={book.image} 
            alt={book.bookName} 
            className="w-full h-auto object-contain drop-shadow-2xl rounded-sm"
          />
        </div>

        {/* Right Side: Book Information */}
        <div className="md:w-3/5 flex flex-col">
          <h1 className="text-4xl font-bold text-[#131313] mb-3">{book.bookName}</h1>
          <p className="text-xl font-semibold text-[#131313cc] mb-4">By : {book.author}</p>
          
          <div className="border-t border-b border-gray-200 py-3 mb-4">
            <p className="text-xl font-semibold text-[#131313cc]">{book.category}</p>
          </div>

          <p className="text-[#131313b3] leading-relaxed mb-6">
            <span className="font-bold text-black">Review : </span> {book.review}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-bold text-black">Tag</span>
            <div className="flex gap-3">
              {book.tags?.map((tag, index) => (
                <span key={index} className="text-[#23BE0A] bg-[#23be0a0d] px-4 py-1.5 rounded-full font-bold text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-3 mb-8">
            <div className="flex w-72">
              <span className="w-1/2 text-[#131313b3]">Number of Pages:</span>
              <span className="w-1/2 font-bold">{book.totalPages}</span>
            </div>
            <div className="flex w-72">
              <span className="w-1/2 text-[#131313b3]">Publisher:</span>
              <span className="w-1/2 font-bold">{book.publisher}</span>
            </div>
            <div className="flex w-72">
              <span className="w-1/2 text-[#131313b3]">Year of Publishing:</span>
              <span className="w-1/2 font-bold">{book.yearOfPublishing}</span>
            </div>
            <div className="flex w-72">
              <span className="w-1/2 text-[#131313b3]">Rating:</span>
              <span className="w-1/2 font-bold">{book.rating}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button onClick={() => handleBookStored (id)  } className="px-8 py-3 border  text-amber-800 border-gray-600 rounded-lg font-bold hover:bg-gray-600 transition-colors">
              Read List
            </button>
            <button className="px-8 py-3 bg-[#50B1C9] text-amber-800 rounded-lg font-bold hover:bg-[#409eb5] transition-colors">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Bookdetails;