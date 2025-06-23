import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../actions";

export const useCustomers = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['customers'],
        queryFn: getCustomers,
    });

    return {
        data,
        isLoading,
    };
};
