export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    stock: number;
  };
  
  export const products: Product[] = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299.99,
        description: "High-quality wireless headphones with noise cancellation",
        category: "Electronics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 3
    },
    {
        id: 2,
        name: "Luxury Smartwatch",
        price: 499.99,
        description: "A sleek smartwatch with fitness tracking and notifications",
        category: "Watches",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 15
    },
    {
        id: 3,
        name: "Designer Leather Jacket",
        price: 299.99,
        description: "A premium leather jacket for stylish looks and comfort",
        category: "Clothing",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 20
    },
    {
        id: 4,
        name: "Ceramic Dinner Plate Set",
        price: 79.99,
        description: "A set of high-quality ceramic dinner plates for elegant dining",
        category: "Home & Kitchen",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 50
    },
    {
        id: 5,
        name: "Portable Bluetooth Speaker",
        price: 129.99,
        description: "Compact and waterproof Bluetooth speaker with great sound quality",
        category: "Electronics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 30
    },
    {
        id: 6,
        name: "Classic Sunglasses",
        price: 89.99,
        description: "Stylish sunglasses with UV protection for outdoor adventures",
        category: "Accessories",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 25
    },
    {
        id: 7,
        name: "Smart Thermostat",
        price: 199.99,
        description: "A smart thermostat for home automation and energy savings",
        category: "Home & Kitchen",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 10
    },
    {
        id: 8,
        name: "Men's Casual T-shirt",
        price: 24.99,
        description: "A comfortable and stylish casual T-shirt for everyday wear",
        category: "Clothing",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 40
    },
    // {
    //     id: 9,
    //     name: "Wireless Charging Pad",
    //     price: 49.99,
    //     description: "A sleek wireless charging pad for smartphones and accessories",
    //     category: "Electronics",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
    //     stock: 35
    // },
    {
        id: 10,
        name: "Leather Wallet",
        price: 39.99,
        description: "A premium leather wallet with multiple card slots and a sleek design",
        category: "Accessories",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 15
    },
    {
        id: 11,
        name: "Bluetooth Headphones",
        price: 79.99,
        description: "Wireless headphones with superior sound quality and noise isolation",
        category: "Electronics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 20
    },
    {
        id: 12,
        name: "Luxury Handbag",
        price: 450.00,
        description: "A designer luxury handbag with a timeless style",
        category: "Accessories",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 10
    },
    {
        id: 13,
        name: "Electric Coffee Grinder",
        price: 69.99,
        description: "Electric coffee grinder with adjustable grind settings for a fresh brew",
        category: "Home & Kitchen",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 25
    },
    {
        id: 14,
        name: "Digital Camera",
        price: 499.99,
        description: "High-resolution digital camera for photography enthusiasts",
        category: "Electronics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 8
    },
    {
        id: 15,
        name: "Luxury Perfume",
        price: 120.00,
        description: "Premium perfume with floral notes for a long-lasting fragrance",
        category: "Beauty",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 50
    },
    {
        id: 16,
        name: "Electric Toothbrush",
        price: 69.99,
        description: "Electric toothbrush with multiple modes for a deep clean",
        category: "Health & Personal Care",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 18
    },
    {
        id: 17,
        name: "Cotton Bed Sheets Set",
        price: 49.99,
        description: "Soft and breathable cotton bed sheets for a comfortable night's sleep",
        category: "Home & Kitchen",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 30
    },
    {
        id: 18,
        name: "Sports Sneakers",
        price: 89.99,
        description: "Comfortable and durable sneakers perfect for sports and outdoor activities",
        category: "Footwear",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 22
    },
    {
        id: 19,
        name: "Portable Power Bank",
        price: 39.99,
        description: "Compact power bank to charge your devices on the go",
        category: "Electronics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 50
    },
    {
        id: 20,
        name: "Yoga Mat",
        price: 29.99,
        description: "Non-slip yoga mat for comfortable and safe workouts",
        category: "Fitness",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzIccaTPTbAWBvPQyLgj8p2YG-QtZ56JPtA&s",
        stock: 40
    },
    {
        id: 21,
        name: "Smart Watch Pro",
        price: 199.99,
        description: "Advanced smartwatch with health tracking features",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        stock: 30
    },
    {
        id: 22,
        name: "Gaming Laptop",
        price: 1299.99,
        description: "Powerful gaming laptop with high-end GPU",
        category: "Computers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwFYh8hHMAEGVOt8XCld6G1eTS9CozIrGCA&s",
        stock: 15
    },
    {
        id: 23,
        name: "Mechanical Keyboard",
        price: 99.99,
        description: "RGB backlit mechanical keyboard for gamers",
        category: "Accessories",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-Ig1NqecDNf6kxGdL5Jokqylb3rxu2oKzw&s",
        stock: 40
    },
    {
        id: 24,
        name: "Ergonomic Office Chair",
        price: 249.99,
        description: "Comfortable ergonomic chair with lumbar support",
        category: "Furniture",
        image: "data:image/jpeg;base64,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",
        stock: 25
    },
    {
        id: 25,
        name: "Wireless Mouse",
        price: 49.99,
        description: "Smooth and precise wireless mouse",
        category: "Accessories",
        image: "data:image/jpeg;base64,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",
        stock: 60
    },
    {
        id: 26,
        name: "4K UHD Monitor",
        price: 499.99,
        description: "Ultra HD monitor with stunning visuals",
        category: "Computers",
        image: "https://techdirect.ng/cdn/shop/files/tech-direct-ng-monitors-samsung-uj590-32-4k-uhd-monitor-39893293629659.png?v=1693463239",
        stock: 20
    },
    {
        id: 27,
        name: "Bluetooth Speaker",
        price: 79.99,
        description: "Portable speaker with deep bass and clear sound",
        category: "Electronics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZaGcgmn5MiaCreJkQdWENDIb9bLRQ4Uw6Q&s",
        stock: 35
    },
    {
        id: 28,
        name: "Smartphone X",
        price: 899.99,
        description: "Latest smartphone with advanced camera",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        stock: 45
    },
    {
        id: 29,
        name: "Drone 4K",
        price: 599.99,
        description: "4K camera drone with GPS stabilization",
        category: "Electronics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9UDxYujc9Wr41Z8sJGJscWpUJeolFz4VfA&s",
        stock: 10
    },
    { 
        id: 30, 
        name: "Wireless Charging Pad", 
        price: 29.99, 
        description: "Qi-certified fast wireless charging pad", 
        category: "Accessories", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjRHpL4sEGBfrNjaUtifLr6i14Rwb5jfdiw&s", 
        stock: 60 
    },
    { 
        id: 31, 
        name: "Portable Power Bank", 
        price: 39.99, 
        description: "10,000mAh power bank with fast charging", 
        category: "Accessories", 
        image: "data:image/jpeg;base64,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", 
        stock: 50 
    },
    { 
        id: 32, 
        name: "Noise Cancelling Earbuds", 
        price: 129.99, 
        description: "Wireless earbuds with active noise cancellation", category: "Electronics", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6pxUq8YE3RSvAAMK-2apwMXqS-XsdiJJ-g&s", 
        stock: 30 },
    { 
        id: 33, 
        name: "Electric Kettle", 
        price: 49.99, 
        description: "Stainless steel electric kettle with temperature control", 
        category: "Kitchen Appliances", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozySxBDbR3_OUZNjwmA4LE-uH4H19Zrt4FA&s", 
        stock: 30 
    },
    { 
        id: 34, 
        name: "Robot Vacuum Cleaner", 
        price: 299.99, 
        description: "Automatic vacuum cleaner with smart navigation", 
        category: "Home Appliances", 
        image: "data:image/jpeg;base64,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", 
        stock: 18 
    },
    {
        id: 35,
        name: "Air Purifier",
        price: 199.99,
        description: "HEPA air purifier with real-time air quality monitoring",
        category: "Home Appliances",
        image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/7699283/1.jpg?9410",
        stock: 16
    }
];

  export const getProducts = (): Product[] => products;
  
  export const getProductStats = () => {
    const totalProducts = products.length; // Count total number of products
    const totalValue = products.reduce((acc, product) => acc + (product.price * product.stock), 0); // Calculate total stock value
    const lowStock = products.filter(product => product.stock < 10).length; // Count products with low stock
    const categories = new Set(products.map(product => product.category)).size; // Count unique categories
  
    return {
      totalProducts,
      totalValue,
      lowStock,
      categories,
    };
  };
  