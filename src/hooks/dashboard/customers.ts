import { useQuery } from "@tanstack/react-query";
import {
  getTotalCustomers,
  getCustomersByMonth,
  getTodayCustomers,
  getWeeklyCustomers,
  getCustomersByCountry,
} from "../../actions/customers";

export const useTotalCustomers = () =>
  useQuery({ queryKey: ["totalCustomers"], queryFn: getTotalCustomers });

export const useCustomersByMonth = () =>
  useQuery({ queryKey: ["customersByMonth"], queryFn: getCustomersByMonth });

export const useTodayCustomers = () =>
  useQuery({ queryKey: ["todayCustomers"], queryFn: getTodayCustomers });

export const useWeeklyCustomers = () =>
  useQuery({ queryKey: ["weeklyCustomers"], queryFn: getWeeklyCustomers });

export const useCustomersByCountry = () =>
  useQuery({ queryKey: ["customersByCountry"], queryFn: getCustomersByCountry, });
