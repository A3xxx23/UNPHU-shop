import { useQuery } from "@tanstack/react-query";
import { getSession } from "../../actions/auth";

export const useUser = () =>{
    const {data, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getSession,
        retry: false,
        refetchOnWindowFocus: true,
    });

    return {
        session: data?.session,
        isLoading,
    };

};