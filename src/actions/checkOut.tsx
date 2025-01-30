import { client } from "@/sanity/lib/client";


const createCustomerOrder = async () => {
  try {
    const result = await client.create({
      _type: 'customerOrder',
      customerName: 'Ali Khan',
      email: 'alikhan@example.com',
      orderDate: new Date().toISOString(),  // Use current date and time
      items: [
        { _type: 'reference', _ref: 'product_1_id' },
        { _type: 'reference', _ref: 'product_2_id' },
      ],
      totalAmount: 150.75,
      status: 'pending',  // or 'shipped', 'delivered', 'cancelled'
    });

    console.log('Customer Order Created:', result);
  } catch (error) {
    console.error('Error creating customer order:', error);
  }
};

// Call the function to create the order
createCustomerOrder();














