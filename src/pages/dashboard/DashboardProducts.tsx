import { IconPackage, IconLayersSubtract, IconStack, IconTags } from "@tabler/icons-react";
import { MetricBox } from "../../components/dashboard";
import { useBrandCount, useProductCount, useRecentProducts, useStockByBrand, useTotalStock, useVariantCount } from "../../hooks/dashboard/product";
import { Bar, Doughnut } from "react-chartjs-2";
import { useTopProducts } from "../../hooks";

export const DashboardProducts = () => {
  const { data: productCount } = useProductCount();
  const { data: variantCount } = useVariantCount();
  const { data: brandCount } = useBrandCount();
  const { data: totalStock } = useTotalStock();
  const { data: recentProducts } = useRecentProducts();
  const { data: topProducts } = useTopProducts();
  const { data: stockByBrand } = useStockByBrand();

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricBox
          title="Productos totales"
          value={productCount ?? 0}
          icon={<IconPackage size={28} className="text-blue-600" />}
        />
        <MetricBox
          title="Total de variantes"
          value={variantCount ?? 0}
          icon={<IconLayersSubtract size={28} className="text-green-600" />}
        />
        <MetricBox
          title="Stock total"
          value={totalStock ?? 0}
          icon={<IconStack size={28} className="text-yellow-600" />}
        />
        <MetricBox
          title="Total de marcas"
          value={brandCount ?? 0}
          icon={<IconTags size={28} className="text-purple-600" />}
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
                  backgroundColor: "#10b98190",
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>

        {/* Stock por Marca */}
        <div className="bg-white p-4 rounded-xl shadow border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Stock por Marca</h3>
          <Doughnut
            data={{
              labels: stockByBrand?.map((item) => item.brand),
              datasets: [
                {
                  label: "Stock",
                  data: stockByBrand?.map((item) => item.stock),
                  backgroundColor: [
                    "#3B82F6", "#10B981", "#F59E0B", "#EF4444",
                    "#8B5CF6", "#EC4899", "#6366F1", "#14B8A6",
                    "#F43F5E", "#22D3EE", "#A855F7", "#84CC16",
                    "#FB923C", "#FACC15", "#E879F9", "#4ADE80",
                  ],
                  borderColor: "#ffffff",
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: {
                    color: "#374151",
                    font: { size: 14 },
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Últimos productos agregados */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Últimos productos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left font-semibold text-gray-700">
              <tr>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Nombre</th>
                <th className="py-2 px-4">Marca</th>
                <th className="py-2 px-4">Fecha de creación</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {recentProducts?.map((p) => (
                <tr key={p.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4">{p.id.toString()}</td>
                  <td className="py-2 px-4">{p.name}</td>
                  <td className="py-2 px-4">{p.brand}</td>
                  <td className="py-2 px-4">{new Date(p.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardProducts;
