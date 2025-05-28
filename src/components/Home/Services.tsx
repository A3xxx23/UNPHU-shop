import { IconCreditCardPay, IconReceiptRefund, IconTruck, IconWorld } from '@tabler/icons-react';

export const Services = () => {
    return (
                       
        <div className="grid grid-cols-2 gap-8 mt-6 mb-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 ">
            <div className="flex items-center gap-4 ">
             <IconTruck className='text-gray-400 w-10 h-10 min-w-[40px] min-h-[40px]'/>

             <div className='space-y-1'>
                <p className='font-semibold text-black'>Free Shipping</p>
                <p className='text-sm text-black'>Get free shipping on all orders over $50</p>
             </div>
            </div>

            <div className="flex items-center gap-4 ">
             <IconReceiptRefund className='text-gray-400 w-10 h-10 min-w-[40px] min-h-[40px]'/>

             <div className='space-y-1 text-black'>
                <p className='font-semibold'>Money Back Guarantee</p>
                <p className='text-sm'>30-day money back guarantee</p>
             </div>
            </div>

            <div className="flex items-center gap-4 ">
             <IconCreditCardPay className='text-gray-400 w-10 h-10 min-w-[40px] min-h-[40px]'/>

             <div className='space-y-1 text-black'>
                <p className='font-semibold'>Secure Payment</p>
                <p className='text-sm'>100% secure payment </p>
             </div>
            </div>

            <div className="flex items-center gap-4">
             <IconWorld className='text-gray-400 w-10 h-10 min-w-[40px] min-h-[40px]'/>

             <div className='space-y-1 text-black'>
                <p className='font-semibold'>24/7 Support</p>
                <p className='text-sm'>We offer 24/7 customer support </p>
             </div>
            </div>


        </div>
    )
}

