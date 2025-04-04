import { NavLink } from 'react-router';

function NavBar(){

    const navBarContent = [
        { to: "/books/category/Social-Fiction", label:"Social Fiction"},
        { to: "/books/category/Bildungsroman", label:"Bildungsroman"},
        { to: "/books/category/Romantic-Fiction", label:"Romantic Fiction"},
        { to: "/books/category/Adventure", label:"Adventure"},
    ];

    return(
        <div className="flex flex-wrap justify-center">
            {navBarContent.map(({ to , label }) => (
                <NavLink
                    key = {to}
                    to = {to}
                    className={({ isActive }) =>
                        `mx-6 text-white text-base transition-all duration-400 ease-in-out ${
                            isActive ?"opacity-100 font-normal" :"opacity-60"
                        }hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
                    }
                >
                    {label}
                </NavLink>
            )
        )}

        </div>
    );


}

export default NavBar;