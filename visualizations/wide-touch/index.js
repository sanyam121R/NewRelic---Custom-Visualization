import React from 'react';
import PropTypes from 'prop-types';

import { LineChart } from 'nr1'
import { BarChart } from 'nr1'


export default class WideTouchVisualization extends React.Component {

    render() {

        const data = [
          {
            metadata: {
              id: 'series-1',
              name: 'Serie 1',
              color: '#a35ebf',
              viz: 'main',
              units_data: {
                x: 'TIMESTAMP',
                y: 'BYTES',
              },
            },
            data: [
              {
                x: 1684353254212,
                y: 21400,
              },
              {
                x: 1684356854212,
                y: 12200,
              },
              {
                x: 1684360454212,
                y: 9300,
              },
              {
                x: 1684364054212,
                y: 14500,
              },
              {
                x: 1684367654212,
                y: 27500,
              },
              {
                x: 1684371254212,
                y: 24700,
              },
            ],
          },
          {
            metadata: {
              id: 'series-2',
              name: 'Serie 2',
              color: '#85c956',
              viz: 'main',
              units_data: {
                x: 'TIMESTAMP',
                y: 'BYTES',
              },
            },
            data: [
              {
                x: 1684353254212,
                y: 8800,
              },
              {
                x: 1684356854212,
                y: 1400,
              },
              {
                x: 1684360454212,
                y: 4600,
              },
              {
                x: 1684364054212,
                y: 5200,
              },
              {
                x: 1684367654212,
                y: 14100,
              },
              {
                x: 1684371254212,
                y: 19300,
              },
            ],
          },
          {
            metadata: {
              id: 'events',
              name: 'Events',
              color: 'red',
              viz: 'event',
            },
            data: [
              {
                x0: 1684356854212,
                x1: 1684360454212,
              },
              {
                x0: 1684367654212,
                x1: 1684367654212,
              },
            ],
          },
        ];
      
        return <>

                <p>******************************************************* This Line-Chart contains the Memory usage
                </p>
                <LineChart
                    accountIds={[3932056]}
                    query="SELECT average(host.memoryUsedPercent) AS 'Memory used %' FROM Metric WHERE `entityGuid` = 'MzkzMjA1NnxJTkZSQXxOQXw1NTM1NjI2OTY3MTI5NDM2NTQ5' TIMESERIES auto"
                    fullWidth
                />

                <p>******************************************************* This Bar-Chart contains the CPU usage
                </p>

                <BarChart
                accountIds={[3932056]}
                query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'MzkzMjA1NnxJTkZSQXxOQXw1NTM1NjI2OTY3MTI5NDM2NTQ5' TIMESERIES auto"
                />;

                <p>####################################################### This is Line-Chart contains the data copied from documentation and passed through const variable...</p> 

                <LineChart data={data} fullWidth />;
        
        </>        
      }
}