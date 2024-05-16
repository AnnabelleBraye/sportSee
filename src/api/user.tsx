import { useFetch } from "../utils/hooks";

const host = 'http://localhost:3000';

export const FetchUserData = (id: number) => {
  const userData = useFetch({url: `${host}/user/${id}`});

  return userData;
}

export const FetchUserActivity = (id: number) => {
  const userActivity = useFetch({url: `${host}/user/${id}/activity`});

  return userActivity;
}

export const FetchUserSessionsAverage = (id: number) => {
  const userSessionsAverage = useFetch({url: `${host}/user/${id}/average-sessions`});

  return userSessionsAverage;
}

export const FetchUserPerformance = (id: number) => {
  const userPerformance = useFetch({url: `${host}/user/${id}/performance`});

  return userPerformance;
}
