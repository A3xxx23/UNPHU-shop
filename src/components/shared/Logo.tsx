import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/"
        className="flex items-center">
            <img src="/logo.PNG" alt="Logo" height={85} width={85} className="mx-4" />
        </Link>
    );
    }