import { BrowserRouter,Routes,Route,Link } from "react-router";
import HamMenu from './HamMenu';
import { useState } from "react"
import NavBar from "./NavBar"

function Header({title,slogan}){

    const [isOpen, setIsOpen] = useState(false); 

    return(
        <header className="relative text-center flex flex-col items-center header" >
            <HamMenu 
                className="absolute left-0 top-4" 
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
            />
            <Link to = "/">
                <h1 className="mb-3 text-indigo-300">{title}</h1>
            </Link>
            <span className="pb-8 hover:text-red-300">{slogan}</span>
            <div className="flex justify-center">
                <hr className="border-t-5 border-indigo-300 rounded mt-0 my-5 w-30 mx-auto " />
            </div>
            <NavBar/>
        </header>
    )

}

export default Header;

