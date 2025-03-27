import Header from '../components/header';
import BooksDetail from '../components/booksdetail';
import Footer from '../components/footer';
import bookscontent from '../json/books.json'
import { useParams } from 'react-router'


function Detail() {

    const { bookid } = useParams();
    const book = bookscontent.find(
        (x) => x.ID === Number(bookid)
    )
    console.log("bookid from useParams():", bookid);

    return (
        <div>
            <Header
                title="Books Detail"
                slogan="Go Straight Turn Right"
            />
            <BooksDetail book={book} />
            <Footer />
        </div>

    )
}

export default Detail;
