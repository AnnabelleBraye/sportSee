import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

export type RadarChartType = {
  kind: string,
  value: number,
  fullMark: number,
}

const RadarChartComponent = ({data}: {data: RadarChartType[]}) => {
  return (
    <div className='h-full w-full'>
      <ResponsiveContainer width="100%" height="100%" className='rounded-md bg-secondary-color'>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} margin={{ top: 40, right: 40, bottom: 40, left: 40 }} >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" fontSize={12} stroke="#FFFFFF" tickLine={false} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChartComponent;