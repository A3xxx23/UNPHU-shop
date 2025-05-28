import { z } from "zod";
import { JSONContent } from "@tiptap/react";

export const userRegisterSchema = z.object({
  email: z
  .string()
  .email('Invalid email address'),

  password: z
  .string()
  .min(6, 'Password must be at least 6 characters long'),

  fullname: z
  .string()
  .min(1, 'Full name is required'),

  phone: z
  .string()
  .optional(),
});

export const addressSchema = z.object({
  addressLine1: z
  .string()
  .min(1, 'Address line 1 is required')
  .max(100, 'Address line 1 must be less than 100 characters long'),

  addressLine2: z
  .string()
  .max(100, 'Address line 1 must be less than 100 characters long')
  .optional(),

  state: z
  .string()
  .min(1, 'State is required')
  .max(50, 'State must be less than 100 characters long'),

  postalCode: z
  .string()
  .max(10, 'State must be less than 100 characters long')
  .optional(),

  city: z
  .string()
  .min(1, 'City is required')
  .max(25, 'City must be less than 25 characters long'),

  country: z
  .string()
  .min(1, 'Country is required')
  .max(25, 'country must be less than 25 characters long'),

})

export type UserRegisterFormValues = z.infer<
    typeof userRegisterSchema
>;

export type AddressFormValues = z.infer<typeof addressSchema>;

const isContentEmpty = (value: JSONContent) : boolean => {
  if(!value || !Array.isArray(value.content) || value.content.length == 0) {
    return true;
  }

  return !value.content.some(
    node => 
      node.type === 'paragraph' && 
      node.content && Array.isArray(node.content) && 
      node.content.some(
        textNode => 
          textNode.type === 'text' && 
          textNode.text && 
          textNode.text.trim() !== ''
        )
  );
};

//esquema de productos

export const productSchema = z.object({
  name: z.string().min(1, 'name is required') .max(30, 'name must be less than 30 characters long'),
  brand: z.string().min(1, 'brand is required') .max(30, 'brand must be less than 30 characters long'),
  slug: 
  z.string()
  .min(1, 'slug is required') 
  .regex(/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/,'slug must be a valid slug'),
  features: z.array(
    z.object({
    value: z
    .string()
    .min(1, 'Caracteristic value is required'),
  })
),
  description: z.custom<JSONContent>(
    value => !isContentEmpty(value), 
    {message: 'Description is required'}
  ),
  variants: z.array(
    z.object({
      id:z.string().optional(),
      stock: z.number() .min(0, 'Stock must be greater than or equal to 0'),
      price: z.number() .min(1, 'Price must be greater than 0'),
      size:z.string().min(1, 'Size is required'),
      color: z
					.string()
					.regex(
						/^(#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})|(rgb|hsl)a?\(\s*([0-9]{1,3}\s*,\s*){2}[0-9]{1,3}\s*(,\s*(0|1|0?\.\d+))?\s*\))$/,
						'El color debe ser un valor válido en formato hexadecimal, RGB o HSL'
					),
				colorName: z
					.string()
					.min(1, 'color name is required'),
			})
		)
		.min(1, 'Variant is required'),
	images: z.array(z.any()).min(1, 'Images are required'),
});

export type ProductFormValues = z.infer<typeof productSchema>;
