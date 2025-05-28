import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "../components/dashboard";
import { useUser } from "../hooks";
import { useEffect, useState } from "react";
import { getSession, getUserRole } from "../actions";
import { Loader } from "../components/shared/Loader";
import { supabase } from "../supabase/client";

export const DashboardLayout = () => {

  const navigate = useNavigate();

  const {isLoading, session} = useUser();
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    const checkRole = async () => {
      setRoleLoading(true);
      const session = await getSession();
      if(!session) {
        navigate('/login')
      }

      const role = await getUserRole(session.session?.user.id as string);

      if(role !== 'admin') {
        navigate('/', {replace: true});
      }

      setRoleLoading(false);
    };

    checkRole();

    supabase.auth.onAuthStateChange(async(event, session) => {
        if (event === 'SIGNED_OUT' || !session){
            navigate('/login', {replace: true})
        }
    });     
  }, [navigate]);

  if(isLoading || roleLoading || !session) return <Loader/>; 


  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar/>

      <main className="container m-5 mt-7 flex-1 text-slate-800 ml-[140px] lg:ml-[270px]">
      <Outlet/>
      </main>

        
        
    </div>
  );
};