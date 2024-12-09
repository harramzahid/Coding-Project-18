import React from 'react';
import ChartComponent from './ChartComponent'; // Import the reusable ChartComponent

// Component for rendering a scatter chart to compare expenses vs. profits
const ScatterChart = ({ data }) => {
  // Prepare data for the Scatter Chart
  const chartData = {
    datasets: [
      {
        label: 'Expenses vs Profits', // Label for the dataset
        data: data.expenses.map((value, index) => ({
          x: value,               // X-axis value: expenses
          y: data.profits[index], // Y-axis value: corresponding profit
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Dot color with transparency
      },
    ],
  };

  // Render the reusable ChartComponent as a scatter chart
  return <ChartComponent type="scatter" data={chartData} options={{ responsive: true }} />;
};

export default ScatterChart;