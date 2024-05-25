import { RadialBarChartProps } from '../components/Charts/RadialBarChart';
import { CardProps } from '../components/Card';
import { BarChartProps } from '../components/Charts/BarChart';
import { RadarChartProps } from '../components/Charts/RadarChart';
import { LineChartProps } from '../components/Charts/LineChart';
import {
  SessionActivityType,
  UserType 
} from '../types';
import { getFirstLetterDay } from './date';
import { SessionAverageType } from '../types';
import User from '../models/User';
import UserActivity from '../models/UserActivity';
import UserAverageSessions from '../models/UserAverageSessions';
import UserPerformance from '../models/UserPerformance';

export const transformUserScore = (user: User): RadialBarChartProps[] => {
  const userScore = user.score! * 100 || 0;
  return [{
    name: 'score',
    value: userScore,
    fill: '#E60000'
  }];
};

export const transformKeysData = (user: User): CardProps[] => {
  return [{
    image: 'src/assets/svg/calories.svg',
    value: `${user?.keyData.calorieCount}kCal`,
    name: 'Calories'
  }, {
    image: 'src/assets/svg/proteines.svg',
    value: `${user?.keyData.proteinCount}g`,
    name: 'Protéines'
  }, {
    image: 'src/assets/svg/glucides.svg',
    value: `${user?.keyData.carbohydrateCount}g`,
    name: 'Glucides'
  }, {
    image: 'src/assets/svg/lipides.svg',
    value: `${user?.keyData.lipidCount}g`,
    name: 'Lipides'
  }];
};

export const transformUserActivity = (userActivity: UserActivity): BarChartProps[] => {
  return userActivity?.sessions?.map((sessionActivity: SessionActivityType) => ({
    day: new Date(sessionActivity.day).getDate(),
    weight: sessionActivity.kilogram,
    calories: sessionActivity.calories
  }));
};

export const transformUserPerformance = (userPerformance: UserPerformance): RadarChartProps[] => {
  return userPerformance?.data.map((perf: UserType) => ({
    kind: userPerformance.kind[perf.kind].toString(),
    value: perf.value,
    fullMark: 70,
  }));
};

export const transformUserAverageSessions = (userAverageSessions: UserAverageSessions): LineChartProps[] => {
  return userAverageSessions?.sessions.map((session: SessionAverageType) => ({
    name: getFirstLetterDay(session.day),
    value: session.sessionLength
  }));
};