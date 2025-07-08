import { IconBrandLinkedin, IconChartBar, IconPackage, IconShoppingCart, IconUser } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconPhone } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';

export const navbarLinks = [
    {
        id: 1,
        title: 'Inicio',
        href: '/',
    },
    {
        id: 2,
        title: 'Acerca de',
        href: '/about',
    },
    {
        id: 3,
        title: 'Contacto',
        href: '/Contact Us',
    },
    {
        id: 4,
        title: 'Comprar',
        href: '/Shop All',
    },
];        

export const SocialLinks = [
    {
        id: 1,
        title: 'Github',
        href: 'https://github.com/A3xxx23/',
        icon: IconBrandGithub,
    },
    {
        id: 2,
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/angel-emilio-aquino/',
        icon: IconBrandLinkedin,
    },
    {
        id: 3,
        title: 'Cellphone',
        href: 'https://wa.me/18094038309',
        icon: IconPhone,
    },
    {
        id: 4,
        title: 'Gmail',
        href: 'mailto:angelemilioaquino6@gmail.com',
        icon: IconMail,
    },
];

export const dashboardLinks = [
    { 
        id: 1,
        title: 'productos',
        href: '/dashboard/product',
        icon: <IconPackage size={25} className='text-white'/>
    },
    { 
        id: 2,
        title: 'ordenes',
        href: '/dashboard/order',
        icon: <IconShoppingCart size={25} className='text-white'/>
    },
    {
        id: 3,
        title: 'ventas',
        href: '/dashboard/sales',
        icon: <IconChartBar size={25} className='text-white'/>
    },
    {
        id: 4,
        title: 'usuarios',
        href: '/dashboard/customers',
        icon: <IconUser size={25} className='text-white'/>
    },
]