import { BrowserRouter, Routes, Route, Link } from "react-router";

function ProductList ({book}){
    return(
        <section>
            <div className=" mt-6 border border-black-500">
                <Link to ={`/books/id/${book.ID}`}>
                    <img src={book.cover} alt="" />
                </Link>
                <div >
                    <h3 className="mt-2.5 mb-1 text-white font-bold">
                        {book.title}
                    </h3>
                    <h5 className="mb-1 text-indigo-400">
                        {book.author}
                    </h5>
                    <p className="mb-2 px-2">{book.summary_short}</p>
                    <div className="flex justify-between px-2 text-orange-400 mb-2">
                        <Link to={`/books/id/${book.ID}`}>
                            See More
                        </Link>
                        <span className="text-gray-500 font-bold">{book.price}</span>
                    </div>
                        
                </div>


            </div>
        </section>
    )

}

export default ProductList;