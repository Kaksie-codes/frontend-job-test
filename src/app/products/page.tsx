"use client"

import ProductGrid from "@/components/ProductGrid";


const  ProductsPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Products</h1>
      <ProductGrid />
    </div>
  );
}

export default ProductsPage;