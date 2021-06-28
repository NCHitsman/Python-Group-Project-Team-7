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
    for (let i = 0; i < history?.length; i++) {
        if (history[i].price !== lastHistory) {
            data.labels.push(history[i].date)
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
            xAxes: [
                {
                  type: "realtime",
                  realtime: {
                    onRefresh: function() {
                      data.datasets[0].data.unshift(5000);
                    },
                    delay: 1
                  }
                }
              ]
        },
        animation: {
            duration: 0
        },
        elements: {
            point: {
                radius: 1.5
            }
        },
        reponsive: true
    };

    return (
        <>
            <Line style={{ backgroundColor: 'white' }} data={data} options={options} />
        </>
    )
}

export default GraphCanvas
