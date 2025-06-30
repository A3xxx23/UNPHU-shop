import {
  useOrdersByMonth,
  useOrdersByStatus,
  useTopProducts,
  useTotalCustomers,
  useTotalOrders,
  useTotalSales,
  useUsersByMonth
} from "../../hooks/dashboard/stats";

import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement,
  LineElement, ArcElement, Tooltip, Legend
} from "chart.js";

import { MetricBox } from "../../components/dashboard/MetricBox";
import { IconCash, IconShoppingCart, IconUser } from "@tabler/icons-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

export const DashboardOverviewPage = () => {
  const { data: sales } = useTotalSales();
  const { data: orders } = useTotalOrders();
  const { data: customers } = useTotalCustomers();

  const { data: topProducts } = useTopProducts();
  const { data: ordersByMonth } = useOrdersByMonth();
  const { data: usersByMonth } = useUsersByMonth();
  const { data: ordersByStatus } = useOrdersByStatus();

  return (
    <div className="p-6 space-y-10">
      {/* Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <MetricBox
          title="Ventas totales"
          value={`$${sales ?? 0}`}
          icon={<IconCash size={28} className="text-green-600" />}
        />
        <MetricBox
          title="Órdenes totales"
          value={orders ?? 0}
          icon={<IconShoppingCart size={28} className="text-blue-600" />}
        />
        <MetricBox
          title="Clientes registrados"
          value={customers ?? 0}
          icon={<IconUser size={28} className="text-purple-600" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Productos más vendidos */}
        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Productos más vendidos</h3>
          <Bar
            data={{
              labels: topProducts?.map(p => p.name),
              datasets: [
                {
                  label: "Cantidad",
                  data: topProducts?.map(p => p.quantity),
                  backgroundColor: "#4F46E5",
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>

        {/* Órdenes por mes */}
        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Órdenes por fecha</h3>
          <Line
            data={{
              labels: ordersByMonth?.map(e => e.month),
              datasets: [
                {
                  label: "Órdenes",
                  data: ordersByMonth?.map(e => e.count),
                  borderColor: "#0EA5E9",
                  backgroundColor: "#10b98144",
                  fill: true,
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>

        {/* Usuarios por mes */}
        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Usuarios por mes</h3>
          <Line
            data={{
              labels: usersByMonth?.map(e => e.month),
              datasets: [
                {
                  label: "Usuarios",
                  data: usersByMonth?.map(e => e.count),
                  borderColor: "#10B981",
                  backgroundColor: "#10b98144",
                  fill: true,
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>

        {/* Órdenes por estado */}
        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Órdenes por estado</h3>
          <Pie
            data={{
              labels: ordersByStatus?.map(e => e.status),
              datasets: [
                {
                  data: ordersByStatus?.map(e => e.count),
                  backgroundColor: ["#60A5FA", "#34D399", "#FBBF24", "#F87171"],
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverviewPage;

