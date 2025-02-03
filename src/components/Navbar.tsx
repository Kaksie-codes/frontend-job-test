"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X } from "lucide-react"; // Importing the X icon from lucide-react
import CartModal from "./CartModal";

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <h1>MyShop</h1>
        </Link>

        {/* Normal links for larger screens */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/dashboard"
            className={`text-xl font-bold ${
              pathname === "/dashboard"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/products"
            className={`text-xl font-bold ${
              pathname === "/products"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Products
          </Link>
        </div>

        {/* Mobile link button */}
        <button
          className="lg:hidden text-xl font-bold text-gray-600 hover:text-gray-900"
          onClick={toggleSidebar}
        >
          Menu
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
            isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeSidebar} // Close sidebar when clicking on overlay
        >
          <div
            className={`fixed left-0 top-0 w-64 bg-white p-6 h-full space-y-4 transition-transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent sidebar close when clicking inside
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button
                onClick={closeSidebar} // Close sidebar on button click
                className="text-xl text-gray-600 hover:text-gray-900"
              >
                <X /> {/* Using X icon from lucide-react */}
              </button>
            </div>

            <div className="flex flex-col space-y-4 mt-6">
              <Link
                href="/dashboard"
                className={`text-xl font-bold ${
                  pathname === "/dashboard"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={closeSidebar} // Close sidebar when clicking on link
              >
                Dashboard
              </Link>
              <Link
                href="/products"
                className={`text-xl font-bold ${
                  pathname === "/products"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={closeSidebar}
              >
                Products
              </Link>
            </div>
          </div>
        </div>

        <CartModal />
      </div>
    </nav>
  );
};

export default Navbar;
