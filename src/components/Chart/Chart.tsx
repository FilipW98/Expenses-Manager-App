import React from 'react';
import ChartBar from './ChartBar';
import './Chart.scss';
interface DataPoint {
    label: string;
    value: number;
  }
  interface ChartProps {
    dataPoints: DataPoint[];
  }

const Chart = (props:ChartProps) => {

	console.log(props.dataPoints);

	const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value)
	const totalMaximum = Math.max(...dataPointValues)
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint:DataPoint) => (
				<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
			))}
		</div>
	);
};

export default Chart;
