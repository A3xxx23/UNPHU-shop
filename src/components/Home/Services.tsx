import { IconCreditCardPay, IconReceiptRefund, IconTruck, IconWorld } from '@tabler/icons-react';

export const Services = () => {
    return (
      <div className="grid grid-cols-2 gap-8 mt-6 mb-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 ">
        <div className="flex items-center gap-4 ">
          <IconTruck className="text-[#439441] w-10 h-10 min-w-[40px] min-h-[40px]" />

          <div className="space-y-1">
            <p className="font-semibold text-black">Entregas en 24 horas</p>
            <p className="text-sm text-black">
              Entrega en 24 horas en cualquier parte del país.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 ">
          <IconReceiptRefund className="text-[#439441] w-10 h-10 min-w-[40px] min-h-[40px]" />

          <div className="space-y-1 text-black">
            <p className="font-semibold">30 dias de garantia</p>
            <p className="text-sm">
              30 dias de garantia de devolución de productos
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 ">
          <IconCreditCardPay className="text-[#439441] w-10 h-10 min-w-[40px] min-h-[40px]" />

          <div className="space-y-1 text-black">
            <p className="font-semibold">Pagos seguros</p>
            <p className="text-sm"> Pago seguro con tarjeta de crédito </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <IconWorld className="text-[#439441] w-10 h-10 min-w-[40px] min-h-[40px]" />

          <div className="space-y-1 text-black">
            <p className="font-semibold">Soporte 24/7</p>
            <p className="text-sm"> Soporte 24/7 para cualquier duda o problema </p>
          </div>
        </div>
      </div>
    );
}

