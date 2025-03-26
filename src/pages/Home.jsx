import Header from '../components/header';
import Books from '../components/books';
import Footer from '../components/footer';

function Home(){

    return(
        <div>
            <Header
                title= "This is a book"
                slogan= "I like apple juice"
            />
            <Books />
            <Footer/>
        </div>
    )

}

export default Home;