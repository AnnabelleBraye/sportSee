/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchType, useFetch } from "../utils/hooks/useFetch";

import User from "../models/User";
import UserActivity from "../models/UserActivity";
import UserAverageSessions from "../models/UserAverageSessions";
import UserPerformance from "../models/UserPerformance";

const host = 'http://localhost:3000';

const FetchDataAndDeserialize = <T,>(
  url: string, deserialize: (data: any) => T
): FetchType<T> => {
  const fetchData = useFetch<T>({ url });

  if (fetchData.data) {
    fetchData.data = deserialize(fetchData.data);
  }

  return fetchData;
};

export const FetchUser = (id: number): FetchType<User> => {
  const url = `${host}/user/${id}`;
  return FetchDataAndDeserialize<User>(url, User.fromApiResponse);
};

export const FetchUserActivity = (id: number): FetchType<UserActivity> => {
  const url = `${host}/user/${id}/activity`;
  return FetchDataAndDeserialize<UserActivity>(url, UserActivity.fromApiResponse);
};

export const FetchUserAverageSessions = (id: number): FetchType<UserAverageSessions> => {
  const url = `${host}/user/${id}/average-sessions`;
  return FetchDataAndDeserialize<UserAverageSessions>(url, UserAverageSessions.fromApiResponse);
};

export const FetchUserPerformance = (id: number): FetchType<UserPerformance> => {
  const url = `${host}/user/${id}/performance`;
  return FetchDataAndDeserialize<UserPerformance>(url, UserPerformance.fromApiResponse);
};
