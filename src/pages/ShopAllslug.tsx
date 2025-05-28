import { Link, useNavigate, useParams } from "react-router";
import { Separator } from "../components/shared/Separator"
import { formatPrice } from "../helpers"
import { IconMinus, IconPlus, IconTruckDelivery, IconMessage } from '@tabler/icons-react';
import { ProductDescription } from "../components/one-product/ProductDescription";
import { GridImages } from "../components/one-product/GridImages";
import { useProduct } from "../hooks/products/useProduct";
import { useEffect, useMemo, useState } from "react";
import { variantProduct } from "../interfaces";
import { Tag } from "../components/shared/Tag";
import { Loader } from "../components/shared/Loader";
import { useCartStore } from "../store/cart.store";
import toast from "react-hot-toast";

interface Acc {
    [key: string]: {
        name: string,
        size: string[],
    }
}

export const ShopAllslug = () => {
    const { slug } = useParams<{ slug: string }>();

    const [currentSlug, setCurrentSlug] = useState(slug);
    const { product, isLoading, isError } = useProduct(currentSlug || '');

    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedVariant, setSelectedVariant] = useState<variantProduct | null>(null);


    const [count, setCount] = useState(1);

const increment = () => setCount(prev => prev + 1);
const decrement = () => setCount(prev => Math.max(1, prev - 1));

    const addItem = useCartStore(state => state.addItem);
    const navigate = useNavigate();

    // Variante por color
    const colors = useMemo(() => {
        if (!product?.variants) return {}; // Retorna un objeto vacío si no hay variantes
        return product.variants.reduce((acc: Acc, variant: variantProduct) => {
            const { color, color_name, size } = variant;
            if (!acc[color]) {
                acc[color] = {
                    name: color_name,
                    size: [],
                };
            }
            if (!acc[color].size.includes(size)) {
                acc[color].size.push(size);
            }
            return acc;
        }, {} as Acc);
    }, [product?.variants]);

    // Obtener el primer color por defecto
    const availableColors = Object.keys(colors);
    useEffect(() => {
        if (!selectedColor && availableColors.length > 0) {
            setSelectedColor(availableColors[0]);
        }
    }, [availableColors, selectedColor]);

    // Actualizar size cuando cambie de color
    useEffect(() => {
        if (selectedColor && colors[selectedColor] && !selectedSize) {
            setSelectedSize(colors[selectedColor].size[0]);
        }
    }, [selectedColor, colors, selectedSize]);

    // Obtener la variante seleccionada
    useEffect(() => {
        if (selectedColor && selectedSize) {
            const variant = product?.variants.find(variant =>
                variant.color === selectedColor &&
                variant.size === selectedSize
            );
            setSelectedVariant(variant as variantProduct);
        }
    }, [selectedColor, selectedSize, product?.variants]);

    // Obtener el stock
    const isOutOfStock = selectedVariant?.stock === 0;

    // Función para agregar al carrito
    const addToCart = () => {
        if (selectedVariant) {
            const newItem = {
                variantId: selectedVariant.id,
                productId: product?.id || '',
                name: product?.name || '',
                image: product?.images[0] || '',
                color: selectedVariant.color_name,
                size: selectedVariant.size,
                price: selectedVariant.price,
                quantity: count,
            };
            addItem(newItem);
            toast.success("Product added to cart", {
                position: "bottom-right",
            });
        }
    };

    // Función para comprar ahora
    const buyNow = () => {
        if (selectedVariant) {
            addItem({
                variantId: selectedVariant.id,
                productId: product?.id || '',
                name: product?.name || '',
                image: product?.images[0] || '',
                color: selectedVariant.color_name,
                size: selectedVariant.size,
                price: selectedVariant.price,
                quantity: count,
            });
            navigate('/checkout');
        }
    };

    // Función para manejar el cambio de slug cuando cambia en la URL

    useEffect(() => {
        setCurrentSlug(slug);

        //reiniciar cada vez que cambie el slug los colores, size y variante seleccionada
        setSelectedColor(null);
        setSelectedSize(null);
        setSelectedVariant(null);
        setCount(1);

        

        
    }, [slug]);

    if (isLoading) return <Loader />;

    if (!product || isError) 
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <p>Product not found</p>
            </div>
        );

    return (
        <>
            <div className="h-fit flex flex-col md:flex-row gap-16 mt-8">
                {/* Grid para imagenes de cada producto */}
                <GridImages images={product.images} />

                <div className="flex-1 space-y-5">
                    <h1 className="text-3xl font-bold tracking-tight text-black">
                        {product.name}
                    </h1>

                    <div className="flex gap-5 items-center">
                        <span className="tracking-wide text-lg font-semibold text-black">
                            {formatPrice(selectedVariant?.price || product.variants[0].price)}
                        </span>
                        <div className="relative">
                            {/* Cuando esté agotado */}
                            {isOutOfStock && <Tag contentTag="Sold Out" />}
                        </div>
                    </div>

                    <Separator />

                    {/* Características del producto */}
                    <ul className="space-y-2 ml-7 my-10">
                        {product.features.map(feature => (
                            <li key={feature} className="text-sm flex items-center gap-2 tracking-tight font-medium text-black">
                                <span className="w-[5px] rounded-full bg-black h-[5px]" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-3 flex-col text-black">
                        <p>
                            Color: {selectedColor && colors[selectedColor] ? colors[selectedColor].name : 'Select an color'}
                        </p>
                        <div className="flex gap-3">
                            {availableColors.map(color => (
                                <button
                                    key={color}
                                    className={`w-8 h-8 rounded-full flex justify-center items-center ${selectedColor === color ? 'border border-slate-800' : ''}`}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    <span className="w-[26px] h-[26px] rounded-full" style={{ backgroundColor: color }} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Opción de tamaño */}
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-medium text-black">Available size</p>
                        {selectedColor && (
                            <div className="flex gap-3">
                                <select className="border border-gray-300 rounded-lg px-3 py-1"
                                    value={selectedSize || ''}
                                    onChange={e => setSelectedSize(e.target.value)}
                                >
                                    {colors[selectedColor].size.map(size => (
                                        <option value={size} key={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Comprar */}
                    {isOutOfStock ? (
                        <button 
                            className="bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-[#e2e2e2] w-full text-slate-300"
                            disabled
                        >
                            Sold Out
                        </button>
                    ) : (
                        <>
                            {/* Contador */}
                            <div className="space-y-3">
                                <p className="text-sm font-medium text-black">Quantity:</p>
                                <div className="flex gap-8 px-5 py-3 border border-slate-200 w-fit rounded-full">
                                    <button onClick={decrement} disabled={count === 1}>
                                        <IconMinus size={15} className="text-black" />
                                    </button>
                                    <span className="text-slate-500 text-sm">{count}</span>
                                    <button onClick={increment}>
                                        <IconPlus size={15} className="text-black" />
                                    </button>
                                </div>
                            </div>

                            {/* Botones de acción */}
                            <div className="flex flex-col gap-3">
                                <button className="bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-[#e2e2e2] text-black"
                                    onClick={addToCart}
                                >
                                    Add to cart
                                </button>
                                <button
                                    className="bg-black hover:bg-slate-900 text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full"
                                    onClick={buyNow}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </>
                    )}

                    <div className="flex pt-2">
                        <div className="flex flex-col gap-1 flex-1 items-center">
                            <IconTruckDelivery size={35} className="text-slate-950" />
                            <p className="text-xs font-semibold text-black">Free Shipping</p>
                        </div>

                        <Link to='#' className="flex flex-col gap-1 flex-1 items-center justify-center">
                            <IconMessage size={30} className="text-slate-950" />
                            <p className="flex flex-col items-center text-xs text-black">
                                <span className="font-semibold text-slate-950">Do you need help?</span>
                                <Link to={'/Contact US'} className="cursor-pointer text-slate-900 underline">
                                Contact us here
                                </Link>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Descripción del producto */}
            <ProductDescription content={product.description} />
        </>
    );
};
