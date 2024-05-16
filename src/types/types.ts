export type userType = {
  id: number,
  userInfos: {
      firstName: string,
      lastName: string,
      age: number,
  },
  todayScore?: number,
  score?: number,
  keyData: {
      calorieCount: number,
      proteinCount: number,
      carbohydrateCount: number,
      lipidCount: number
  }
}

export type sessionActivityType = {
  day: number,
  kilogram: number,
  calories: number
}

export type userActivity = {
  userId: number,
  sessions: sessionActivityType[],
}

type sessionAverageType = {
  day: number,
  sessionLength: number
}

export type userSessionAverageType = {
  userId: number,
  sessions: sessionAverageType[]
}


type KindMap = {
  [key: number]: string;
};

export type UserData = {
  value: number;
  kind: number;
};

export type UserPerformance = {
  userId: number;
  kind: KindMap;
  data: UserData[];
};