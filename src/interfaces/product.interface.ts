import { JSONContent } from "@tiptap/react";
import { Json } from "../supabase/supabase";

export interface variantProduct{
    id: string;
    stock: number;
    price: number;
    size: string;
    color_name: string;
    color: string;
}

export interface Product{
    id: string;
    name: string;
    images: string[];
    brand: string;
    features: string[];
    description: Json;
    created_at: string;
    slug: string;
    variants: variantProduct[];
}

export interface Color{
    name: string;
    color: string;
    price: number;
}

export interface PreparedProducts{
    id: string;
    name: string;
    images: string[];
    brand: string;
    features: string[];
    description: Json;
    created_at: string;
    slug: string;
    price: number;
    colors:{
        name: string;
        color: string;
    }[],

    variants: variantProduct[];
}

// esta interface es la que se le enviara a la DB

export interface ProductInput {
	name: string;
	brand: string;
	slug: string;
	features: string[];
	description: JSONContent;
	images: File[];
	variants: VariantInput[];
}

export interface VariantInput{
    id?: string;
    stock: number;
    price: number;
    size: string;
    color: string;
    colorName: string;
}

