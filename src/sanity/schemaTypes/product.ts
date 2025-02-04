





const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule: any) => Rule.required().error('Name is required'),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        description: 'Upload an image of the product.',
      },
      {
        name: 'price',
        type: 'string',
        title: 'Price',
        validation: (Rule: any) => Rule.required().error('Price is required'),
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: (Rule: any) =>
          Rule.max(400).warning('Keep the description under 150 characters.'),
      },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
        validation: (Rule: any) =>
          Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
      },
      {
        name: 'isFeaturedProduct',
        type: 'boolean',
        title: 'Is Featured Product',
      },
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
        validation: (Rule: any) => Rule.min(0).error('Stock level must be a positive number.'),
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: [
            { title: 'Chair', value: 'Chair' },
            { title: 'Sofa', value: 'Sofa' },
            { title: 'Electronic', value: 'electronic' },
            { title: 'Other', value: 'other' },


          ],
        },
        validation: (Rule: any) => Rule.required().error('Category is required'),
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "string" }],
        options: {
          list: [
            { title: "Featured", value: "featured" },
            {
              title: "Latest",
              value: "latest",
            },
            { title: "Trending", value: "trending" },
            { title: "Top category", value: "topCategory" },
            { title: "Product", value: "product" },
            { title: "trending section descount pro", value: "discoundTreProduct" },
            { title: "Shops", value: "shops" },
            { title: "Offer Product", value: "offerProduct" },
            { title: "Unique Features ", value: "uniqueFeatures" },
        ],
        },
      },
    ],
  };
  
  export default product


  