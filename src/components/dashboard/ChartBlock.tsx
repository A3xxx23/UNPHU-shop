export const ChartBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-lg p-5 shadow border space-y-4">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    {children}
  </div>
);