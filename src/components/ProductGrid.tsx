'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { addToCart, removeFromCart } from '@/lib/store/cartSlice';
import { getProducts, Product } from '@/lib/data/products';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function ProductSkeleton() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="w-full h-48 bg-gray-200 animate-pulse rounded-md" />
        <div className="h-6 bg-gray-200 animate-pulse mt-4 w-3/4 rounded" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 animate-pulse w-full rounded" />
          <div className="h-4 bg-gray-200 animate-pulse w-2/3 rounded" />
          <div className="h-6 bg-gray-200 animate-pulse w-1/4 rounded mt-4" />
          <div className="h-4 bg-gray-200 animate-pulse w-1/3 rounded" />
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="w-full h-10 bg-gray-200 animate-pulse rounded" />
      </CardFooter>
    </Card>
  );
}


const ProductGrid = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[] | null>(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart); 

  const isInCart = (productId: number) => 
    cartItems.some(item => item.id === productId);

  const handleCartAction = (product: Product) => {
    if (isInCart(product.id)) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {      
      await new Promise(resolve => setTimeout(resolve, 2000));
      const data = getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {[...Array(8)].map((_, index) => (
          <motion.div key={index} variants={item}>
            <ProductSkeleton />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {!!products && products.map((product) => (
        <motion.div  
          key={product.id}
          variants={item} 
          whileHover={{ scale: 1.02 }}
        >
          <Card className="flex flex-col">
            <CardHeader>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <CardTitle className="mt-4">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price}</p>
              <p className="text-sm text-muted-foreground">Stock: {product.stock}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Button
                  className="w-full"
                  variant={isInCart(product.id) ? "destructive" : "default"}
                  onClick={() => handleCartAction(product)}
                >
                  {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProductGrid