import { BrowserRouter,Routes,Route,Link } from "react-router";

function Header({title,slogan}){
    return(
        <header className="" >
            <Link to = "/">
                <h1 className="mb-3 text-indigo-300">{title}</h1>
            </Link>
            <span className="pb-8 hover:text-red-300">{slogan}</span>
            <hr className="border-t-5 border-indigo-300 rounded mt-10 w-30 mx-auto " />
        </header>
    )

}

export default Header;

