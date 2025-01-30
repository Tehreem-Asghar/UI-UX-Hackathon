import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'customerOrder',
    title: 'Customer Order',
    type: 'document',
    fields: [
        defineField({
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
        }),
        defineField({
            name: 'orderDate',
            title: 'Order Date',
            type: 'datetime',
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'product',
                            title: 'Product',
                            type: 'reference',
                            to: { type: 'product' },
                        },
                        {
                            name: 'quantity',
                            title: 'Quantity',
                            type: 'number',
                        },
                    ],
                },
            ],
        }),
    
        defineField({
            name: 'totalAmount',
            title: 'Total Amount',
            type: 'number',
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Shipped', value: 'shipped' },
                    { title: 'Delivered', value: 'delivered' },
                    { title: 'Cancelled', value: 'cancelled' },
                ],
            },
        }),
    ],
});


