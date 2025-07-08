import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "../actions/auth";
import { useRoleUser, useUser } from "../hooks";
import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { Loader } from "../components/shared/Loader";
import { IconExternalLink } from "@tabler/icons-react";

export const ClientLayout = () => {

    const {session, isLoading: isLoadingSession} = useUser();

    const {data: role, isLoading: isLoadingRole} = useRoleUser(session?.user.id as string);
    const navigate = useNavigate();

    useEffect(()=> {
        supabase.auth.onAuthStateChange(async(event, session) => {
            if (event === 'SIGNED_OUT' || !session){
                navigate('/login', {replace: true})
            }
        })
    }, [navigate]);

    if (isLoadingSession || isLoadingRole) return <Loader/>

    const handleLogout = async () => {
        await signOut();
    }

    return (
      <div className="flex flex-col gap-5">
        {/* menu */}
        <nav className="flex justify-center gap-10 text-sm font-medium text-gray-950">
          <NavLink
            to="/account/orders"
            className={({ isActive }) =>
              `${
                isActive
                  ? "underline hover:text-gray-500"
                  : "hover:underline hover:text-gray-500"
              }`
            }
          >
            Ordenes
          </NavLink>

          {/* Dashboard*/}

          {role === "admin" && (
            <NavLink
              to="/dashboard/product"
              className="flex items-center gap-1 hover:underline text-gray-950"
            >
              Panel de Administración
              <IconExternalLink size={16} className="inline-block" />
            </NavLink>
          )}

          <button className="hover:underline " onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </nav>

        <main className="container mt-12 flex-1">
          <Outlet />
        </main>
      </div>
    );
};