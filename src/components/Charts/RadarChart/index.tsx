import { 
  PolarAngleAxis, 
  PolarGrid, 
  PolarRadiusAxis, 
  Radar, 
  RadarChart, 
  ResponsiveContainer 
} from "recharts";

import {
  WHITE_COLOR
} from "../../../constants";

export type RadarChartProps = {
  kind: string,
  value: number,
  fullMark: number,
}

const RadarChartComponent = ({data}: {data: RadarChartProps[]}) => {
  return (
    <div className='h-full w-full'>
      <ResponsiveContainer 
        width="100%" 
        height="100%" 
        className='rounded-md bg-secondary-color shadow-card'
      >
        <RadarChart 
          cx="50%" 
          cy="50%" 
          outerRadius="80%" 
          data={data} 
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind" 
            fontSize={12} 
            stroke={WHITE_COLOR} 
            tickLine={false}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChartComponent;