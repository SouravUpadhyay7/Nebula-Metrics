// Mock data for the dashboard
const mockData = {
    revenueDaily: [
        { date: 'Mar 23', revenue: 15340 },
        { date: 'Mar 24', revenue: 17250 },
        { date: 'Mar 25', revenue: 16780 },
        { date: 'Mar 26', revenue: 19840 },
        { date: 'Mar 27', revenue: 21450 },
        { date: 'Mar 28', revenue: 18970 },
        { date: 'Mar 29', revenue: 18863 }
    ],
    revenueWeekly: [
        { date: 'Week 9', revenue: 89750 },
        { date: 'Week 10', revenue: 92340 },
        { date: 'Week 11', revenue: 97820 },
        { date: 'Week 12', revenue: 103780 },
        { date: 'Week 13', revenue: 128493 }
    ],
    categorySales: [
        { category: 'Electronics', sales: 42850 },
        { category: 'Clothing', sales: 35620 },
        { category: 'Furniture', sales: 28970 },
        { category: 'Accessories', sales: 21053 }
    ],
    regionSales: [
        { region: 'North', sales: 35290 },
        { region: 'South', sales: 41250 },
        { region: 'East', sales: 27680 },
        { region: 'West', sales: 24273 }
    ],
    recentSales: [
        { id: 'ORD-9384', customer: 'Alex Johnson', product: 'Smart TV 55"', date: 'Mar 30, 2025', amount: 899.99, status: 'completed' },
        { id: 'ORD-9383', customer: 'Maria Garcia', product: 'Wireless Headphones', date: 'Mar 30, 2025', amount: 159.95, status: 'completed' },
        { id: 'ORD-9382', customer: 'James Smith', product: 'Leather Sofa', date: 'Mar 29, 2025', amount: 1299.00, status: 'pending' },
        { id: 'ORD-9381', customer: 'Emma Wilson', product: 'Designer Watch', date: 'Mar 29, 2025', amount: 349.50, status: 'completed' },
        { id: 'ORD-9380', customer: 'Robert Brown', product: 'Gaming Laptop', date: 'Mar 28, 2025', amount: 1845.00, status: 'completed' },
        { id: 'ORD-9379', customer: 'Sophia Lee', product: 'Winter Coat', date: 'Mar 28, 2025', amount: 179.99, status: 'canceled' },
        { id: 'ORD-9378', customer: 'David Miller', product: 'Coffee Table', date: 'Mar 27, 2025', amount: 249.99, status: 'completed' },
        { id: 'ORD-9377', customer: 'Olivia Taylor', product: 'Gold Necklace', date: 'Mar 27, 2025', amount: 389.00, status: 'pending' }
    ]
};

// Dashboard stats
const dashboardStats = {
    totalRevenue: 128493,
    salesCount: 1842,
    newCustomers: 438,
    avgOrder: 69.76
};

// Chart colors
// Chart colors
const chartColors = {
    revenue: '#4CAF50', // Green for revenue growth
    sales: '#FF9800',   // Orange for sales
    categorySales: ['#2196F3', '#FF5722', '#FFC107', '#9C27B0'], // Colors for different categories
    regionSales: ['#3F51B5', '#009688', '#E91E63', '#795548'],   // Colors for different regions
    recentSales: {
        completed: '#4CAF50', // Green for completed sales
        pending: '#FFC107',   // Yellow for pending orders
        canceled: '#F44336'   // Red for canceled orders
    }
};

// Exporting the mock data and dashboard stats
export { mockData, dashboardStats, chartColors };
