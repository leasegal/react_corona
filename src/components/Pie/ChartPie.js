import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartPie = (values) => {
  console.log("valuesPie: ",values.keys);
  const lab = values.keys;
    console.log("lab: ", lab);

  // const lab = Object.keys(objToPie)
  // console.log("Object.values(objToPie): ",Object.values(objToPie));
  // console.log("Object.keys(objToPie): ",Object.keys(objToPie));
  // // console.log("lab: ", lab);
   const data = {
    labels:lab,
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
    return <Pie data={data} />;
    // return<></>
}

export default ChartPie;