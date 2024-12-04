import React from 'react';
import { Bar } from 'react-chartjs-2';

const BubbleChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'Votes',
                data: [12, 19, 3],
                backgroundColor: ['red', 'blue', 'yellow'],
            },
        ],
    };

    return <Bar data={data} />;
};

export default BubbleChart;
import React from 'react';
import BarChart from './BubbleChart';

function App() {
    return (
        <div>
            <h1>My Simple Chart</h1>
            <BarChart />
        </div>
    );
}

export default App;