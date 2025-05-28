import { IconBrandLinkedin, IconPackage, IconShoppingCart } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconPhone } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';

export const navbarLinks = [
    {
        id: 1,
        title: 'Home',
        href: '/',
    },
    {
        id: 2,
        title: 'about',
        href: '/about',
    },
    {
        id: 3,
        title: 'Contact Us',
        href: '/Contact Us',
    },
    {
        id: 4,
        title: 'Shop All',
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
        title: 'product',
        href: '/dashboard/product',
        icon: <IconPackage size={25} className='text-white'/>
    },
    { 
        id: 2,
        title: 'orders',
        href: '/dashboard/order',
        icon: <IconShoppingCart size={25} className='text-white'/>
    },
]