/* eslint-disable @typescript-eslint/no-explicit-any */
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis } from "recharts"
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { Props } from "recharts/types/component/DefaultLegendContent";

export type LineChartType = {
  name: string,
  value: number,
}
  
const CustomAxisTick = ({x, y, payload, index, visibleTicksCount}: any) => {
  let textAnchor = 'middle';
  let dx = 0
  if (index === 0) {
    textAnchor = 'start'
    dx = 3;
  } else if (index === visibleTicksCount - 1) {
    textAnchor = 'end'
    dx = -3;
  }
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={10} dx={dx} textAnchor={textAnchor} opacity={0.5} fontSize={12} fill="#FFFFFF">
        {payload.value}
      </text>
    </g>
  );
}

const customLegend = ({ payload }: Props) => {
  if (payload) {
    return (
      <p className="p-7 text-[15px] text-white">Durée moyenne des sessions</p>
    );
  }
};

const customTooltip = ({ payload }: TooltipProps<ValueType, NameType>) => {
  if (payload && payload.length !== 0) {
    return (
      <div className="bg-white p-2 text-[8px] text-black">
        {payload[0].value} {payload[0].unit}
      </div>
    );
  }
};

const LineChartComponent = ({data}: {data: LineChartType[]}) => {
  return (
      <ResponsiveContainer 
        width="100%" 
        height="100%"
        className="rounded-md bg-primary-color pb-4"
      >
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="1" x2="1" y2="1">
              <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            opacity={0.5}
            stroke="#FFFFFF"
            tick={<CustomAxisTick />} 
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#colorGradient)"
            strokeWidth={2}
            dot={false}
            unit="min"
          />
          <Tooltip cursor={false} content={customTooltip} position={{ y: 90 }} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{
              fontSize: 15,
              opacity: 0.5,
            }}
            content={customLegend}
          />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default LineChartComponent
