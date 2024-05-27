import { FetchType } from '../../utils/hooks/useFetch';

import User from '../../models/User';
import UserActivity from '../../models/UserActivity';
import UserAverageSessions from '../../models/UserAverageSessions';
import UserPerformance from '../../models/UserPerformance';

import { 
  FetchUser, 
  FetchUserActivity, 
  FetchUserAverageSessions, 
  FetchUserPerformance 
} from '../../api/user';

import { 
  transformUserActivity,
  transformKeysData,
  transformUserPerformance,
  transformUserScore,
  transformUserAverageSessions
} from '../../utils/dataTransformation';

import { RadialBarChartProps } from '../../components/Charts/RadialBarChart';
import { BarChartProps } from '../../components/Charts/BarChart';
import { RadarChartProps } from '../../components/Charts/RadarChart';
import { LineChartProps } from '../../components/Charts/LineChart';

import Charts from '../../components/Profile/Charts';
import Card,
      { CardProps } from '../../components/Card';

import '../../styles/main.css'
import Loader from '../../components/Charts/Loader';
import { Fragment } from 'react/jsx-runtime';

const Profile = () => {
  const userId = 12;
  const {
    isError,
    message,
    isLoading,
    isDataReady,
    firstname,
    radialBarChartData,
    cardsData,
    barChartData,
    radarChartData,
    lineChartData
  } = manageData(userId);
  
  return (
    <div className='ml-[calc(120px)] mt-16 mb-16'>
      <div className='mx-10 xl:mx-24'>
        {isError ?
          <div className='flex flex-col justify-center items-center h-96'>
            <h1 className='font-medium mb-6 text-3xl'>Une erreur est survenue :</h1>
            <h2 className='font-medium mb-10 text-4xl text-red-600'>{message}</h2>
          </div> :
            !isDataReady || isLoading ?
              <Loader /> :
              (
                <Fragment>
                  <h1 className='font-medium mb-10 text-5xl'>
                    Bonjour <span className='text-primary-color'>{firstname}</span>
                  </h1>             

                  <p className='text-lg mb-20'>
                    Félicitations ! Vous avez explosé vos objectifs hier 👏
                  </p>

                  <div className='flex flex-col w-full gap-8 xl:flex-row'>
                    <Charts
                      barChartData={barChartData}
                      lineChartData={lineChartData}
                      radarChartData={radarChartData}
                      radialBarChartData={radialBarChartData}
                    />
                  
                    <div className='grid grid-cols-2 w-full gap-9 xl:flex xl:flex-col'>
                      {cardsData.map((key) => (
                        <Card 
                          key={key.name} 
                          image={key.image} 
                          value={key.value} 
                          name={key.name} 
                          />
                        ))}
                    </div>
                  </div>
                </Fragment>
              )}
      </div>
    </div>
  )
}

export default Profile

const manageData = (userId: number) => {
  const user: FetchType<User> = FetchUser(userId);
  const userActivity: FetchType<UserActivity> = FetchUserActivity(userId);
  const userAverageSessions: FetchType<UserAverageSessions> = FetchUserAverageSessions(userId);
  const userPerformance: FetchType<UserPerformance> = FetchUserPerformance(userId);

  const isError: boolean = user.isError || userActivity.isError || userAverageSessions.isError || userPerformance.isError;
  let message: string = '';
  if (isError) {
    message = user.message || userActivity.message || userAverageSessions.message || userPerformance.message;
  }
  const isLoading = user.isLoading || userActivity.isLoading || userAverageSessions.isLoading || userPerformance.isLoading;
  const isDataReady = user.data && userActivity.data && userAverageSessions.data && userPerformance.data;
  const firstname = user.data && user.data.userInfos.firstName || '';
  
  const radialBarChartData: RadialBarChartProps[] = user.data ? transformUserScore(user.data) : [];
  const cardsData: CardProps[] = user.data ? transformKeysData(user.data) : [];
  const barChartData: BarChartProps[] = userActivity.data ? transformUserActivity(userActivity.data) : [];
  const radarChartData: RadarChartProps[] = userPerformance.data ? transformUserPerformance(userPerformance.data) : [];
  const lineChartData: LineChartProps[] = userAverageSessions.data ? transformUserAverageSessions(userAverageSessions.data) : [];

  return {
    isError,
    message,
    isLoading,
    isDataReady,
    firstname,
    radialBarChartData,
    cardsData,
    barChartData,
    radarChartData,
    lineChartData
  }
}
