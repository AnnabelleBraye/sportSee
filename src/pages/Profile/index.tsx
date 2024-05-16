import '../../styles/main.css'
import RadialBarChartComponent, 
      { RadialBarChartType } from '../../components/Charts/RadialBarChart';
import BarChartComponent,
      { BarChartType } from '../../components/Charts/BarChart';
import { 
  FetchUserData, 
  FetchUserActivity, 
  FetchUserSessionsAverage, 
  FetchUserPerformance 
} from '../../api/user';
import { 
  UserPerformance, 
  sessionActivityType, 
  userActivity, 
  userSessionAverageType, 
  userType 
  } from '../../types/types';
import RadarChartComponent, 
      { RadarChartType } from '../../components/Charts/RadarChart';
import LineChartComponent, 
      { LineChartType } from '../../components/Charts/LineChart';

const Profile = () => {
  const userData: {data: userType, isLoading: boolean, error: boolean} = FetchUserData(18);
  const userActivityData: {data: userActivity, isLoading: boolean, error: boolean} = FetchUserActivity(18);
  const userSessionsAverage: {data: userSessionAverageType, isLoading: boolean, error: boolean} = FetchUserSessionsAverage(18);
  const userPerformance: {data: UserPerformance, isLoading: boolean, error: boolean} = FetchUserPerformance(18);

  const userScore = (userData.data?.score || userData.data?.todayScore)! * 100 || 0;
  const scoreData: RadialBarChartType[] = [{
    name: 'score',
    value: userScore,
    fill: '#E60000'
  }]
  const activityData: BarChartType[] = userActivityData?.data?.sessions?.map((sessionActivity: sessionActivityType) => ({
    day: new Date(sessionActivity.day).getDate(),
    weight: sessionActivity.kilogram,
    calories: sessionActivity.calories
  }))

  const userPerf: UserPerformance = userPerformance.data || [];
  const radarChartData: RadarChartType[] = userPerf?.data?.map(perf => ({
      kind: userPerf?.kind[perf.kind].toString(),
      value: perf.value,
      fullMark: 70,
    })
  ) || []

  const getDayString = (dayNumber: number) => {
    // Créez une nouvelle instance de Date en utilisant le jour de la semaine fourni (1 pour Lundi, ..., 7 pour Dimanche)
    const date = new Date(0, 0, dayNumber);
    
    // Obtenez le nom complet du jour de la semaine à partir de l'instance de Date
    const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
    const shortDay: string = date.toLocaleDateString('fr-FR', options);

    return shortDay[0].toLocaleUpperCase();
  }

  const userSessionsAverageData: LineChartType[] = userSessionsAverage?.data?.sessions.map(session => ({
    name: getDayString(session.day),
    value: session.sessionLength
  }))

  return (
    <div className='ml-[calc(120px)]'>
      <div className='m-24'>
        <h1 className='font-medium mb-10 text-5xl'>Bonjour <span className='text-primary-color'>Thomas</span></h1>
        <p className='text-lg mb-20'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        
        <div className='flex w-full'>
          <div className='flex flex-col w-3/4 gap-7'>
            <div className="h-64 w-full">
              {!userActivityData.data || userActivityData.isLoading ? <div>...</div> :
                <BarChartComponent data={activityData} />
              }
            </div>

            <div className='flex gap-8'>
              <div className="h-64 w-72">
                {!userSessionsAverage.data || userSessionsAverage.isLoading ? <div>...</div> :
                  <LineChartComponent data={userSessionsAverageData} />
                }
              </div>
              <div className="h-64 w-72">
                {!userPerformance.data || userPerformance.isLoading ? <div>test</div> :
                  <RadarChartComponent data={radarChartData} />
                }
              </div>
              <div className="h-64 w-72">
                {!userData.data || userData.isLoading ? <div>test</div> :
                  <RadialBarChartComponent data={scoreData} />
                }
              </div>
            </div>
          </div>
        
          <div className='flex flex-col gap-10'>
            {/* Cards */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
