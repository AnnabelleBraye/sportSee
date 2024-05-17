import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"

export type RadialBarChartType = {
  name: string,
  value: number,
  fill: string
}

const RadialBarChartComponent = ({data}: {data: RadialBarChartType[]}) => {
  console.log('radialbarchart')
  return (
    <div className='h-full w-full relative'>
      <h3 className='absolute top-6 left-8 text-medium font-medium'>Score</h3>
      <ResponsiveContainer width="100%" height="100%" className='rounded-md bg-light-grey'>
        <RadialBarChart
          data={data}
          innerRadius={80}
          outerRadius={100}
          barSize={10}
          startAngle={180}
          endAngle={-270}
          className=''
          >
          <circle cx="50%" cy="50%" r="28%" fill="#FFFFFF" />
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
      <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold text-[#282D30]'>
        {data[0]?.value}%<br />
        <span className='text-base text-[#74798C] font-medium'>de votre<br />objectif</span>
      </p>
    </div>
  )
}

export default RadialBarChartComponent;