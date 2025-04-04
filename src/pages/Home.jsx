import Header from '../components/header';
import Books from '../components/books';
import Footer from '../components/footer';
import bookscontent from '../json/books.json'

function Home(){

    return(
        <div>
            <Header
                title= "This is a book"
                slogan= "I like apple juice"
            />
            <Books bookscontent={bookscontent} className="content"/>
            <Footer/>
        </div>
    )

}

export default Home;