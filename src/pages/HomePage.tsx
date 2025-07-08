import {Products} from '../components/Home/Products'
import { Services } from '../components/Home/Services'
import { ProductGridSkeleton } from '../components/skeleton/ProductGridSkeleton'
import { PreparedProducts } from '../helpers'
import { useHomeProducts } from '../hooks'


export const HomePage = () => {

    const { recentProducts,popularProducts, isLoading } = useHomeProducts();

    const preparednewArrivalsProducts = PreparedProducts(recentProducts);
    const preparedFeaturesProducts = PreparedProducts(popularProducts);

    return (
        <div>
            <Services/>

            {
                isLoading ? (
                    <ProductGridSkeleton
                    numberOfProducts={4}
                    />
                ) : (
                    <Products
            title='Productos Recientes' 
            products={preparednewArrivalsProducts}
            />
                )
            }

{
                isLoading ? (
                    <ProductGridSkeleton
                    numberOfProducts={4}
                    />
                ) : (
                    <Products
            title='Productos populares' 
            products={preparedFeaturesProducts}
            />
                )
            }

            
  
        </div>
    )
}
