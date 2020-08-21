import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

function createData(time, amount) {
  return { time, amount };
}

const data = [
    createData('05/01/2020', 0),
    createData('05/14/2020', 4.76),
    createData('05/16/2020', 24.41),
    createData('05/22/2020', 40.69),
    createData('05/25/2020', 43.66),
    createData('06/05/2020', 47.31),
  ];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>2020</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Fees ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}