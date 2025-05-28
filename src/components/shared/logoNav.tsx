import {Link} from "react-router-dom";

export const LogoNav = () => {
    return (
        <Link to="/"
        className="flex items-center">
            <img src="/logo.PNG" alt="Logo" height={140} width={140} className="mx-4" />
        </Link>
    );
    }