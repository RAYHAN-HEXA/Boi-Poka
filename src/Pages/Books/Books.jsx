import { Suspense } from "react";
import Book from "../BOOK/Book";




const Books = ({data}) => {
   
    //  useEffect(()=>{
    //     fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
    //    .then(res => res.json())
    //    .then(data => console.log(data))

    //  },[]
    // )
    return (
        <div>
            <h1 className="text-3xl text-center mb-10 font-extrabold" >BOOKS</h1>
            
          <Suspense fallback={<span>.........loading</span>} >
          <div className="grid grid-cols-3 gap-5 m-5" >
          {
            data?.map((book)  => <Book key={book.id} book={book} ></Book>)
          }
               </div>

          </Suspense>
   
        </div>
    );
};

export default Books;