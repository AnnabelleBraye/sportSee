/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "../types";

export default class UserPerformance {
  userId: number;
  kind: { [key: number]: string };
  data: UserType[];

  constructor(userId: number, kind: { [key: number]: string }, data: UserType[]) {
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