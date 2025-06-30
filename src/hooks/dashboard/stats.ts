import { useQuery } from "@tanstack/react-query";
import {
  getTotalSales,
  getTotalOrders,
  getTotalCustomers,
  getTopProducts,
  getOrdersByMonth,
  getUsersByMonth,
  getOrdersByStatus,
} from "../../actions/stats";

export const useTotalSales = () => useQuery({
  queryKey: ["total-sales"],
  queryFn: getTotalSales,
});

export const useTotalOrders = () => useQuery({
  queryKey: ["total-orders"],
  queryFn: getTotalOrders,
});

export const useTotalCustomers = () => useQuery({
  queryKey: ["total-customers"],
  queryFn: getTotalCustomers,
});

export const useTopProducts = () => useQuery({
  queryKey: ["top-products"],
  queryFn: getTopProducts,
});

export const useOrdersByMonth = () => useQuery({
  queryKey: ["orders-by-month"],
  queryFn: getOrdersByMonth,
});

export const useUsersByMonth = () => useQuery({
  queryKey: ["users-by-month"],
  queryFn: getUsersByMonth,
});

export const useOrdersByStatus = () => useQuery({
  queryKey: ["orders-by-status"],
  queryFn: getOrdersByStatus,
});
