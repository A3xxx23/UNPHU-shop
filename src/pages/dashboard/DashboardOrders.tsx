import {
  useOrdersByStatus,
  useOrdersByMonth
} from "../../hooks/dashboard/stats";

import { Line, Pie } from "react-chartjs-2";

import { MetricBox } from "../../components/dashboard/MetricBox";
import { IconReceipt, IconClock, IconCreditCard, IconTruckDelivery } from "@tabler/icons-react";
import { useRecentOrders } from "../../hooks/dashboard/orders";

export const DashboardOrders = () => {
  const {data: ordersByStatus} = useOrdersByStatus();
  const {data: orders} = useRecentOrders();
  const {data: ordersByMonth} = useOrdersByMonth();

  const totalOrders = ordersByStatus?.reduce((acc, curr) => acc + curr.count, 0) ?? 0;
  const pendingOrders = ordersByStatus?.find(e => e.status === "Pending")?.count ?? 0;
  const deliveredOrders = ordersByStatus?.find(e => e.status === "Delivered")?.count ?? 0;
  const paidOrders = ordersByStatus?.find(e => e.status === "Paid")?.count ?? 0;
  const shippedOrders = ordersByStatus?.find(e => e.status === "Shipped")?.count ?? 0;

  return (
    <div className="p-6 space-y-10">
          {/* Métricas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-2">
            <MetricBox
              title="Órdenes totales"
              value={totalOrders ?? 0}
              icon={<IconReceipt size={28} className="text-blue-600" />}
            />
            <MetricBox
              title="Pendientes"
              value={pendingOrders ?? 0}
              icon={<IconClock size={28} className="text-green-600" />}
            />
            <MetricBox
              title="Entregados"
              value={deliveredOrders ?? 0}
              icon={<IconTruckDelivery size={28} className="text-red-600" />}
            />
            <MetricBox
              title="Cancelados"
              value={paidOrders ?? 0}
              icon={<IconCreditCard size={28} className="text-yellow-600" />}
            />
            <MetricBox
              title="En camino"
              value={shippedOrders ?? 0}
              icon={<IconClock size={28} className="text-purple-600" />}
            />
          </div>
    
          {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Órdenes por estado</h3>
          <Pie
            data={{
              labels: ordersByStatus?.map(e => e.status),
              datasets: [{
                data: ordersByStatus?.map(e => e.count),
                backgroundColor: ["#fbbf24", "#10b981", "#60a5fa", "#a78bfa"]
              }]
            }}
            options={{ responsive: true }}
          />
        </div>

        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Órdenes por mes</h3>
          <Line
            data={{
              labels: ordersByMonth?.map(e => e.month),
              datasets: [{
                label: "Órdenes",
                data: ordersByMonth?.map(e => e.count),
                borderColor: "#4f46e5",
                backgroundColor: "#10b98190",
                hoverBackgroundColor: "#4f46e1",
                borderWidth: 1,
                pointBackgroundColor: "#4f46e9",
                fill: true
              }]
            }}
            options={{ responsive: true }}
          />
        </div>
      </div>

      {/* Tabla */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Últimas órdenes</h2>
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-700 font-semibold">
            <tr>
              <th className="py-2 px-4">Cliente</th>
              <th className="py-2 px-4">Estado</th>
              <th className="py-2 px-4">Monto</th>
              <th className="py-2 px-4">Fecha</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {orders?.map(order => (
              <tr key={order.id} className="hover:bg-gray-200">
                <td className="py-2 px-4">{order.customers?.full_name}</td>
                <td className="py-2 px-4">{order.status}</td>
                <td className="py-2 px-4">${order.total_amount?.toFixed(2)}</td>
                <td className="py-2 px-4">{new Date(order.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardOrders
