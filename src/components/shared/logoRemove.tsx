import {Link} from "react-router-dom";

export const LogoRemove = () => {
    return (
        <Link to="/"
        className="flex items-center">
            <img src="/logoRemove.png" alt="Logo" height={100} width={100}/>
        </Link>
    );
    }