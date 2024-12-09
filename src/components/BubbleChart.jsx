import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Sales, Expenses, and Profits',
        data: data.expenses.map((value, index) => ({
          x: value,
          y: data.profits[index],
          r: data.sales[index] / 1000,
        })),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  return <ChartComponent type="bubble" data={chartData} options={{ responsive: true }} />;
};

export default BubbleChart;
