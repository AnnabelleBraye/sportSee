/* eslint-disable @typescript-eslint/no-explicit-any */
import { Legend, Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts"
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { Props } from "recharts/types/component/DefaultLegendContent";
import { RectRadius } from "recharts/types/shape/Rectangle";

export type LineChartType = {
  name: string,
  value: number,
}

const CustomCursor = (props: any) => {
  const { points, width, height, payloadIndex, stroke } = props;
  console.log(props);
  if (points && points.length) {
    let { x, y } = points[0];
    let newWidth = width;
    if (payloadIndex === 0) {
      x -= 4.5;
      newWidth += 9;
    } else {
      newWidth = 46.3*(6-payloadIndex) + 4.3
    }
    return (
      <Rectangle
        fill="black"
        stroke="black"
        x={x}
        y={y-4.5}
        opacity={0.2}
        width={newWidth}
        height={255}
      />
    );
  }
};
  
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
      <text x={0} y={0} dy={0} dx={dx} textAnchor={textAnchor} opacity={0.5} fontSize={12} fill="#FFFFFF">
        {payload.value}
      </text>
    </g>
  );
}

const customLegend = ({ payload }: Props) => {
  if (payload) {
    return (
      <p className="absolute p-7 text-medium text-white">Durée moyenne des sessions</p>
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
  const yTicks = [];
  const values = data.map(d => d.value)
  const minTick = Math.min(...values)
  const maxTick = Math.max(...values)
  for (let i = minTick - 10; i < maxTick + 30; i++) {
    yTicks.push(i);
  }

  return (
      <ResponsiveContainer 
        width="100%" 
        height="100%"
        className="rounded-md bg-primary-color overflow-hidden"
      >
        <LineChart width={256} data={data}>
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
          <YAxis hide tickSize={20} ticks={yTicks} domain={values} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#colorGradient)"
            strokeWidth={2}
            dot={false}
            unit="min"
          />
          <Tooltip 
            cursor={<CustomCursor />}
            content={customTooltip} 
            position={{ y: 90 }}
          />
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
