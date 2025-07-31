import { Link } from "react-router-dom";
import { IconPlus } from '@tabler/icons-react';
import { useState } from "react";
import { variantProduct } from "../../interfaces";
import { formatPrice } from "../../helpers";
import { Tag } from "../shared/Tag";
import toast from "react-hot-toast";
import { useCartStore } from "../../store/cart.store";

interface Props {
    img: string;
    name: string;
    price: number;
    slug: string;
    colors: { name: string; color: string }[];
    variants: variantProduct[];
}

export const CardProducts = ({
    img,
    name,
    price,
    slug,
    colors,
    variants
}: Props) => {

    // Manejo seguro del estado del color activo
    const [activeColor, setActiveColor] = useState<{ name: string; color: string } | null>(
        colors.length > 0 ? colors[0] : null
    );

    // Encuentra el variant según el color activo
    const selectedVariant = variants.find(
        variant => variant.color === activeColor?.color
    );

    // Determinar el stock del producto
    const stock = selectedVariant?.stock || 0;

    // Función para agregar al carrito
    const addItem = useCartStore(state => state.addItem);

    const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (selectedVariant && selectedVariant.stock > 0) {
            addItem({
                variantId: selectedVariant.id,
                productId: slug,
                name,
                image: img,
                color: activeColor?.name || "desconocido",
                price: selectedVariant.price,
                size: selectedVariant.size,
                quantity: 1,
            });

            toast.success("Producto agregado al carrito", {
              position: "bottom-right",
            });

        } else {
            toast.error("Producto sin stock", {
              position: "bottom-right",
            });
        }
    };

    return (
      <div className="flex flex-col gap-6 relative">
        <Link
          to={`/products/${slug}`}
          className="flex relative group overflow-hidden"
        >
          <div className="flex h-[350px] w-full items-center justify-center py-2 lg:h-[250px]">
            <img
              src={img}
              alt={name}
              className="object-contain h-full w-full"
            />
          </div>

          <button
            onClick={handleAddClick}
            className="bg-black border-slate-200 text-white absolute w-full bottom-0 py-3 rounded-3xl flex items-center justify-center gap-1
                    text-sm font-medium hover:bg-stone-400 translate-y-[100%] transition-all duration-300 group-hover:translate-y-0"
          >
            <IconPlus />
            Agregar al carrito
          </button>
        </Link>

        <div className="flex flex-col gap-1 items-center">
          <p className="text-[15px] font-medium text-black">{name}</p>
          <p className="text-[15px] font-medium text-black">
            {formatPrice(price)}
          </p>

          {/* Renderizar colores solo si hay opciones disponibles */}
          {colors.length > 0 && (
            <div className="flex gap-3">
              {colors.map((color) => (
                <span
                  key={color.name}
                  className={`grid place-items-center w-5 h-5 rounded-full cursor-pointer ${
                    activeColor?.color === color.color
                      ? "border border-black"
                      : ""
                  }`}
                  onClick={() => setActiveColor(color)}
                >
                  <span
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color.color }}
                  />
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Mostrar el tag "Sold Out" si no hay stock */}
        <div className="absolute top-2 left-2">
          {stock === 0 && <Tag contentTag="Agotado" />}
        </div>
      </div>
    );
};
