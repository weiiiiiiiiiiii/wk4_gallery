import { useParams } from 'react-router'
import { Helmet } from "react-helmet-async"
import _ from 'lodash';
import Header from "../components/header"
import Footer from "../components/footer"
import Books from "../components/books"
import bookscontent from "../json/books.json"

function Category(){
    const { categoryName } = useParams();
    const _books = bookscontent.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
    );

    const title = _.startCase(categoryName);

    return(
        <div className="container mx-auto main-layout">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header
                title={title}
                slogan="Which one do you like -Coffee or Tea?"
            />
            <Books bookscontent={_books} className="content" />
            <Footer className="footer" />

        </div>
    );
}

export default Category;


