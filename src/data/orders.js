const orders = [
    {
      orderID: 1,
      user: 'John Doe',
      products: [
        {
          name: 'Pet Food',
          brand: 'Healthy Paws',
          quantity: 2,
          size: 'Medium',
          color: 'N/A',
          unitPrice: 15.99
        },
        {
          name: 'Pet Toy',
          brand: 'Playful Pets',
          quantity: 1,
          size: 'Small',
          color: 'Blue',
          unitPrice: 9.99
        }
      ],
      date: '2023-01-25',
      totalPrice: 41.97,
      status: 'Shipped'
    },
    {
      orderID: 2,
      user: 'Alice Smith',
      products: [
        {
          name: 'Pet Shampoo',
          brand: 'FreshCoat',
          quantity: 1,
          size: 'Large',
          color: 'N/A',
          unitPrice: 12.49
        },
        {
          name: 'Pet Bed',
          brand: 'Dreamy Pets',
          quantity: 1,
          size: 'Medium',
          color: 'Pink',
          unitPrice: 24.99
        }
      ],
      date: '2023-01-26',
      totalPrice: 37.48,
      status: 'Processing'
    },
    {
      orderID: 6,
      user: 'Grace Parker',
      products: [
        {
          name: 'Pet Collar',
          brand: 'Stylish Pets',
          quantity: 3,
          size: 'Small',
          color: 'Red',
          unitPrice: 8.99
        },
        {
          name: 'Pet Leash',
          brand: 'Active Paws',
          quantity: 2,
          size: 'Medium',
          color: 'Green',
          unitPrice: 14.99
        }
      ],
      date: '2023-02-10',
      totalPrice: 63.93,
      status: 'Delivered'
    }
  ];
  
export default orders; 