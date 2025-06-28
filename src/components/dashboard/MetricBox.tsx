export const MetricBox = ({ title, value }: { title: string; value: string | number }) => (
  <div className="bg-white rounded-lg p-5 shadow border">
    <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);