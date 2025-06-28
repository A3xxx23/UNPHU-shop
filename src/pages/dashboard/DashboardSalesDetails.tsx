import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, AreaChart, Area, PieChart, Pie, Cell, Legend,
} from "recharts";
import { MetricBox } from "../../components/dashboard/MetricBox";
import { ChartBlock } from "../../components/dashboard/ChartBlock";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

const sales = "$12,400";
const orders = 120;
const customers = 85;

const topProducts = [
  { name: "Shirt", quantity: 40 },
  { name: "Pants", quantity: 30 },
  { name: "Shoes", quantity: 25 },
];

const ordersByMonth = [
  { month: "Jan", total: 10 },
  { month: "Feb", total: 15 },
  { month: "Mar", total: 25 },
  { month: "Apr", total: 40 },
];

const usersByMonth = [
  { month: "Jan", total: 5 },
  { month: "Feb", total: 8 },
  { month: "Mar", total: 12 },
  { month: "Apr", total: 20 },
];

const ordersByStatus = [
  { status: "Pending", value: 20 },
  { status: "Paid", value: 40 },
  { status: "Shipped", value: 30 },
  { status: "Delivered", value: 10 },
];

export const DashboardSalesDetails = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricBox title="Ventas totales" value={sales} />
        <MetricBox title="Órdenes totales" value={orders} />
        <MetricBox title="Clientes registrados" value={customers} />
      </div>

      {/* Gráfico 1: Productos más vendidos */}
      <ChartBlock title="Productos más vendidos">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topProducts}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </ChartBlock>

      {/* Gráfico 2: Órdenes por mes */}
      <ChartBlock title="Órdenes por mes">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={ordersByMonth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </ChartBlock>

      {/* Gráfico 3: Nuevos usuarios por mes */}
      <ChartBlock title="Usuarios por mes">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={usersByMonth}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUsers)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartBlock>

      {/* Gráfico 4: Órdenes por estado */}
      <ChartBlock title="Órdenes por estado">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={ordersByStatus}
              dataKey="value"
              nameKey="status"
              cx="50%"
              cy="30%"
              outerRadius={100}
              label
            >
              {ordersByStatus.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartBlock>
    </div>
  );
}

export default DashboardSalesDetails
