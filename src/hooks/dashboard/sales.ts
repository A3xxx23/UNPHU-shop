import { supabase } from "../../supabase/client";
import { useQuery } from "@tanstack/react-query";

// Total
export const useTotalSales = () =>
  useQuery({
    queryKey: ["totalSales"],
    queryFn: async () => {
      const { data, error } = await supabase.from("orders").select("total_amount");
      if (error) throw new Error(error.message);
      return data.reduce((acc, order) => acc + (order.total_amount ?? 0), 0);
    },
  });

// Promedio de las ventas

export const useAverageSales = () =>
  useQuery({
    queryKey: ["averageSales"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("total_amount");

      if (error) throw new Error(error.message);

      const total = data.reduce((acc, order) => acc + (order.total_amount || 0), 0);
      const average = total / (data.length || 1);
      return average;
    },
  });

// Canceladas
export const usePendingSales = () =>
  useQuery({
    queryKey: ["pendingSales"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("total_amount, status")
        .eq("status", "Pending");

      if (error) throw new Error(error.message);
      return data.reduce((acc, order) => acc + (order.total_amount ?? 0), 0);
    },
  });


// Pagadas
export const usePaidSales = () =>
  useQuery({
    queryKey: ["paidSales"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("total_amount, status")
        .eq("status", "Paid");

      if (error) throw new Error(error.message);
      return data.reduce((acc, order) => acc + (order.total_amount ?? 0), 0);
    },
  });

  // ventas por cliente

  export const useSalesByCustomer = () =>
  useQuery({
    queryKey: ["salesByCustomer"],
    queryFn: async () => {
      const { data: orders, error } = await supabase
        .from("orders")
        .select("customer_id, total_amount");

      if (error) throw new Error(error.message);

      const totals: Record<string, number> = {};

      orders.forEach(o => {
        totals[o.customer_id] = (totals[o.customer_id] || 0) + (o.total_amount || 0);
      });

      const { data: customers, error: customerErr } = await supabase
        .from("customers")
        .select("id, full_name");

      if (customerErr) throw new Error(customerErr.message);

      return Object.entries(totals).map(([id, amount]) => ({
        name: customers.find(c => c.id === id)?.full_name || "Desconocido",
        amount,
      }));
    }
  });

 // ventas por mes

export const useSalesByMonth = () =>
  useQuery({
    queryKey: ["salesByMonth"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("created_at, total_amount");

      if (error) throw new Error(error.message);

      const salesByMonth: Record<string, number> = {};

      data.forEach(order => {
        const date = new Date(order.created_at);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
        salesByMonth[key] = (salesByMonth[key] || 0) + (order.total_amount ?? 0);
      });

      return Object.entries(salesByMonth).map(([month, amount]) => ({
        month,
        amount,
      }));
    },
  });

// ventas por producto

export const useSalesByProduct = () =>
  useQuery({
    queryKey: ["salesByProduct"],
    queryFn: async () => {
      // 1. Obtener order_items con variant_id y quantity
      const { data: orderItems, error: errorItems } = await supabase
        .from("order_items")
        .select("variant_id, quantity");

      if (errorItems) throw new Error(errorItems.message);

      // 2. Agrupar cantidades por variant_id
      const variantSales: Record<string, number> = {};
      orderItems?.forEach(item => {
        variantSales[item.variant_id] = (variantSales[item.variant_id] || 0) + (item.quantity || 0);
      });

      const variantIds = Object.keys(variantSales);
      if (variantIds.length === 0) return [];

      // 3. Obtener product_id desde variants
      const { data: variants, error: errorVariants } = await supabase
        .from("variants")
        .select("id, product_id")
        .in("id", variantIds);

      if (errorVariants) throw new Error(errorVariants.message);

      // 4. Obtener nombres de productos
      const productIds = variants.map(v => v.product_id);
      const { data: products, error: errorProducts } = await supabase
        .from("products")
        .select("id, name")
        .in("id", productIds);

      if (errorProducts) throw new Error(errorProducts.message);

      // 5. Agrupar ventas por producto
      const productSales: Record<string, number> = {};

      variants.forEach(v => {
        const quantity = variantSales[v.id] || 0;
        const product = products.find(p => p.id === v.product_id);
        if (product) {
          productSales[product.name] = (productSales[product.name] || 0) + quantity;
        }
      });

      return Object.entries(productSales).map(([name, quantity]) => ({
        name,
        quantity,
      }));
    },
  });


