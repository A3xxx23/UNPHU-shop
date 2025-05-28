import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "../../actions";
import { Product } from "../../interfaces";

export const useProduct = (slug: string) => {

    const {
        data: product,
        isLoading,
        isError,
    } = useQuery <Product | null>({
        queryKey: ['product', slug],
        queryFn: () => getProductBySlug(slug),
        retry: false,
    })

    return {
        product,
        isError,
        isLoading,
    }
    
}