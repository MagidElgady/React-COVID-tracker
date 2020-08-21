import React, { useState, useEffect } from 'react';
// Gets COVID-19 history data from the very beginning
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
    // Gets daily data and sets daily data with useState
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    // Plots line graph for each country for all time
    const lineChart = (
        // If length is 0, we get falsey 
        // and chart won't be loaded
        dailyData.length ? (
            <Line
                data={{
                    // Loops over all data
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }],
                }}
            />
        ) : null
    );

    console.log(confirmed, recovered, deaths);

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                // Sets colour of each label
                                'rgb(0, 0, 255, 0.5)',
                                'rgb(0, 255, 0, 0.5)',
                                'rgb(255, 0, 0, 0.5)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]

                        }]

                    }}

                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` },

                    }}

                />
            ) : null

    )
    // Line and bar chart displayed here
    return (
        <div className={styles.container}>
            {/* If no country selected show bar chart, otherwise show line chart */}
            {country ? barChart : lineChart}
        </div>
    );
};

export default Chart;