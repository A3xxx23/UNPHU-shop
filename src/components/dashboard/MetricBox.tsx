import type { ReactNode } from "react";

interface Props {
  title: string;
  value: string | number;
  icon?: ReactNode;
}

export const MetricBox = ({ title, value, icon }: Props) => (
  <div className="bg-white rounded-xl p-6 shadow-md border-gray-400 flex items-center gap-4">
    {icon && (
      <div className="bg-gray-100 p-3 rounded-full text-gray-600">
        {icon}
      </div>
    )}
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);