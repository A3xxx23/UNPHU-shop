import { useNavigate, useParams } from 'react-router-dom';
import { useOrderAdmin } from '../../hooks';
import { Loader } from '../../components/shared/Loader';
import { formatDateLong, formatPrice } from '../../helpers';
import { IconChevronLeft, IconDownload } from '@tabler/icons-react';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

const tableHeaders = ['Producto', 'Cantidad', 'Total'];

export const DashboardOrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: order, isLoading } = useOrderAdmin(Number(id));

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef:printRef,
    documentTitle: `Factura-Orden-${id}`,
  });

  if (isLoading || !order) return <Loader />;

  return (
    <div>
      <div className='flex justify-between items-center'>
        <button
          className='border rounded-full py-2 border-slate-200 px-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest hover:bg-stone-100 transition-all'
          onClick={() => navigate(-1)}
        >
          <IconChevronLeft size={16} />
          Volver a Ordenes
        </button>

        <div className='flex flex-col items-center gap-1.5'>
          <h1 className='text-3xl font-bold'>Orden #{id}</h1>
          <p className='text-sm'>{formatDateLong(order.created_at)}</p>
        </div>

        <button
          onClick={handlePrint}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <IconDownload size={16} />
          Descargar PDF
        </button>
      </div>

      <div ref={printRef}>
        <div className='flex flex-col mt-10 mb-5 gap-10'>
          <table className='text-sm w-full caption-bottom overflow-auto'>
            <thead className='border-b border-gray-200 pb-3'>
              <tr className='text-sm font-bold text-gray-950'>
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className={`h-12 px-4 ${
                      header === 'Producto' ? 'text-left' : 'text-center'
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className='[&_tr:last-child]:border-0'>
              {Array.isArray(order.orderItems) &&
                order.orderItems.map((item, index) => (
                  <tr key={index} className='border-b border-gray-200'>
                    <td className='p-4 font-medium tracking-tighter flex gap-3 items-center'>
                      <img
                        src={
                          item.productImage ||
                          'https://ui.shadcn.com/placeholder.svg'
                        }
                        alt={item.productName || 'Producto'}
                        className='h-20 w-20 object-contain rounded-lg'
                      />
                      <div className='space-y-2 text-slate-600'>
                        <h3>{item.productName || 'Producto desconocido'}</h3>
                        <p className='text-xs text-slate-600'>
                          {item.color_name || 'Sin color'} / {item.size || 'Sin talla'}
                        </p>
                        <p className='text-sm text-slate-600'>{formatPrice(item.price || 0)}</p>
                      </div>
                    </td>
                    <td className='p-4 font-medium tracking-tighter text-center text-slate-600'>
                      {item.quantity || 0}
                    </td>
                    <td className='p-4 font-medium tracking-tighter text-center text-slate-600'>
                      {formatPrice((item.price || 0) * (item.quantity || 0))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className='flex flex-col gap-3 text-slate-600 text-sm self-end w-1/2'>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>{formatPrice(order.totalAmount)}</p>
            </div>
            <div className='flex justify-between'>
              <p>Delivery (Estandar)</p>
              <p>{formatPrice(0)}</p>
            </div>
            <div className='flex justify-between text-black font-semibold'>
              <p>Total</p>
              <p>{formatPrice(order.totalAmount)}</p>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-lg font-bold text-black'>Dirección de entrega</h2>
            <div className='border border-stone-300 p-5 flex flex-col gap-5'>
              <div className='space-y-1'>
                <h3 className='font-medium text-base text-black'>Cliente:</h3>
                <p className='text-slate-600'>{order.customer.full_name}</p>
              </div>

              <div className='flex flex-col gap-1 text-sm'>
                <h3 className='font-medium text-base text-black'>Dirección:</h3>
                <p className='text-slate-600'>{order.address.addressLine1}</p>
                {order.address.addressLine2 && <p>{order.address.addressLine2}</p>}
                <p className='text-slate-600'>{order.address.city}</p>
                <p className='text-slate-600'>{order.address.state}</p>
                <p className='text-slate-600'>{order.address.postalCode}</p>
                <p className='text-slate-600'>{order.address.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  