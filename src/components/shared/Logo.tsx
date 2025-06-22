import {Link} from "react-router-dom"; 

export const Logo = () => {
    return (
        <Link to="/"
        className="flex items-center mg-0">
            <img src='/logo.PNG' alt="Logo" height={50} width={80} />
        </Link>
    );
    }