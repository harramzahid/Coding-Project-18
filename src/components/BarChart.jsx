import React from 'react';
import ChartComponent from './ChartComponent'; // Import the reusable ChartComponent

// Component for rendering a bar chart for monthly sales
const BarChart = ({ data }) => {
  // Prepare data for the Bar Chart
  const chartData = {
    labels: data.months, // X-axis labels (e.g., months)
    datasets: [
      {
        label: 'Monthly Sales', // Label for the dataset
        data: data.sales,       // Y-axis data points (sales values)
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color with transparency
      },
    ],
  };

  // Render the reusable ChartComponent as a bar chart
  return <ChartComponent type="bar" data={chartData} options={{ responsive: true }} />;
};

export default BarChart; // Export the BarChart component for use in other files