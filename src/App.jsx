import React, { useState, useEffect } from 'react'; // Import React, useState for state management, and useEffect for side effects
import BarChart from '.src/components/BarChart';       // Import the BarChart component
import LineChart from '.src/components/LineChart';     // Import the LineChart component
import ScatterChart from 'src./components/ScatterChart'; // Import the ScatterChart component
import BubbleChart from '.src/components/BubbleChart'; // Import the BubbleChart component

// Main application component
const App = () => {
  const [chartData, setChartData] = useState(null); // State to hold fetched data for the charts

  // Fetch data from the JSON file when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the public directory's JSON file
        const response = await fetch('/data/financial_data.json'); 
        const data = await response.json(); // Parse the JSON response
        setChartData(data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error); // Log errors to the console
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on mount

  // Display a loading message while the data is being fetched
  if (!chartData) {
    return <div>Loading...</div>;
  }

  // Render the dashboard once data is available
  return (
    <div>
      <h1>Dynamic Chart Dashboard</h1> {/* Main heading */}
      
      {/* Render the Bar Chart */}
      <div>
        <h2>Bar Chart</h2>
        <BarChart data={chartData} />
      </div>
      
      {/* Render the Line Chart */}
      <div>
        <h2>Line Chart</h2>
        <LineChart data={chartData} />
      </div>
      
      {/* Render the Scatter Chart */}
      <div>
        <h2>Scatter Chart</h2>
        <ScatterChart data={chartData} />
      </div>
      
      {/* Render the Bubble Chart */}
      <div>
        <h2>Bubble Chart</h2>
        <BubbleChart data={chartData} />
      </div>
    </div>
  );
};

export default App; // Export the App component for rendering