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
                data: [0],
                fill: false,
                backgroundColor: 'white',
                borderColor: 'green',
                segment: {
                    borderColor: context => down(context, 'red'),
                }
            },
        ],
    };

    for (let i in history) {
        data.labels.push(`${history[i].date.slice(8 , 11)}  ${history[i].date.slice(5, 7)}`)
        data.datasets[0].data.push(history[i].price)
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
        }
    };

    return (
        <>
            <Line style={{ backgroundColor: 'white' }} data={data} options={options} />
        </>
    )
}

export default GraphCanvas
