import { useCustomers } from "../../hooks";
import { TableCustomersAdmin } from "../../components/dashboard";
import { Loader } from "../../components/shared/Loader";

export const DashboardCustomer = () => {
  const { data: customers, isLoading } = useCustomers();

  if (isLoading || !customers) return <Loader/>;

  const transformedData = customers.map(customer => ({
      ...customer,
      customers: Array.isArray(customer.customers) ? customer.customers[0] : customer.customers, // Selecciona el primer usuario si es un array
      }));

      <TableCustomersAdmin customers={transformedData} />

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Usuarios</h1>
      <TableCustomersAdmin customers={customers || []} />
    </div>
  );
};

