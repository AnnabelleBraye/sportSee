import { FetchType } from "../../utils/hooks/userFetch"
import BarChartComponent, { BarChartProps } from "../Charts/BarChart"
import LineChartComponent, { LineChartProps } from "../Charts/LineChart"
import Loader from "../Charts/Loader"
import RadarChartComponent, { RadarChartProps } from "../Charts/RadarChart"
import RadialBarChartComponent, { RadialBarChartProps } from "../Charts/RadialBarChart"

type ChartProps = {
  userActivity: FetchType,
  barChartData: BarChartProps[],
  userSessionsAverage: FetchType,
  lineChartData: LineChartProps[], 
  userPerformance: FetchType, 
  radarChartData: RadarChartProps[], 
  user: FetchType, 
  radialBarChartData: RadialBarChartProps[]
}

const Charts = ({
  userActivity, 
  barChartData, 
  userSessionsAverage, 
  lineChartData, 
  userPerformance, 
  radarChartData, 
  user, 
  radialBarChartData
}: ChartProps) => {
  return (
    <div className='flex flex-col w-full gap-7 xl:w-3/4'>
      <div className="h-80 w-full">
        {!userActivity.data || userActivity.isLoading ? 
          <Loader /> :
          <BarChartComponent data={barChartData} />
        }
      </div>

      <div className='flex justify-between h-64 gap-8'>
        <div className="w-72">
          {!userSessionsAverage.data || userSessionsAverage.isLoading ? 
            <Loader /> :
            <LineChartComponent data={lineChartData} />
          }
        </div>
        <div className="w-72">
          {!userPerformance.data || userPerformance.isLoading ? 
            <Loader /> :
            <RadarChartComponent data={radarChartData} />
          }
        </div>
        <div className="w-72">
          {!user.data || user.isLoading ? 
            <Loader /> :
            <RadialBarChartComponent data={radialBarChartData} />
          }
        </div>
      </div>
    </div>
  )
} 

export default Charts