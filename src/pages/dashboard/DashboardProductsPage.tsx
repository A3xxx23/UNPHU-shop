import { IconCirclePlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { TableProduct } from "../../components/dashboard";

export const DashboardProductsPage = () => {
  return (
    <div className="h-full flex flex-col gap-2">
      <Link
        to="/dashboard/product/new"
        className="bg-[#388336] text-white flex items-center self-end py-[6px] px-2 rounded-md text-sm gap-1 font-semibold"
      >
        <IconCirclePlus className="inline-block" />
        Agregar Producto
      </Link>

      <TableProduct />
    </div>
  );
};