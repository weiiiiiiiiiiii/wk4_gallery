import ProductList from './productlist'
import bookscontent from '../json/books.json'

function Books(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {bookscontent.map((book)=>(
                <ProductList key={book.ID} book={book}/>
            ))}
        </div>
    )
}

export default Books