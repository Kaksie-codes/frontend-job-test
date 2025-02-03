'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProductStats } from "@/lib/data/products";
import { dailyRevenue, dailySales, trafficData, topProducts } from "@/lib/data/analytics";
import { BarChart as BarChartIcon, Package, DollarSign, Tags, TrendingUp, ShoppingBag, Users, Award } from "lucide-react";
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { format } from 'date-fns';

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

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

const DashboardMetrics = () => {
  const stats = getProductStats();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Metrics Cards */}
      <motion.div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div variants={item} whileHover={{ scale: 1.02 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold"
              >
                {stats.totalProducts}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} whileHover={{ scale: 1.02 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold"
              >
                ${stats.totalValue.toLocaleString()}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} whileHover={{ scale: 1.02 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
              <BarChartIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold"
              >
                {stats.lowStock}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} whileHover={{ scale: 1.02 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <Tags className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold"
              >
                {stats.categories}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Charts Section */}
      <motion.div variants={container} className="grid gap-4 md:grid-cols-2">
        {/* Revenue Trend */}
        <motion.div variants={item}>
          <Card className="col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Revenue Trend</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dailyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(date) => format(new Date(date), 'MMM d')}
                    />
                    <YAxis />
                    <Tooltip
                      labelFormatter={(date) => format(new Date(date), 'MMM d, yyyy')}
                      formatter={(value) => [`$${value}`, 'Revenue']}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Daily Sales */}
        <motion.div variants={item}>
          <Card className="col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Daily Sales</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailySales}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(date) => format(new Date(date), 'MMM d')}
                    />
                    <YAxis />
                    <Tooltip
                      labelFormatter={(date) => format(new Date(date), 'MMM d, yyyy')}
                      formatter={(value) => [value, 'Sales']}
                    />
                    <Bar dataKey="sales" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Traffic Sources */}
        <motion.div variants={item}>
          <Card className="col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Traffic Sources</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={trafficData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {trafficData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {trafficData.map((item, index) => (
                  <div key={item.source} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-muted-foreground">{item.source}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Top Products */}
        <motion.div variants={item}>
          <Card className="col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Top Products</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={topProducts}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis
                      type="category"
                      dataKey="name"
                      width={150}
                      tickFormatter={(value) =>
                        value.length > 20 ? `${value.substring(0, 20)}...` : value
                      }
                    />
                    <Tooltip />
                    <Bar dataKey="sales" fill="hsl(var(--chart-3))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default DashboardMetrics