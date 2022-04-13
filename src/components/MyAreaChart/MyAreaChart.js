import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import './MyAreaChart.css'

const MyAreaChart = ({ data }) => {
    // const { month, investment, revenue } = data;
    return (
        <div className='area-chart'>
            <AreaChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Area type="monotone" dataKey={'investment'} stroke="#82ca9d" fill="#82ca9d"></Area>
                <Area type="monotone" dataKey={'revenue'} stroke="#8884d8" fill="#8884d8"></Area>
            </AreaChart>
            <h4 style={{ color: "green" }}>Area Chart</h4>
        </div>
    );
};

export default MyAreaChart;