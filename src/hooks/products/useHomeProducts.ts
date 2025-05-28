import { useQueries } from "@tanstack/react-query";
import { getRandomProducts, getRecentProducts } from "../../actions";
///hook para el home products

//UseQueries accepts an options object with a queries key whose value is an array with query option objects identical to the useQuery hook.

export const  useHomeProducts = () => {
    const results = useQueries({
        queries: [
            {
                queryKey: ['recentProducts'],
                queryFn: getRecentProducts,
            },
            {
                queryKey: ['popularProducts'],
                queryFn: getRandomProducts,
            }
        ],
    });

    const [recentProductsResult, popularProductsResult] = results;

    //combinar los estados de las consultas

    const isLoading = recentProductsResult.isLoading || popularProductsResult.isLoading;
    const isError = recentProductsResult.error || popularProductsResult.error;

    return {
        recentProducts: recentProductsResult.data || [],
        popularProducts: popularProductsResult.data || [],
        isLoading,
        isError,
    }
};