


import { defineField, defineType } from "sanity";

export default defineType({
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    defineField({
      name: "customer",
      type: "reference",
      title: "Customer",
      to: [{ type: "customer" }], // Reference to the Customer schema
    }),
    defineField({
      name: "items",
      type: "array",
      title: "Items",
      of: [
        {
          type: "object",
          name: "item",
          fields: [
            { name: "id", type: "string", title: "Item ID" },
            { name: "product_name", type: "string", title: "Product Name" },
            { name: "product_description", type: "text", title: "Product Description" },
            { name: "product_price", type: "number", title: "Product Price" },
            { name: "quantity", type: "number", title: "Quantity" },
          ],
        },
      ],
    }),
    defineField({
      name: "order_date",
      type: "datetime",
      title: "Order Date",
    }),
  ],
});



