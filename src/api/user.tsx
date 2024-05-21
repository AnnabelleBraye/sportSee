import { FetchType, useFetch } from "../utils/hooks/userFetch";

import User from "../models/User";
import UserActivity from "../models/UserActivity";
import UserAverageSessions from "../models/UserAverageSessions";
import UserPerformance from "../models/UserPerformance";

const host = 'http://localhost:3000';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FetchDataAndDeserialize = <T,>(url: string, deserialize: (data: any) => T) => {
  const fetchData = useFetch({ url });

  if (fetchData.data) {
    fetchData.data = deserialize(fetchData.data);
  }

  return fetchData;
};

export const FetchUserData = (id: number): FetchType => {
  const url = `${host}/user/${id}`;
  return FetchDataAndDeserialize<User>(url, User.fromApiResponse);
};

export const FetchUserActivity = (id: number) => {
  const url = `${host}/user/${id}/activity`;
  return FetchDataAndDeserialize<UserActivity>(url, UserActivity.fromApiResponse);
};

export const FetchUserAverageSessions = (id: number) => {
  const url = `${host}/user/${id}/average-sessions`;
  return FetchDataAndDeserialize<UserAverageSessions>(url, UserAverageSessions.fromApiResponse);
};

export const FetchUserPerformance = (id: number) => {
  const url = `${host}/user/${id}/performance`;
  return FetchDataAndDeserialize<UserPerformance>(url, UserPerformance.fromApiResponse);
};
