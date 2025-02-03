'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { addToCart, Product, removeFromCart } from '@/lib/store/cartSlice';
import { getProducts } from '@/lib/data/products';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const products = getProducts();

  const isInCart = (productId: number) => 
    cartItems.some(item => item.id === productId);

  const handleCartAction = (product: Product) => {
    if (isInCart(product.id)) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader>
            <img
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
            <Button
              className="w-full"
              variant={isInCart(product.id) ? "destructive" : "default"}
              onClick={() => handleCartAction(product)}
            >
              {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default ProductGrid