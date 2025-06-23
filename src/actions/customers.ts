import { supabase } from "../supabase/client";

export const getCustomers = async () => {
  const { data, error } = await supabase.from("customers").select("*");

  if (error) throw new Error(error.message);
  return data;
};