import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardProducts } from "../components/products/CardProducts";
import { ContainerFilter } from "../components/products/ContainerFilter";
import { PreparedProducts } from "../helpers";
import { useFilteredProducts } from "../hooks";
import { Pagination } from "../components/shared/Pagination";
import { Loader } from "../components/shared/Loader";

export const ShopAll = () => {
    const [page, setPage] = useState(1);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const { data: products = [], isLoading, totalProducts } = useFilteredProducts({
        page, 
        brand: selectedBrands,
    });

    const preparedProducts = PreparedProducts(products);

    return (
      <>
        <motion.h1
          className="text-5xl font-semibold text-center mb-12 text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          Todos los productos
        </motion.h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 text-black font-bold">
          {/* Filtros */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <ContainerFilter
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
            />
          </motion.div>

          {/* Productos */}
          {isLoading ? (
            <Loader />
          ) : (
            <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex gap-12 flex-col">
              <AnimatePresence>
                <motion.div
                  className="grid gap-3 grid-cols-2 gap-y-10 xl:grid-cols-4"
                  key="products"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {preparedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                    >
                      <CardProducts
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        colors={product.colors}
                        img={product.images[0]}
                        slug={product.slug}
                        variants={product.variants}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Paginación */}
              <Pagination
                page={page}
                setPage={setPage}
                totalItems={totalProducts}
              />
            </div>
          )}
        </div>
      </>
    );
};
