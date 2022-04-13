import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './MyLineChart.css'

const MyLineChart = ({ data }) => {

    return (
        <div className='line-chart'>
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'revenue'}></Line>
            </LineChart>
            <h4 style={{ color: "blue" }}>Line Chart</h4>
        </div>
    );
};

export default MyLineChart;