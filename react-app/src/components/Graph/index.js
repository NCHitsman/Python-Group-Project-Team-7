import React from 'react'
import './Graph.css'
import { Line } from 'react-chartjs-2';

const GraphCanvas = ({ history }) => {

    const down = (context, value) => context.p0.parsed.y > context.p1.parsed.y ? value : undefined;

    const data = {
        labels: [],
        datasets: [
            {
                label: 'Price',
                data: [],
                fill: false,
                backgroundColor: 'black',
                borderColor: 'green',
                segment: {
                    borderColor: context => down(context, 'red'),
                }
            },
        ],
    };

    let lastHistory;
    for (let i = history?.length - 1; i >=0 ; i--) {
        if (history[i].price !== lastHistory) {
            data.labels.push(`${history[i].date.slice(8 , 11)}  ${history[i].date.slice(5, 7)}`)
            data.datasets[0].data.push(history[i].price)
            lastHistory = history[i].price
        }
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        animation: {
            duration: 0
        },
        elements: {
            point: {
                radius: 1.5
            }
        }
    };

    return (
        <>
            <Line style={{ backgroundColor: 'white' }} data={data} options={options} />
        </>
    )
}

export default GraphCanvas
