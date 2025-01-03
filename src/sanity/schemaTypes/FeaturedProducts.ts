import { defineType, defineField } from "sanity";

const featureProducts = defineType({
  name: "featureProducts",
  type: "document",
  title: "Feature Products",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "code",
      type: "string",
      title: "Code",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "newPrice",
      type: "number",
      title: "New Price",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "oldPrice",
      type: "number",
      title: "old Price",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
         name: "inventory",
         title: "Inventory",
          type: "number",
          validation: (Rule) => Rule.required(),
        }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default featureProducts;
