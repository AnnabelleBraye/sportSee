import BarChartComponent, { BarChartProps } from "../Charts/BarChart"
import LineChartComponent, { LineChartProps } from "../Charts/LineChart"
import RadarChartComponent, { RadarChartProps } from "../Charts/RadarChart"
import RadialBarChartComponent, { RadialBarChartProps } from "../Charts/RadialBarChart"

type ChartProps = {
  barChartData: BarChartProps[],
  lineChartData: LineChartProps[], 
  radarChartData: RadarChartProps[], 
  radialBarChartData: RadialBarChartProps[]
}

const Charts = ({
  barChartData, 
  lineChartData, 
  radarChartData, 
  radialBarChartData
}: ChartProps) => {
  return (
    <div className='flex flex-col w-full gap-7 xl:w-3/4'>
      <div className="h-80 w-full">
        <BarChartComponent data={barChartData} />
      </div>

      <div className='flex justify-between h-64 gap-8'>
        <div className="w-72">
          <LineChartComponent data={lineChartData} />
        </div>
        <div className="w-72">
          <RadarChartComponent data={radarChartData} />
        </div>
        <div className="w-72">
          <RadialBarChartComponent data={radialBarChartData} />
        </div>
      </div>
    </div>
  )
} 

export default Charts