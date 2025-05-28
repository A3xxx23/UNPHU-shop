// src/data/allClothes.js
export const newArrivalsProducts = [
    {
        brand: 'Chrome Hearts',
        colors: [
            { color: '#000000', color_name: 'Black' },
            { color: '#808080', color_name: 'Gray' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Chrome Hearts hoodie with signature gothic design.',
                        },
                    ],
                },
            ],
        },
        features: ['Premium cotton', 'Unique design', 'Comfortable fit'],
        id: 'a1b2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Chrome Hearts Hoodie',
        price: 199.99,
        slug: 'chrome-hearts-hoodie',
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 'p1q2r3s4-t5u6-v7w8-x9y0-z1a2b3c4d5e6',
                price: 199.99,
                stock: 20,
                size: 'M',
            },
            {
                color: '#808080',
                color_name: 'Gray',
                id: 'f7g8h9i0-j1k2-l3m4-n5o6-p7q8r9s0t1u2',
                price: 199.99,
                stock: 15,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Denim Tears',
        colors: [
            { color: '#0000FF', color_name: 'Blue' },
            { color: '#FF0000', color_name: 'Red' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Denim Tears jeans with bold and artistic patterns.',
                        },
                    ],
                },
            ],
        },
        features: ['Artistic design', 'Durable denim', 'Comfortable fit'],
        id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Denim Tears Jeans',
        price: 149.99,
        slug: 'denim-tears-jeans',
        variants: [
            {
                color: '#0000FF',
                color_name: 'Blue',
                id: 'r8s9t0u1-v2w3-x4y5-z6a7-b8c9d0e1f2g3',
                price: 149.99,
                stock: 25,
                size: '32',
            },
            {
                color: '#FF0000',
                color_name: 'Red',
                id: 'h4i5j6k7-l8m9-n0o1-p2q3-r4s5t6u7v8w9',
                price: 149.99,
                stock: 10,
                size: '34',
            },
        ],
    },
    {
        brand: 'Erick Emanuel',
        colors: [
            { color: '#FFC0CB', color_name: 'Pink' },
            { color: '#008000', color_name: 'Green' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Erick Emanuel shorts, perfect for summer and casual wear.',
                        },
                    ],
                },
            ],
        },
        features: ['Lightweight fabric', 'Bold colors', 'Relaxed fit'],
        id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Erick Emanuel Shorts',
        price: 89.99,
        slug: 'erick-emanuel-shorts',
        variants: [
            {
                color: '#FFC0CB',
                color_name: 'Pink',
                id: 's9t0u1v2-w3x4-y5z6-a7b8-c9d0e1f2g3h4',
                price: 89.99,
                stock: 30,
                size: 'M',
            },
            {
                color: '#008000',
                color_name: 'Green',
                id: 'i5j6k7l8-m9n0-o1p2-q3r4-s5t6u7v8w9x0',
                price: 89.99,
                stock: 20,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Essentials',
        colors: [
            { color: '#808080', color_name: 'gray' },
            { color: '#000000', color_name: 'Black' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Essentials sweatshirt, a staple for everyday comfort.',
                        },
                    ],
                },
            ],
        },
        features: ['Soft fabric', 'Minimalist design', 'Relaxed fit'],
        id: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Essentials Sweatshirt',
        price: 99.99,
        slug: 'essentials-sweatshirt',
        variants: [
            {
                color: '#808080',
                color_name: 'gray',
                id: 't0u1v2w3-x4y5-z6a7-b8c9-d0e1f2g3h4i5',
                price: 99.99,
                stock: 40,
                size: 'M',
            },
            {
                color: '#000000',
                color_name: 'Black',
                id: 'j6k7l8m9-n0o1-p2q3-r4s5-t6u7v8w9x0y1',
                price: 99.99,
                stock: 35,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Gallery Dept',
        colors: [
            { color: '#FF5733', color_name: 'Orange' },
            { color: '#808080', color_name: 'Gray' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Gallery Dept t-shirt with artistic splatter design.',
                        },
                    ],
                },
            ],
        },
        features: ['Unique print', 'Soft cotton', 'Relaxed fit'],
        id: 'e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Gallery Dept T-Shirt',
        price: 129.99,
        slug: 'gallery-dept-tshirt',
        variants: [
            {
                color: '#FF5733',
                color_name: 'Orange',
                id: 'u1v2w3x4-y5z6-a7b8-c9d0-e1f2g3h4i5j6',
                price: 129.99,
                stock: 25,
                size: 'M',
            },
            {
                color: '#808080',
                color_name: 'Gray',
                id: 'k7l8m9n0-o1p2-q3r4-s5t6-u7v8w9x0y1z2',
                price: 129.99,
                stock: 20,
                size: 'L',
            },
        ],
    },
    {
        brand: 'New Balance',
        colors: [
            { color: '#000000', color_name: 'Black' },
            { color: '#808080', color_name: 'gray' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'New Balance sneakers, perfect for running and casual wear.',
                        },
                    ],
                },
            ],
        },
        features: ['Comfortable sole', 'Durable material', 'Stylish design'],
        id: 'f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'New Balance Sneakers',
        price: 119.99,
        slug: 'new-balance-sneakers',
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 'v2w3x4y5-z6a7-b8c9-d0e1-f2g3h4i5j6k7',
                price: 119.99,
                stock: 30,
                size: '10',
            },
            {
                color: '#808080',
                color_name: 'gray',
                id: 'l8m9n0o1-p2q3-r4s5-t6u7-v8w9x0y1z2a3',
                price: 119.99,
                stock: 25,
                size: '11',
            },
        ],
    },
    {
        brand: 'RHUDE',
        colors: [
            { color: '#FF0000', color_name: 'Red' },
            { color: '#000000', color_name: 'Black' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'RHUDE jacket with bold and modern design.',
                        },
                    ],
                },
            ],
        },
        features: ['Premium material', 'Stylish fit', 'Durable'],
        id: 'g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'RHUDE Jacket',
        price: 249.99,
        slug: 'rhude-jacket',
        variants: [
            {
                color: '#FF0000',
                color_name: 'Red',
                id: 'w3x4y5z6-a7b8-c9d0-e1f2-g3h4i5j6k7l8',
                price: 249.99,
                stock: 15,
                size: 'M',
            },
            {
                color: '#000000',
                color_name: 'Black',
                id: 'm9n0o1p2-q3r4-s5t6-u7v8-w9x0y1z2a3b4',
                price: 249.99,
                stock: 10,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Adidas',
        colors: [
            { color: '#808080', color_name: 'gray' },
            { color: '#000000', color_name: 'Black' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Adidas track pants, perfect for sports and casual wear.',
                        },
                    ],
                },
            ],
        },
        features: ['Breathable fabric', 'Elastic waistband', 'Classic design'],
        id: 'h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Adidas Track Pants',
        price: 79.99,
        slug: 'adidas-track-pants',
        variants: [
            {
                color: '#808080',
                color_name: 'gray',
                id: 'x4y5z6a7-b8c9-d0e1-f2g3-h4i5j6k7l8m9',
                price: 79.99,
                stock: 20,
                size: 'M',
            },
            {
                color: '#000000',
                color_name: 'Black',
                id: 'n0o1p2q3-r4s5-t6u7-v8w9-x0y1z2a3b4c5',
                price: 79.99,
                stock: 15,
                size: 'L',
            },
        ],
    },
];

