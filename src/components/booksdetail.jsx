import { BrowserRouter,Routes,Route,Link } from "react-router";

function BooksDetail({book}){
    return(
        <div className="flex mt-20 mb-20">
            <div className="">
                <img 
                    src={book.cover} 
                    alt="" 
                    className="w-3/5"/>
            </div>
            <div className="w-180 mx-auto ">
                <h2 className=" mt-5 mb-5 font-bold text-lg text-white">{book.title}</h2>
                <h4 className="mb-5 text-indigo-400">{book.author}</h4>
                <p className="mb-8">{book.summary}</p>
                <div>
                    <p className="text-gray-500 font-bold">US${book.price}.00</p>
                </div>
                <button className="w-120 mt-10 hover:text-red-300">Add To Cart</button>
            </div>
        </div>
    )
}

export default BooksDetail;