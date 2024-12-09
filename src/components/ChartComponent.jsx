import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto'; // Import Chart.js library for rendering charts

// Reusable chart component that dynamically renders different chart types
const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null); // Reference to the canvas element
  const chartInstance = useRef(null); // Store the chart instance to manage lifecycle

  useEffect(() => {
    // Destroy any existing chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance with the provided type, data, and options
    chartInstance.current = new Chart(chartRef.current, {
      type,     // Type of chart (e.g., bar, line, scatter, bubble)
      data,     // Data to be visualized
      options,  // Configuration options for the chart
    });

    // Cleanup: Destroy the chart instance when the component unmounts or updates
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]); // Re-run effect whenever type, data, or options change

  // Render a canvas element where the chart will be drawn
  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;