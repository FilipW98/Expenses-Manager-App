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
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint:DataPoint) => (
				<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={100} label={dataPoint.label} />
			))}
		</div>
	);
};

export default Chart;
