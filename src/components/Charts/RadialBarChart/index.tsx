import {
  PolarAngleAxis, 
  RadialBar, 
  RadialBarChart, 
  ResponsiveContainer 
} from "recharts"
import { colors } from "../../../constants"

export type RadialBarChartProps = {
  name: string,
  value: number,
  fill: string
}

const RadialBarChartComponent = ({data}: {data: RadialBarChartProps[]}) => {
  return (
    <div className='h-full w-full relative'>
      <h3 className='absolute top-6 left-8 text-medium font-medium'>Score</h3>
      <ResponsiveContainer 
        width="100%" 
        height="100%" 
        className='rounded-md bg-light-grey shadow-card'
      >
        <RadialBarChart
          data={data}
          innerRadius={80}
          outerRadius={100}
          barSize={10}
          startAngle={180}
          endAngle={-270}
          >
          <circle cx="50%" cy="50%" r="28%" fill={colors.WHITE_COLOR} />
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="value"
            cornerRadius={15}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold text-secondary-color'>
        {data[0]?.value}%<br />
        <span className='text-base text-legend-grey font-medium'>de votre<br />objectif</span>
      </p>
    </div>
  )
}

export default RadialBarChartComponent;