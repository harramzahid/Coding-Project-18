import React from 'react';
import ChartComponent from './ChartComponent'; // Import the reusable ChartComponent

// Component for rendering a line chart to display monthly profits
const LineChart = ({ data }) => {
  // Prepare data for the Line Chart
  const chartData = {
    labels: data.months, // X-axis labels (e.g., months)
    datasets: [
      {
        label: 'Monthly Profits', // Label for the dataset
        data: data.profits,       // Y-axis data points (profit values)
        borderColor: 'rgba(153, 102, 255, 0.8)', // Line color
        fill: false,              // No background fill under the line
      },
    ],
  };

  // Render the reusable ChartComponent as a line chart
  return <ChartComponent type="line" data={chartData} options={{ responsive: true }} />;
};

export default LineChart; 