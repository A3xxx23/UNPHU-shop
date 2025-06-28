import { useState } from 'react';
import { DashboardOverviewPage } from './DashboardOverviewPage';
import { DashboardProducts } from './DashboardProducts';
import { DashboardOrders } from './DashboardOrders';
import { DashboardSalesDetails } from './DashboardSalesDetails';
import { DashboardUsers } from './DashboardUsers';

const tabNames = [
  { key: 'overview', label: 'Resumen general' },
  { key: 'products', label: 'Productos' },
  { key: 'orders', label: 'Órdenes' },
  { key: 'sales', label: 'Ventas' },
  { key: 'users', label: 'Usuarios' },
] as const;

type Tab = (typeof tabNames)[number]['key'];

export const DashboardSalesPage = () => {
  const [tab, setTab] = useState<Tab>('overview');

  return (
    <div className="flex flex-col gap-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-4">
        {tabNames.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 shadow-sm
              ${tab === key ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div>
        {tab === 'overview' && <DashboardOverviewPage />}
        {tab === 'products' && <DashboardProducts />}
        {tab === 'orders' && <DashboardOrders />}
        {tab === 'sales' && <DashboardSalesDetails />}
        {tab === 'users' && <DashboardUsers />}
      </div>
    </div>
  );
};
