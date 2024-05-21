import { FetchType } from '../../utils/hooks/userFetch';

import User from '../../models/User';
import UserActivity from '../../models/UserActivity';
import UserAverageSessions from '../../models/UserAverageSessions';
import UserPerformance from '../../models/UserPerformance';

import { 
  FetchUserData, 
  FetchUserActivity, 
  FetchUserAverageSessions, 
  FetchUserPerformance 
} from '../../api/user';

import { 
  transformActivityData,
  transformKeysData,
  transformRadarChartData,
  transformUserScore,
  transformUserAverageSessionsData
} from '../../utils/dataTransformation';

import { RadialBarChartProps } from '../../components/Charts/RadialBarChart';
import { BarChartProps } from '../../components/Charts/BarChart';
import { RadarChartProps } from '../../components/Charts/RadarChart';
import { LineChartProps } from '../../components/Charts/LineChart';

import Charts from '../../components/Profile/Charts';
import Card,
      { CardProps } from '../../components/Card';

import '../../styles/main.css'

const Profile = () => {
  const userId = 12;
  const user: FetchType<User> = FetchUserData(userId);
  const userActivity: FetchType<UserActivity> = FetchUserActivity(userId);
  const userAverageSessions: FetchType<UserAverageSessions> = FetchUserAverageSessions(userId);
  const userPerformance: FetchType<UserPerformance> = FetchUserPerformance(userId);

  const radialBarChartData: RadialBarChartProps[] = user.data ? transformUserScore(user.data) : [];
  const keysData: CardProps[] = user.data ? transformKeysData(user.data) : [];
  const barChartData: BarChartProps[] = userActivity.data ? transformActivityData(userActivity.data) : [];
  const radarChartData: RadarChartProps[] = userPerformance.data ? transformRadarChartData(userPerformance.data) : [];
  const lineChartData: LineChartProps[] = userAverageSessions.data ? transformUserAverageSessionsData(userAverageSessions.data) : [];

  return (
    <div className='ml-[calc(120px)] mt-16 mb-16'>
      <div className='mx-10 xl:mx-24'>
        {user.data && !user.isLoading &&
        <h1 className='font-medium mb-10 text-5xl'>
          Bonjour <span className='text-primary-color'>{user.data.userInfos.firstName}</span>
        </h1>
        }
        <p className='text-lg mb-20'>
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
        
        <div className='flex flex-col w-full gap-8 xl:flex-row'>
          <Charts
            userActivity={userActivity}
            barChartData={barChartData}
            userAverageSessions={userAverageSessions}
            lineChartData={lineChartData}
            userPerformance={userPerformance}
            radarChartData={radarChartData}
            user={user}
            radialBarChartData={radialBarChartData}
          />
        
          <div className='grid grid-cols-2 w-full gap-9 xl:flex xl:flex-col'>
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
