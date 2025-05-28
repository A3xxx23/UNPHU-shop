import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from '../pages/HomePage';
import {About} from '../pages/About'
import { ContactUs } from "../pages/ContactUs";
import { ShopAll } from '../pages/ShopAll'
import { ShopAllslug } from "../pages/ShopAllslug";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ClientLayout } from "../layouts/ClientLayout";
import { OrdersUserPage } from "../pages/OrdersUserPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { ThankyouPage } from "../pages/ThankyouPage";
import { OrderUserPage } from "../pages/OrderUserPage";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { DashboardNewProductPage, DashboardOrderPage, DashboardOrdersPage, DashboardProductSlugPage, DashboardProductsPage,    } from "../pages/Index";
import Return from "../pages/Return";
import Shipping from "../pages/Shipping";
import Faq from "../pages/Faq";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "Contact Us",
                element: <ContactUs/>,
            },
            {
                path: "Shop All",
                element: <ShopAll/>,
            },
            {
                path: 'products/:slug',
                element: <ShopAllslug/>,

            },
            {
                path: 'login',
                element: <LoginPage/>,

            },
            {
                path: 'register',
                element: <RegisterPage/>,

            },
            {
                path: "account",
                element: <ClientLayout/>,
                children: [
                    {
                        path: '',
                        element: <Navigate to={'/account/orders'}/>,

                    },
                    {
                        path: 'orders',
                        element: <OrdersUserPage/>,
                    },
                    {
                        path: 'orders/:id',
                        element: <OrderUserPage/>,

                    },
                ],

            },
            {
                path: "faq",
                element: <Faq/>,
            },
            {
                path: "shipping",
                element: <Shipping/>,
            },
            {
                path: "returns",
                element: <Return/>,
            },
        ],
    },

    {
        path: '/checkout',
        element: <CheckoutPage/>,

    },
    {
        path: '/checkout/:id/thank-you',
        element: <ThankyouPage/>,
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to='/dashboard/product' />,
            },
            {
                path: 'product',
                element: <DashboardProductsPage/>,
            },
            {
                path: 'product/new',
                element: <DashboardNewProductPage/>,
            },
            {
                path: 'product/edit/:slug',
                element: <DashboardProductSlugPage/>,
            },
            {
                path: 'order',
                element: <DashboardOrdersPage/>,
            },
            {
                path: 'order/:id',
                element: <DashboardOrderPage/>,
            }
        ],
    },
    
]);
