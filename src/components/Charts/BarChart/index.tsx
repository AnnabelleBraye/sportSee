/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, TooltipProps, Scatter, Rectangle } from "recharts";
import { Props } from "recharts/types/component/DefaultLegendContent";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

export type BarChartType = {
  day: number,
  weight: number,
  calories: number
}
const customLegend = ({ payload }: Props) => {
  if (!payload) return null;
  return (
    <div className="flex justify-between pb-16">
      <p className="text-medium font-medium text-[#20253A] mt-6 text-charts-title">Activité quotidienne</p>
      <ul className="flex gap-7">
        {payload.map(({ value, color, dataKey }) => {
          const unit = value === 'weight' ? 'Poids (kg)' : 'Calories brûlées (kCal)';
          return (
            <li
              key={`item-${dataKey}`}
              className="flex items-center gap-2.5 text-charts-primary"
            >
              <svg
                fill={color}
                height="8px"
                width="8px"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50" />
              </svg>
              <p className="text-legend-grey text-medium">{unit}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const customTooltip = ({ payload }: TooltipProps<ValueType, NameType>) => {
  if (payload && payload.length > 0) {
    return (
      <div className="bg-primary-color px-2 py-2 text-[7px] font-medium text-white">
        <ul className="flex flex-col items-center gap-4">
          {payload.map(({ value, dataKey, unit }) => {
            return (
              <li key={`item-${dataKey}`}>
                {value} {unit}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return null;
};

const BarChartComponent = ({data}: {data: BarChartType[]}) => {
  const xTicks = data.map(d => d.day);
  const minY = Math.min(...data.map(d => d.weight)) - 1
  const maxY = Math.max(...data.map(d => d.weight)) + 1
  const yTicks = [];
  for (let i = minY; i <= maxY; i++) {
    yTicks.push(i);
  }

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width='100%' height='100%' className='rounded-md bg-light-grey pl-9'>
        <BarChart data={data} barSize={7} barGap={8}>
          <XAxis
            tick={{ fontSize: 8 }}
            dataKey="day"
            type="number"
            domain={[0.9, 7.1]}
            ticks={xTicks}
          />
          <YAxis yAxisId="right" domain={[minY, maxY]} ticks={yTicks} axisLine={false} tickLine={false} orientation="right" />
          
          <YAxis yAxisId="left" hide />
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <Bar dataKey="weight" yAxisId="right" fill="#282D30" unit='Kg' radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" yAxisId="left" fill="#E60000" unit='Kcal' radius={[10, 10, 0, 0]} />
          <Tooltip
            cursor={{ fill: '#c4c4c4', fillOpacity: 0.5 }}
            content={customTooltip}
            allowEscapeViewBox={{ x: false, y: false }}
            offset={10}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconSize={6}
            iconType="circle"
            wrapperStyle={{
              fontSize: 14,
            }}
            content={customLegend}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default BarChartComponent;