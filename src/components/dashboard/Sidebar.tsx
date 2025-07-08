import { NavLink, useNavigate } from "react-router-dom";
import { dashboardLinks } from "../../constants/links";
import { IconLogout2 } from "@tabler/icons-react";
import { signOut } from "../../actions";
import { LogoRemove } from "../shared/logoRemove";

export const Sidebar = () => {

  const handleLogout = async () => {
    await signOut();
  }

  const navigate = useNavigate();


  return (
    <div className="w-[120px] bg-[#388336] text-white flex flex-col gap-10 items-center p-5 fixed h-screen lg:w-[250px]">
      <LogoRemove />

      <nav className="w-full space-y-5 flex-1">
        {dashboardLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) =>
              `flex items-center justify-center gap-3 pl-0 py-3 transition-all duration-300 rounded-md ${
                isActive
                  ? "text-white bg-[#2e682d]"
                  : "hover:text-white hover:bg-[#2e682d]"
              } lg:pl-5 lg:justify-start `
            }
          >
            {link.icon}
            <p className="font-semibold text-white hidden lg:block">
              {link.title}
            </p>
          </NavLink>
        ))}
      </nav>

      <button
        className="bg-[#2e682d] w-full py-[10px] rounded-md flex items-center justify-center gap-2 font-semibold text-sm
      hover:underline"
        onClick={async () => {
          await handleLogout();
          navigate("/login");
        }}
      >
        <span className="hidden lg:block">Log Out </span>
        <IconLogout2 size={20} className="inline-block text-white" />
      </button>
    </div>
  );
};