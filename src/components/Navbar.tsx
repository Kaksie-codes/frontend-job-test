'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold">
            Dashboard
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-gray-900">
            Products
          </Link>
        </div>
        <Button variant="ghost" className="relative">
          <ShoppingCart className="h-5 w-5" />          
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItems.length}
            </span>
          )}
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;