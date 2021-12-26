import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.split(' ').includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);
  const colors = ['var(--purple-dark)', '#350568e6', '#350568cc', '#350568b3', '#35056899', '#35056880'];


  return (
    <ResponsiveContainer height={400}>
      <PieChart width={730} height={250}>
        <Pie data={data} dataKey="value" cx={200} cy={200} outerRadius={80}
        fill="var(--purple-dark)"
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
)
}

export default EventGenre;