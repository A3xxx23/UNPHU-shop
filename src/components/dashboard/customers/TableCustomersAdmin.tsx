import type { Customer } from '../../../interfaces';
import { formatDateLong, formatDateLongFromDate } from '../../../helpers';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { IconDownload } from '@tabler/icons-react';

const tableHeaders = ['Nombre', 'Correo', 'Teléfono', 'Fecha de creación'];

interface Props {
  customers: Customer[];
}

export const TableCustomersAdmin = ({ customers }: Props) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Listado de clientes - ${formatDateLongFromDate(new Date())}`,
  });

  return (
    <>
      <button
        onClick={handlePrint}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors mb-4"
      >
        <IconDownload size={16} />
        Descargar PDF
      </button>

      <div ref={printRef} className='relative w-full h-full'>
        <table className='text-sm w-full caption-bottom overflow-auto'>
          <thead className='border-b border-gray-200 pb-3'>
            <tr className='text-sm font-bold text-gray-900'>
              {tableHeaders.map((header, index) => (
                <th key={index} className='h-12 px-4 text-left'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className='[&_tr:last-child]:border-0'>
            {customers.map(customer => (
              <tr
                key={customer.id}
                className='cursor-pointer hover:bg-gray-200 transition-colors duration-200'
              >
                <td className='p-4 font-medium tracking-tighter text-gray-600'>
                  {customer.full_name}
                </td>
                <td className='p-4 font-medium tracking-tighter text-gray-600'>
                  {customer.email}
                </td>
                <td className='p-4 font-medium tracking-tighter text-gray-600'>
                  {customer.phone}
                </td>
                <td className='p-4 font-medium tracking-tighter text-gray-600'>
                  {formatDateLong(customer.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableCustomersAdmin;

