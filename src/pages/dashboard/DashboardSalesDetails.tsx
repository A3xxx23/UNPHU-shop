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

import { MetricBox } from "../../components/dashboard/MetricBox";

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

import { IconCash,IconCalendarMonth,IconCreditCard } from "@tabler/icons-react";  
import { useAverageSales, usePendingSales, usePaidSales, useTotalSales, useSalesByCustomer, useSalesByMonth, useSalesByProduct } from "../../hooks/dashboard/sales";
import { useTopProducts } from "../../hooks";
import { Bar, Line, Doughnut } from "react-chartjs-2";

export const DashboardSalesDetails = () => {
  const { data: totalSales } = useTotalSales();
  const { data: averageSales } = useAverageSales();
  const { data: paidSales } = usePaidSales();
  const { data: pendingSales } = usePendingSales();
  const { data: topProducts } = useTopProducts();
  const { data: topCustomers } = useSalesByCustomer();
  const { data: salesByMonth } = useSalesByMonth();
  const { data: salesByProduct } = useSalesByProduct();

  const chartDataByMonth = {
    labels: salesByMonth?.map(d => d.month),
    datasets: [
      {
        label: "Ventas por mes",
        data: salesByMonth?.map(d => d.amount),
        borderColor: "#3B82F6",
        backgroundColor: "#93C5FD",
        fill: true,
      },
    ],
  };

  const chartDataByCustomer = {
    labels: topCustomers?.map((d) => d.name),
    datasets: [
      {
        label: "Monto",
        data: topCustomers?.map((d) => d.amount),
        backgroundColor: [
          "#3B82F6", "#10B981", "#F59E0B", "#EF4444",
          "#8B5CF6", "#EC4899", "#6366F1", "#14B8A6",
          "#F43F5E", "#22D3EE", "#A855F7", "#84CC16",
          "#FB923C", "#FACC15", "#E879F9", "#4ADE80",
        ],
        fill: true,
      },
    ],
  };

  const chartDataSalesByProduct = {
    labels: salesByProduct?.map((d) => d.name),
    datasets: [
      {
        label: "Ventas por producto",
        data: salesByProduct?.map((d) => d.quantity),
        borderColor: "#3B82F6",
        backgroundColor: "#93C5FD",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6 space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricBox
          title="Ventas Totales"
          value={`$${totalSales?.toFixed(2) ?? "0.00"}`}
          icon={<IconCash size={28} className="text-green-600" />}
        />

        <MetricBox
          title="Promedio de Ventas"
          value={`$${averageSales?.toFixed(2) ?? "0.00"}`}
          icon={<IconCalendarMonth size={28} className="text-purple-600" />}
        />
        <MetricBox
          title="Ventas Pagadas"
          value={`$${paidSales?.toFixed(2) ?? "0.00"}`}
          icon={<IconCreditCard size={28} className="text-yellow-600" />}
        />
        <MetricBox
          title="Ventas Pendientes"
          value={`$${pendingSales?.toFixed(2) ?? "0.00"}`}
          icon={<IconCreditCard size={28} className="text-yellow-600" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Productos más vendidos */}
        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">
            Productos más vendidos
          </h3>
          <Bar
            data={{
              labels: topProducts?.map((p) => p.name),
              datasets: [
                {
                  label: "Cantidad",
                  data: topProducts?.map((p) => p.quantity),
                  backgroundColor: "#4F46E5",
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>

        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Ventas por mes</h3>
          <Line data={chartDataByMonth} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Ventas por cliente</h3>
          <Doughnut data={chartDataByCustomer} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Ventas por producto</h3>
          <Line data={chartDataSalesByProduct} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSalesDetails
