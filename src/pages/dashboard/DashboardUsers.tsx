import {
  useTotalCustomers,
  useCustomersByMonth,
  useTodayCustomers,
  useWeeklyCustomers,
  useCustomersByCountry
} from "../../hooks/dashboard/customers";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { IconUser, IconCalendarStats, IconUserPlus, IconUsersGroup } from "@tabler/icons-react";
import { MetricBox } from "../../components/dashboard/MetricBox";

ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export const DashboardUsers = () => {
  const { data: totalCustomers } = useTotalCustomers();
  const { data: customersByMonth } = useCustomersByMonth();
  const { data: todayCustomers } = useTodayCustomers();
  const { data: weeklyCustomers } = useWeeklyCustomers();
  const { data: customersByCountry } = useCustomersByCountry();

  const lineData = {
    labels: customersByMonth?.map((e) => e.month),
    datasets: [
      {
        label: "Clientes por mes",
        data: customersByMonth?.map((e) => e.count),
        borderColor: "#3B82F6",
        backgroundColor: "#93C5FD",
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ["Hoy", "Últimos 7 días", "Total"],
    datasets: [
      {
        label: "Clientes",
        data: [todayCustomers ?? 0, weeklyCustomers ?? 0, totalCustomers ?? 0],
        backgroundColor: ["#10B981", "#F59E0B", "#6366F1"],
      },
    ],
  };

  const pieData = {
    labels: ["Clientes nuevos hoy", "Restantes"],
    datasets: [
      {
        data: [todayCustomers ?? 0, (totalCustomers ?? 0) - (todayCustomers ?? 0)],
        backgroundColor: ["#34D399", "#E5E7EB"],
      },
    ],
  };

  const countryChart = {
  labels: customersByCountry?.map((e) => e.country),
  datasets: [
    {
      label: "Clientes por país",
      data: customersByCountry?.map((e) => e.count),
      backgroundColor: [
        "#F87171", "#60A5FA", "#34D399", "#FBBF24",
        "#A78BFA", "#F472B6", "#4ADE80", "#FACC15",
      ],
    },
  ],
};

  return (
    <div className="p-6 space-y-10">
      {/* Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricBox
          title="Total Clientes"
          value={totalCustomers ?? 0}
          icon={<IconUsersGroup size={28} className="text-indigo-600" />}
        />
        <MetricBox
          title="Clientes Hoy"
          value={todayCustomers ?? 0}
          icon={<IconUserPlus size={28} className="text-green-600" />}
        />
        <MetricBox
          title="Esta Semana"
          value={weeklyCustomers ?? 0}
          icon={<IconCalendarStats size={28} className="text-yellow-600" />}
        />
        <MetricBox
          title="Clientes por mes"
          value={customersByMonth?.length ?? 0}
          icon={<IconUser size={28} className="text-purple-600" />}
        />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow border border-stone-100">
          <h3 className="font-semibold text-gray-800 mb-2">Clientes por mes</h3>
          <Line data={lineData} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow border border-stone-100">
          <h3 className="font-semibold text-gray-800 mb-2">
            Resumen de registros
          </h3>
          <Bar data={barData} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow border border-stone-100">
          <h3 className="font-semibold text-gray-800 mb-2">
            Distribución de hoy
          </h3>
          <Pie data={pieData} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow border border-stone-100">
          <h3 className="font-semibold text-gray-800 mb-2">
            Clientes por país
          </h3>
          <Doughnut data={countryChart} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default DashboardUsers;
