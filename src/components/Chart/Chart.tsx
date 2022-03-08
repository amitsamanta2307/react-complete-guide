import React from 'react';

import { DataPoint } from '../Expenses/ExpensesChart';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props: {
    dataPoints: Array<DataPoint>
}) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues); // spread operator pull each element, and get them as arguments

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={totalMaximum}
                />
            ))}
        </div>
    );
};

export default Chart;