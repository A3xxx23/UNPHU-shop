import { IconDots, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDeleteProduct, useProducts } from "../../../hooks";
import { Loader } from "../../shared/Loader";
import { formatDateLong, formatPrice } from "../../../helpers";
import { Pagination } from "../../shared/Pagination";
import { CellTableProduct } from "./CellTableProduct";

interface Variant {
    id: string;
    color_name: string;
    size: string;
    price: number;
    stock: number;
}

interface Product {
    id: string;
    name: string;
    images: string[];
    variants: Variant[];
    created_at: string;
    slug: string;
}

const TableHeaders = [
  "Imagen",
  "Nombre",
  "Variante",
  "Precio",
  "Stock",
  "Fecha de creación",
  "",
];

export const TableProduct = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: number }>({});
    const [page, setPage] = useState(1);

    const { products, isLoading, totalProducts }: { products: Product[] | undefined; isLoading: boolean; totalProducts: number } = useProducts({ page });

    const {mutate, isPending} = useDeleteProduct();

    const handleMenuToggle = (index: number) => {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    const handleVariantChange = (productId: string, variantIndex: number) => {
        setSelectedVariants({
            ...selectedVariants,
            [productId]: variantIndex,
        });
    };

    const handledDeleteProduct = (id: string) => {
        mutate(id)
        setOpenMenuIndex(null);
    };

    if (!products || isLoading || !totalProducts || isPending) return <Loader />;

    return (
      <div className="flex flex-col flex-1 border border-gray-200 rounded-lg p-5 bg-white">
        <h1 className="font-bold text-xl text-stone-950">Productos</h1>
        <p className="text-sm mt-1 mb-8 font-regular text-gray-500">
          Maneja todos tus productos en una sola página. ¡Agrega, elimina y
          actualiza tus productos con facilidad!
        </p>

        <div className="relative w-full h-full">
          <table className="text-sm w-full caption-bottom overflow-auto">
            <thead>
              <tr className="text-sm font-bold text-gray-950">
                {TableHeaders.map((header, index) => (
                  <th key={index} className="h-12 px-4 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                const selectedVariantIndex = selectedVariants[product.id] ?? 0;
                const selectedVariant =
                  product.variants[selectedVariantIndex] || {};

                return (
                  <tr key={index}>
                    <td className="p-4 align-middle sm:table-cell">
                      <img
                        src={
                          product.images[0] ||
                          "https://ui.shadcn.com/placeholder.svg"
                        }
                        alt="Imagen Product"
                        loading="lazy"
                        decoding="async"
                        className="w-16 h-16 aspect-square rounded-md object-contain"
                      />
                    </td>

                    <CellTableProduct content={product.name} />

                    <td className="p-4 font-medium tracking-tighter text-gray-600">
                      <select
                        className="border border-gray-300 rounded-md p-1 w-full"
                        onChange={(e) =>
                          handleVariantChange(
                            product.id,
                            Number(e.target.value)
                          )
                        }
                        value={selectedVariantIndex}
                      >
                        {product.variants.map((variant, variantIndex) => (
                          <option key={variant.id} value={variantIndex}>
                            {variant.color_name} - {variant.size}
                          </option>
                        ))}
                      </select>
                    </td>

                    <CellTableProduct
                      content={formatPrice(selectedVariant?.price)}
                    />
                    <CellTableProduct
                      content={(selectedVariant.stock || 0).toString()}
                    />
                    <CellTableProduct
                      content={formatDateLong(product.created_at)}
                    />

                    <td className="relative">
                      <button
                        className="text-slate-900"
                        onClick={() => handleMenuToggle(index)}
                      >
                        <IconDots />
                      </button>

                      {openMenuIndex === index && (
                        <div
                          className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-xl z-10 w-[120px]"
                          role="menu"
                        >
                          <Link
                            to={`/dashboard/product/edit/${product.slug}`}
                            className="flex items-center gap-1 w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100"
                          >
                            Editar
                            <IconExternalLink
                              size={13}
                              className="inline-block"
                            />
                          </Link>
                          <button
                            className="block w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => handledDeleteProduct(product.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Pagination page={page} setPage={setPage} totalItems={totalProducts} />
      </div>
    );
};
