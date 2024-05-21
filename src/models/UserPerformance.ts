/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserData } from "../types";

export default class UserPerformance {
  userId: number;
  kind: { [key: number]: string };
  data: UserData[];

  constructor(userId: number, kind: { [key: number]: string }, data: UserData[]) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
  
  static fromApiResponse(data: any): UserPerformance {
    return new UserPerformance(
      data.userId,
      data.kind,
      data.data
    );
  }
}