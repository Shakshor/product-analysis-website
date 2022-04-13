import React, { useEffect, useState } from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Dashboard.css'

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div >
            <h2 className='chart-title'>Investment vs Revenue</h2>
            <div className='chart-container'>
                <MyLineChart data={data}></MyLineChart>
                <MyAreaChart data={data}></MyAreaChart>
            </div>
        </div>
    );
};

export default Dashboard;