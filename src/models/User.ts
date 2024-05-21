/* eslint-disable @typescript-eslint/no-explicit-any */
export default class User {
  id: number;
  userInfos: {
      firstName: string;
      lastName: string;
      age: number;
  };
  score: number;
  keyData: {
      calorieCount: number;
      proteinCount: number;
      carbohydrateCount: number;
      lipidCount: number;
  };

  constructor(id: number, userInfos: any, score: number, keyData: any) {
      this.id = id;
      this.userInfos = userInfos;
      this.score = score;
      this.keyData = keyData;
  }

  static fromApiResponse(data: any): User {
      const score = data.score || data.todayScore;
      return new User(
        data.id, 
        data.userInfos, 
        score, 
        data.keyData
    );
  }
}