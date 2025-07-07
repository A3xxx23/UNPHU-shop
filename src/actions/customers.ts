import { supabase } from "../supabase/client";

//Obtener usuarios los clientes

export const getCustomers = async () => {
  const { data, error } = await supabase.from("customers").select("*");

  if (error) throw new Error(error.message);
  return data;
};

// Total de usuarios
export const getTotalCustomers = async () => {
  const { count, error } = await supabase
    .from("customers")
    .select("*", { count: "exact", head: true });
  if (error) throw new Error(error.message);
  return count;
};

// Nuevos usuarios por mes
export const getCustomersByMonth = async () => {
  const { data, error } = await supabase
    .from("customers")
    .select("created_at");

  if (error) throw new Error(error.message);

  const counts: Record<string, number> = {};
  data?.forEach((c) => {
    const date = new Date(c.created_at);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    counts[key] = (counts[key] || 0) + 1;
  });

  return Object.entries(counts).map(([month, count]) => ({ month, count }));
};

// Nuevos usuarios esta semana
export const getWeeklyCustomers = async () => {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const { data, error } = await supabase
    .from("customers")
    .select("created_at");

  if (error) throw new Error(error.message);

  return data.filter((c) => new Date(c.created_at) >= sevenDaysAgo).length;
};

// Nuevos usuarios hoy
export const getTodayCustomers = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const { data, error } = await supabase
    .from("customers")
    .select("created_at");

  if (error) throw new Error(error.message);

  return data.filter((c) => new Date(c.created_at).toDateString() === today.toDateString()).length;
};

// Obtener usuarios por pais
export const getCustomersByCountry = async () => {
  const { data, error } = await supabase.from("addresses").select("country");

  if (error) throw new Error(error.message);

  const countryCount: Record<string, number> = {};

  data.forEach((c) => {
    const country = c.country || "Desconocido";
    countryCount[country] = (countryCount[country] || 0) + 1;
  });

  return Object.entries(countryCount).map(([country, count]) => ({
    country,
    count,
  }));
};
