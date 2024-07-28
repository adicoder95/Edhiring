// import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
 
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },
  elements: {
    point: {
      radius: 1, // Adjust the size of the nodes (points)
    },
  },
};

const labels = [ '','January', 'February', 'March', 'April', 'May', 'June'];
const d = [0,2,5,9,8,11,13,15];
// const d2=labels.map(() => faker.datatype.number({ min: 0, max: 14 }))

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: '',
      data: d,
      borderColor: 'rgb(217, 217, 217)',
      backgroundColor: 'rgba(217, 217, 217, 0.9)',
    },
  ],
};

export function Chart() {
  return <Line options={options} data={data} />;
}