////Feautes products

export const FeaturesProducts = [
    {
        brand: 'Chrome Hearts',
        colors: [
            { color: '#000000', color_name: 'Black' },
            { color: '#808080', color_name: 'Gray' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Chrome Hearts hoodie with signature gothic design.',
                        },
                    ],
                },
            ],
        },
        features: ['Premium cotton', 'Unique design', 'Comfortable fit'],
        id: 'a1b2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
        img: ['https://hypmiami.com/cdn/shop/files/3d7a3e56219c64e6d4dfb99efa5f3b79e95b7796bf714699c37f6ea558939b2c_IybeslUqH.jpg?v=1743262021&width=300'],
        name: 'Chrome Hearts Jogger',
        price: 199.99,
        slug: 'chrome-hearts-Jogger',
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 'p1q2r3s4-t5u6-v7w8-x9y0-z1a2b3c4d5e6',
                price: 199.99,
                stock: 20,
                size: 'M',
            },
            {
                color: '#808080',
                color_name: 'Gray',
                id: 'f7g8h9i0-j1k2-l3m4-n5o6-p7q8r9s0t1u2',
                price: 199.99,
                stock: 15,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Denim Tears',
        colors: [
            { color: '#0000FF', color_name: 'Blue' },
            { color: '#FF0000', color_name: 'Red' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Denim Tears jeans with bold and artistic patterns.',
                        },
                    ],
                },
            ],
        },
        features: ['Artistic design', 'Durable denim', 'Comfortable fit'],
        id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Denim Tears Jeans',
        price: 149.99,
        slug: 'denim-tears-jeans',
        variants: [
            {
                color: '#0000FF',
                color_name: 'Blue',
                id: 'r8s9t0u1-v2w3-x4y5-z6a7-b8c9d0e1f2g3',
                price: 149.99,
                stock: 25,
                size: '32',
            },
            {
                color: '#FF0000',
                color_name: 'Red',
                id: 'h4i5j6k7-l8m9-n0o1-p2q3-r4s5t6u7v8w9',
                price: 149.99,
                stock: 10,
                size: '34',
            },
        ],
    },
    {
        brand: 'Erick Emanuel',
        colors: [
            { color: '#FFC0CB', color_name: 'Pink' },
            { color: '#008000', color_name: 'Green' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Erick Emanuel shorts, perfect for summer and casual wear.',
                        },
                    ],
                },
            ],
        },
        features: ['Lightweight fabric', 'Bold colors', 'Relaxed fit'],
        id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Erick Emanuel Shorts',
        price: 89.99,
        slug: 'erick-emanuel-shorts',
        variants: [
            {
                color: '#FFC0CB',
                color_name: 'Pink',
                id: 's9t0u1v2-w3x4-y5z6-a7b8-c9d0e1f2g3h4',
                price: 89.99,
                stock: 30,
                size: 'M',
            },
            {
                color: '#008000',
                color_name: 'Green',
                id: 'i5j6k7l8-m9n0-o1p2-q3r4-s5t6u7v8w9x0',
                price: 89.99,
                stock: 20,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Essentials',
        colors: [
            { color: '#808080', color_name: 'gray' },
            { color: '#000000', color_name: 'Black' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Essentials sweatshirt, a staple for everyday comfort.',
                        },
                    ],
                },
            ],
        },
        features: ['Soft fabric', 'Minimalist design', 'Relaxed fit'],
        id: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
        img: ['https://hypmiami.com/cdn/shop/files/Fear-of-God-Essentials-Hoodie-Off-Black.jpg?v=1741213025&width=1000'],
        name: 'Essentials Sweatshirt',
        price: 99.99,
        slug: 'essentials-sweatshirt',
        variants: [
            {
                color: '#808080',
                color_name: 'gray',
                id: 't0u1v2w3-x4y5-z6a7-b8c9-d0e1f2g3h4i5',
                price: 99.99,
                stock: 40,
                size: 'M',
            },
            {
                color: '#000000',
                color_name: 'Black',
                id: 'j6k7l8m9-n0o1-p2q3-r4s5-t6u7v8w9x0y1',
                price: 99.99,
                stock: 35,
                size: 'L',
            },
        ],
    },
]

