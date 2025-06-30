import { supabase } from "../supabase/client"

/////////// Overview /////////////

// 1. Ventas totales (sumatoria de total_amount en "orders")
export const getTotalSales = async () => {
  const { data, error } = await supabase
    .from("orders")
    .select("total_amount");

  if (error) throw new Error(error.message);

  const total = data?.reduce((acc, order) => acc + (order.total_amount || 0), 0);
  return total;
};

// 2. Órdenes totales
export const getTotalOrders = async () => {
  const { count, error } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(error.message);
  return count;
};

// 3. Clientes registrados
export const getTotalCustomers = async () => {
  const { count, error } = await supabase
    .from("customers")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(error.message);
  return count;
};

export const getTopProducts = async () => {
  // 1. Obtener todos los order_items
  const { data: orderItems, error: errorItems } = await supabase
    .from("order_items")
    .select("variant_id, quantity");

  if (errorItems) throw new Error(errorItems.message);

  // 2. Sumar cantidades por variant_id
  const variantQuantities: Record<string, number> = {};
  orderItems?.forEach(item => {
    variantQuantities[item.variant_id] = (variantQuantities[item.variant_id] || 0) + item.quantity;
  });

  const variantIds = Object.keys(variantQuantities);

  if (variantIds.length === 0) return [];

  // 3. Obtener información de cada variant incluyendo el producto
  const { data: variants, error: errorVariants } = await supabase
    .from("variants")
    .select("id, product_id")
    .in("id", variantIds);

  if (errorVariants) throw new Error(errorVariants.message);

  const productIds = variants?.map(v => v.product_id) || [];

  // 4. Obtener los nombres de los productos
  const { data: products, error: errorProducts } = await supabase
    .from("products")
    .select("id, name")
    .in("id", productIds);

  if (errorProducts) throw new Error(errorProducts.message);

  // 5. Armar los datos finales
  const productNameByVariant: Record<string, string> = {};

  variants?.forEach(v => {
    const product = products?.find(p => p.id === v.product_id);
    if (product) {
      productNameByVariant[v.id] = product.name;
    }
  });

  return Object.entries(variantQuantities).map(([variantId, quantity]) => ({
    name: productNameByVariant[variantId] || "Producto desconocido",
    quantity,
  }));
};

// 5. Órdenes por mes
export const getOrdersByMonth = async () => {
  const { data, error } = await supabase
    .from("orders")
    .select("created_at");

  if (error) throw new Error(error.message);

  const counts: Record<string, number> = {};

  data?.forEach(order => {
    const date = new Date(order.created_at);
    // Para ventas por día
const key = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    counts[key] = (counts[key] || 0) + 1;
  });

  return Object.entries(counts).map(([month, count]) => ({ month, count }));
};

// 6. Usuarios por mes
export const getUsersByMonth = async () => {
  const { data, error } = await supabase
    .from("customers")
    .select("created_at");

  if (error) throw new Error(error.message);

  const counts: Record<string, number> = {};

  data?.forEach(user => {
    const date = new Date(user.created_at);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    counts[key] = (counts[key] || 0) + 1;
  });

  return Object.entries(counts).map(([month, count]) => ({ month, count }));
};

// 7. Órdenes por estado
export const getOrdersByStatus = async () => {
  const { data, error } = await supabase
    .from("orders")
    .select("status");

  if (error) throw new Error(error.message);

  const counts: Record<string, number> = {};
  data?.forEach(order => {
    counts[order.status] = (counts[order.status] || 0) + 1;
  });

  return Object.entries(counts).map(([status, count]) => ({ status, count }));
};

