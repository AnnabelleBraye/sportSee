import { RadialBarChartProps } from '../components/Charts/RadialBarChart';
import { CardProps } from '../components/Card';
import { BarChartProps } from '../components/Charts/BarChart';
import { RadarChartProps } from '../components/Charts/RadarChart';
import { LineChartProps } from '../components/Charts/LineChart';
import {
  SessionActivityType,
  UserData 
} from '../types';
import { getFirstLetterDay } from './date';
import { SessionAverageType } from '../types';
import User from '../models/User';
import UserActivity from '../models/UserActivity';
import UserAverageSessions from '../models/UserAverageSessions';
import UserPerformance from '../models/UserPerformance';

export const transformUserScore = (userData: User): RadialBarChartProps[] => {
  const userScore = userData.score! * 100 || 0;
  return [{
    name: 'score',
    value: userScore,
    fill: '#E60000'
  }];
};

export const transformKeysData = (userData: User): CardProps[] => {
  return [{
    image: 'src/assets/svg/calories.svg',
    value: `${userData?.keyData.calorieCount}kCal`,
    name: 'Calories'
  }, {
    image: 'src/assets/svg/proteines.svg',
    value: `${userData?.keyData.proteinCount}g`,
    name: 'Protéines'
  }, {
    image: 'src/assets/svg/glucides.svg',
    value: `${userData?.keyData.carbohydrateCount}g`,
    name: 'Glucides'
  }, {
    image: 'src/assets/svg/lipides.svg',
    value: `${userData?.keyData.lipidCount}g`,
    name: 'Lipides'
  }];
};

export const transformActivityData = (userActivityData: UserActivity): BarChartProps[] => {
  return userActivityData?.sessions?.map((sessionActivity: SessionActivityType) => ({
    day: new Date(sessionActivity.day).getDate(),
    weight: sessionActivity.kilogram,
    calories: sessionActivity.calories
  }));
};

export const transformRadarChartData = (userPerformance: UserPerformance): RadarChartProps[] => {
  return userPerformance?.data.map((perf: UserData) => ({
    kind: userPerformance.kind[perf.kind].toString(),
    value: perf.value,
    fullMark: 70,
  }));
};

export const transformUserSessionsAverageData = (userSessionsAverage: UserAverageSessions): LineChartProps[] => {
  return userSessionsAverage?.sessions.map((session: SessionAverageType) => ({
    name: getFirstLetterDay(session.day),
    value: session.sessionLength
  }));
};