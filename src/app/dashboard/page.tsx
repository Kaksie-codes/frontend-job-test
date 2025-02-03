"use client"
import DashboardMetrics from '@/components/DashboardMetrics'
import ProductTable from '@/components/ProductTable'
import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Page = () => {
    const [activeTab, setActiveTab] = useState("stats");

    return (
        <div className="p-4">
            <Tabs defaultValue="stats" value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="stats">Stats</TabsTrigger>
                    <TabsTrigger value="products">Product Listings</TabsTrigger>
                </TabsList>

                <TabsContent value="stats">
                    <DashboardMetrics />
                </TabsContent>

                <TabsContent value="products">
                    <ProductTable />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Page;