export const allProducts = [
    {
        brand: 'Chrome Hearts',
        colors: [
            { color: '#000000', color_name: 'Black' },
            { color: '#808080', color_name: 'Gray' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Chrome Hearts hoodie with signature gothic design.',
                        },
                    ],
                },
            ],
        },
        features: ['Premium cotton', 'Unique design', 'Comfortable fit'],
        id: 'a1b2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Chrome Hearts Hoodie',
        price: 199.99,
        slug: 'chrome-hearts-hoodie',
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 'p1q2r3s4-t5u6-v7w8-x9y0-z1a2b3c4d5e6',
                price: 199.99,
                stock: 20,
                size: 'M',
            },
            {
                color: '#808080',
                color_name: 'Gray',
                id: 'f7g8h9i0-j1k2-l3m4-n5o6-p7q8r9s0t1u2',
                price: 199.99,
                stock: 15,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Denim Tears',
        colors: [
            { color: '#0000FF', color_name: 'Blue' },
            { color: '#FF0000', color_name: 'Red' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Denim Tears jeans with bold and artistic patterns.',
                        },
                    ],
                },
            ],
        },
        features: ['Artistic design', 'Durable denim', 'Comfortable fit'],
        id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Denim Tears Jeans',
        price: 149.99,
        slug: 'denim-tears-jeans',
        variants: [
            {
                color: '#0000FF',
                color_name: 'Blue',
                id: 'r8s9t0u1-v2w3-x4y5-z6a7-b8c9d0e1f2g3',
                price: 149.99,
                stock: 25,
                size: '32',
            },
            {
                color: '#FF0000',
                color_name: 'Red',
                id: 'h4i5j6k7-l8m9-n0o1-p2q3-r4s5t6u7v8w9',
                price: 149.99,
                stock: 10,
                size: '34',
            },
        ],
    },
    {
        brand: 'Erick Emanuel',
        colors: [
            { color: '#FFC0CB', color_name: 'Pink' },
            { color: '#008000', color_name: 'Green' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Erick Emanuel shorts, perfect for summer and casual wear.',
                        },
                    ],
                },
            ],
        },
        features: ['Lightweight fabric', 'Bold colors', 'Relaxed fit'],
        id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Erick Emanuel Shorts',
        price: 89.99,
        slug: 'erick-emanuel-shorts',
        variants: [
            {
                color: '#FFC0CB',
                color_name: 'Pink',
                id: 's9t0u1v2-w3x4-y5z6-a7b8-c9d0e1f2g3h4',
                price: 89.99,
                stock: 30,
                size: 'M',
            },
            {
                color: '#008000',
                color_name: 'Green',
                id: 'i5j6k7l8-m9n0-o1p2-q3r4-s5t6u7v8w9x0',
                price: 89.99,
                stock: 20,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Essentials',
        colors: [
            { color: '#808080', color_name: 'gray' },
            { color: '#000000', color_name: 'Black' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Essentials sweatshirt, a staple for everyday comfort.',
                        },
                    ],
                },
            ],
        },
        features: ['Soft fabric', 'Minimalist design', 'Relaxed fit'],
        id: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Essentials Sweatshirt',
        price: 99.99,
        slug: 'essentials-sweatshirt',
        variants: [
            {
                color: '#808080',
                color_name: 'gray',
                id: 't0u1v2w3-x4y5-z6a7-b8c9-d0e1f2g3h4i5',
                price: 99.99,
                stock: 40,
                size: 'M',
            },
            {
                color: '#000000',
                color_name: 'Black',
                id: 'j6k7l8m9-n0o1-p2q3-r4s5-t6u7v8w9x0y1',
                price: 99.99,
                stock: 35,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Gallery Dept',
        colors: [
            { color: '#FF5733', color_name: 'Orange' },
            { color: '#808080', color_name: 'Gray' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Gallery Dept t-shirt with artistic splatter design.',
                        },
                    ],
                },
            ],
        },
        features: ['Unique print', 'Soft cotton', 'Relaxed fit'],
        id: 'e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Gallery Dept T-Shirt',
        price: 129.99,
        slug: 'gallery-dept-tshirt',
        variants: [
            {
                color: '#FF5733',
                color_name: 'Orange',
                id: 'u1v2w3x4-y5z6-a7b8-c9d0-e1f2g3h4i5j6',
                price: 129.99,
                stock: 25,
                size: 'M',
            },
            {
                color: '#808080',
                color_name: 'Gray',
                id: 'k7l8m9n0-o1p2-q3r4-s5t6-u7v8w9x0y1z2',
                price: 129.99,
                stock: 20,
                size: 'L',
            },
        ],
    },
    {
        brand: 'New Balance',
        colors: [
            { color: '#000000', color_name: 'Black' },
            { color: '#808080', color_name: 'gray' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'New Balance sneakers, perfect for running and casual wear.',
                        },
                    ],
                },
            ],
        },
        features: ['Comfortable sole', 'Durable material', 'Stylish design'],
        id: 'f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'New Balance Sneakers',
        price: 119.99,
        slug: 'new-balance-sneakers',
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 'v2w3x4y5-z6a7-b8c9-d0e1-f2g3h4i5j6k7',
                price: 119.99,
                stock: 30,
                size: '10',
            },
            {
                color: '#808080',
                color_name: 'gray',
                id: 'l8m9n0o1-p2q3-r4s5-t6u7-v8w9x0y1z2a3',
                price: 119.99,
                stock: 25,
                size: '11',
            },
        ],
    },
    {
        brand: 'RHUDE',
        colors: [
            { color: '#FF0000', color_name: 'Red' },
            { color: '#000000', color_name: 'Black' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'RHUDE jacket with bold and modern design.',
                        },
                    ],
                },
            ],
        },
        features: ['Premium material', 'Stylish fit', 'Durable'],
        id: 'g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'RHUDE Jacket',
        price: 249.99,
        slug: 'rhude-jacket',
        variants: [
            {
                color: '#FF0000',
                color_name: 'Red',
                id: 'w3x4y5z6-a7b8-c9d0-e1f2-g3h4i5j6k7l8',
                price: 249.99,
                stock: 15,
                size: 'M',
            },
            {
                color: '#000000',
                color_name: 'Black',
                id: 'm9n0o1p2-q3r4-s5t6-u7v8-w9x0y1z2a3b4',
                price: 249.99,
                stock: 10,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Adidas',
        colors: [
            { color: '#808080', color_name: 'gray' },
            { color: '#000000', color_name: 'Black' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Adidas track pants, perfect for sports and casual wear.',
                        },
                    ],
                },
            ],
        },
        features: ['Breathable fabric', 'Elastic waistband', 'Classic design'],
        id: 'h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Adidas Track Pants',
        price: 79.99,
        slug: 'adidas-track-pants',
        variants: [
            {
                color: '#808080',
                color_name: 'gray',
                id: 'x4y5z6a7-b8c9-d0e1-f2g3-h4i5j6k7l8m9',
                price: 79.99,
                stock: 20,
                size: 'M',
            },
            {
                color: '#000000',
                color_name: 'Black',
                id: 'n0o1p2q3-r4s5-t6u7-v8w9-x0y1z2a3b4c5',
                price: 79.99,
                stock: 15,
                size: 'L',
            },
        ],
    },

]