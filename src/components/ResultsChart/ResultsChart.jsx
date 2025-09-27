import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const students = [
  { id: 1, name: "Rahim", physics: 78, chemistry: 82, math: 75 },
  { id: 2, name: "Karim", physics: 85, chemistry: 79, math: 88 },
  { id: 3, name: "Sumaiya", physics: 92, chemistry: 95, math: 90 },
  { id: 4, name: "Nayeem", physics: 67, chemistry: 70, math: 65 },
  { id: 5, name: "Mim", physics: 88, chemistry: 84, math: 91 },
  { id: 6, name: "Hasan", physics: 74, chemistry: 77, math: 72 },
  { id: 7, name: "Farzana", physics: 95, chemistry: 92, math: 96 },
  { id: 8, name: "Shihab", physics: 81, chemistry: 83, math: 80 },
  { id: 9, name: "Jannat", physics: 90, chemistry: 89, math: 93 },
  { id: 10, name: "Rafi", physics: 69, chemistry: 73, math: 71 }
];

const ResultsChart = () => {
  return (
    <div className="bg-green-400 p-4">
      <LineChart width={600} height={400} data={students}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="math" stroke="blue" />
        <Line type="monotone" dataKey="chemistry" stroke="red" />
        <Line type="monotone" dataKey="physics" stroke="orange" />
      </LineChart>
    </div>
  );
};

export default ResultsChart;
