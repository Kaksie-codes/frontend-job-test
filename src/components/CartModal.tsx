'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { decrementQuantity, incrementQuantity, removeFromCart } from '@/lib/store/cartSlice';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';

const CartModal = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg" aria-describedby="cart-modal-description">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({totalItems} items)</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        disabled={item.quantity >= item.stock}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-4">
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartModal