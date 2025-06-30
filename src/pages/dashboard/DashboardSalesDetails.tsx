import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  Filler,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { MetricBox } from "../../components/dashboard/MetricBox";
import { IconCash, IconShoppingCart, IconUser } from "@tabler/icons-react";

ChartJS.register(
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

// Dummy Data
const sales = "$12,400";
const orders = 120;
const customers = 85;

const topProducts = {
  labels: ["Shirt", "Pants", "Shoes"],
  datasets: [
    {
      label: "Cantidad vendida",
      data: [40, 30, 25],
      backgroundColor: "#4f46e5",
    },
  ],
};

const ordersByMonth = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Órdenes",
      data: [10, 15, 25, 40],
      borderColor: "#10b981",
      backgroundColor: "#10b98144",
      fill: true,
    },
  ],
};

const usersByMonth = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Usuarios",
      data: [5, 8, 12, 20],
      borderColor: "#6366f1",
      backgroundColor: "#6366f144",
      fill: true,
    },
  ],
};

const ordersByStatus = {
  labels: ["Pending", "Paid", "Shipped", "Delivered"],
  datasets: [
    {
      label: "Órdenes por estado",
      data: [20, 40, 30, 10],
      backgroundColor: ["#fbbf24", "#10b981", "#3b82f6", "#6366f1"],
    },
  ],
};

export const DashboardSalesDetails = () => {
  return (
    <div className="p-2 space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <MetricBox title="Ventas totales" value={sales} icon={<IconCash size={28} className="text-green-600" />}  />
        <MetricBox title="Órdenes totales" value={orders} icon={<IconShoppingCart size={28} className="text-blue-600"/>} />
        <MetricBox title="Clientes registrados" value={customers} icon={<IconUser size={28} className="text-purple-600" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Productos más vendidos</h2>
          <Bar data={topProducts} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Órdenes por mes</h2>
          <Line data={ordersByMonth} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Usuarios por mes</h2>
          <Line data={usersByMonth} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Órdenes por estado</h2>
          <Pie data={ordersByStatus} />
        </div>
      </div>
    </div>
  );
}

export default DashboardSalesDetails
