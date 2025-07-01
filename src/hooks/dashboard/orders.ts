import { supabase } from "../../supabase/client";
import { useQuery } from "@tanstack/react-query";

export const useRecentOrders = () =>
  useQuery({
    queryKey: ["recentOrders"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("id, created_at, total_amount, status, customers(full_name)")
        .order("created_at", { ascending: false })
        .limit(10);
      if (error) throw new Error(error.message);
      return data;
    },
  });
