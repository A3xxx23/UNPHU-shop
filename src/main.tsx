import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PUBLIC_KEY}`);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Elements stripe={stripePromise}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router= {router}/>
      <Toaster/>
    </QueryClientProvider>
    </Elements>
  </StrictMode>,
)
