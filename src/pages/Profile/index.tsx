import RadialBarChartComponent, 
      { RadialBarChartProps } from '../../components/Charts/RadialBarChart';
import BarChartComponent,
      { BarChartProps } from '../../components/Charts/BarChart';
import RadarChartComponent, 
      { RadarChartProps } from '../../components/Charts/RadarChart';
import LineChartComponent, 
      { LineChartProps } from '../../components/Charts/LineChart';

import { 
  FetchUserData, 
  FetchUserActivity, 
  FetchUserSessionsAverage, 
  FetchUserPerformance 
} from '../../api/user';

import Card, { CardProps } from '../../components/Card';
import { 
  UserPerformance, 
  sessionActivityType, 
  userActivity, 
  userSessionAverageType, 
  userType 
} from '../../types/types';
import { getFirstLetterDay } from '../../utils/date';

import '../../styles/main.css'
import Loader from '../../components/Charts/Loader';

const Profile = () => {
  const userData: {data: userType, isLoading: boolean, error: boolean} = FetchUserData(12);
  const userActivityData: {data: userActivity, isLoading: boolean, error: boolean} = FetchUserActivity(12);
  const userSessionsAverage: {data: userSessionAverageType, isLoading: boolean, error: boolean} = FetchUserSessionsAverage(12);
  const userPerformance: {data: UserPerformance, isLoading: boolean, error: boolean} = FetchUserPerformance(12);
  
  const userScore = (userData.data?.score || userData.data?.todayScore)! * 100 || 0;
  const scoreData: RadialBarChartProps[] = [{
    name: 'score',
    value: userScore,
    fill: '#E60000'
  }]
  const keysData: CardProps[] = [{
    image: 'src/assets/svg/calories.svg',
    value: `${userData.data?.keyData.calorieCount}kCal`,
    name: 'Calories'
  }, {
    image: 'src/assets/svg/proteines.svg',
    value: `${userData.data?.keyData.proteinCount}g`,
    name: 'Protéines'
  }, {
    image: 'src/assets/svg/glucides.svg',
    value: `${userData.data?.keyData.carbohydrateCount}g`,
    name: 'Glucides'
  }, {
    image: 'src/assets/svg/lipides.svg',
    value: `${userData.data?.keyData.lipidCount}g`,
    name: 'Lipides'
  }]

  const activityData: BarChartProps[] = userActivityData?.data?.sessions?.map((sessionActivity: sessionActivityType) => ({
    day: new Date(sessionActivity.day).getDate(),
    weight: sessionActivity.kilogram,
    calories: sessionActivity.calories
  }))

  const userPerf: UserPerformance = userPerformance.data || [];
  const radarChartData: RadarChartProps[] = userPerf?.data?.map(perf => ({
      kind: userPerf?.kind[perf.kind].toString(),
      value: perf.value,
      fullMark: 70,
    })
  ) || []

  const userSessionsAverageData: LineChartProps[] = userSessionsAverage?.data?.sessions.map(session => ({
    name: getFirstLetterDay(session.day),
    value: session.sessionLength
  }))

  return (
    <div className='ml-[calc(120px)] mt-16 mb-16'>
      <div className='mx-10 xl:mx-24'>
        <h1 className='font-medium mb-10 text-5xl'>
          Bonjour <span className='text-primary-color'>Thomas</span>
        </h1>
        <p className='text-lg mb-20'>
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
        
        <div className='flex flex-col w-full gap-8 xl:flex-row'>
          <div className='flex flex-col w-full gap-7 xl:w-3/4'>
            <div className="h-80 w-full">
              {!userActivityData.data || userActivityData.isLoading ? 
                <Loader /> :
                <BarChartComponent data={activityData} />
              }
            </div>

            <div className='flex justify-between h-64 gap-8'>
              <div className="w-72">
                {!userSessionsAverage.data || userSessionsAverage.isLoading ? 
                  <Loader /> :
                  <LineChartComponent data={userSessionsAverageData} />
                }
              </div>
              <div className="w-72">
                {!userPerformance.data || userPerformance.isLoading ? 
                  <Loader /> :
                  <RadarChartComponent data={radarChartData} />
                }
              </div>
              <div className="w-72">
                {!userData.data || userData.isLoading ? 
                  <Loader /> :
                  <RadialBarChartComponent data={scoreData} />
                }
              </div>
            </div>
          </div>
        
          <div className='grid grid-cols-2 w-full gap-10 xl:flex xl:flex-col'>
            {keysData.map((key) => (
              <Card 
                key={key.name} 
                image={key.image} 
                value={key.value} 
                name={key.name} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
