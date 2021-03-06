import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Tim',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Kim',
      email: 'kim@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'US Polo Dress',
        category: 'Dresses',
        image: '/images/p1.jpg',
        price: 200,
        countInStock: 10,
        brand: 'US Polo',
        rating: 4.5,
        numReviews: 10,
        description: 'High quality product',
      },
      {
        name: 'Melanie Lyne Dress',
        category: 'Dress',
        image: '/images/p2.jpg',
        price: 180,
        countInStock: 20,
        brand: 'Melanie Lyne',
        rating: 4.0,
        numReviews: 10,
        description: 'High quality product',
      },
      {
        name: 'Suzy Skirt',
        category: 'Skirts',
        image: '/images/p3.jpg',
        price: 120,
        countInStock: 0,
        brand: 'Suzy',
        rating: 4.8,
        numReviews: 17,
        description: 'High quality product',
      },
      {
        name: 'US Polo Skirt',
        category: 'Skirts',
        image: '/images/p4.jpg',
        price: 100,
        countInStock: 10,
        brand: 'US Polo',
        rating: 4.5,
        numReviews: 14,
        description: 'High quality product',
      },
      {
        name: 'Melanie Lyne Bag',
        category: 'Handbags',
        image: '/images/p5.jpg',
        price: 450,
        countInStock: 2,
        brand: 'Melanie Lyne',
        rating: 4.5,
        numReviews: 14,
        description: 'High quality product',
      },
      {
        name: 'Laura Bag',
        category: 'Handbags',
        image: '/images/p6.jpg',
        price: 350,
        countInStock: 14,
        brand: 'Laura',
        rating: 4.5,
        numReviews: 14,
        description: 'High quality product',
      },
    ],
  };
  export default data;