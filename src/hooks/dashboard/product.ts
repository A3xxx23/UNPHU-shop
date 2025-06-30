import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/client";

// 1. Total de productos
export const useProductCount = () =>
  useQuery({
    queryKey: ["productCount"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true });
      if (error) throw new Error(error.message);
      return count;
    },
  });

// 2. Total de variantes
export const useVariantCount = () =>
  useQuery({
    queryKey: ["variantCount"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("variants")
        .select("*", { count: "exact", head: true });
      if (error) throw new Error(error.message);
      return count;
    },
  });

// 3. Cantidad de marcas únicas
export const useBrandCount = () =>
  useQuery({
    queryKey: ["brandCount"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select("brand");
      if (error) throw new Error(error.message);
      return new Set(data.map((b) => b.brand)).size;
    },
  });

// 4. Stock total (sumatoria de cantidades en variants)
export const useTotalStock = () =>
  useQuery({
    queryKey: ["totalStock"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("variants")
        .select("stock");
      if (error) throw new Error(error.message);
      return data.reduce((acc, v) => acc + (v.stock || 0), 0);
    },
  });

// 5. Últimos productos agregados
export const useRecentProducts = () =>
  useQuery({
    queryKey: ["recentProducts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, brand, created_at")
        .order("created_at", { ascending: false })
        .limit(10);
      if (error) throw new Error(error.message);
      return data;
    },
  });

// Stock por marcas 

export const useStockByBrand = () =>
  useQuery({
    queryKey: ["stockByBrand"],
    queryFn: async () => {
      const { data: variants, error: errorVariants } = await supabase
        .from("variants")
        .select("stock, product_id"); 

      if (errorVariants) throw new Error(errorVariants.message);

      const { data: products, error: errorProducts } = await supabase
        .from("products")
        .select("id, brand");

      if (errorProducts) throw new Error(errorProducts.message);

      const stockByBrand: Record<string, number> = {};

      variants.forEach(v => {
        const product = products.find(p => p.id === v.product_id);
        if (product) {
          stockByBrand[product.brand] =
            (stockByBrand[product.brand] || 0) + (v.stock || 0);
        }
      });

      return Object.entries(stockByBrand).map(([brand, stock]) => ({
        brand,
        stock,
      }));
    },
  });
