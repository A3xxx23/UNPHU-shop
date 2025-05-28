import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "../../actions";

//hook de useFilteredProducts

export const useFilteredProducts = ({
    page,
    brand
}: {
    page: number;
    brand: string[];
}) => {
    
    const {data, isLoading} = useQuery({
        queryKey: ['filteredProducts', page, brand],
        queryFn: () => getFilteredProducts({page, brand}),
        retry: false,
    });
    
    return{
        data: data?.data,
        isLoading,
        totalProducts: data?.count ?? 0,
    }
};