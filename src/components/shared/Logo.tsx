import {Link} from "react-router-dom"; 

export const Logo = () => {
    return (
        <Link to="/"
        className="flex items-center mg-0">
            <img src='/images/BuhoFavicon.PNG' alt="Logo" height={80} width={120} />
        </Link>
    );
    }