/* eslint-disable @typescript-eslint/no-explicit-any */
import { SessionActivityType } from "../types";

export default class UserActivity {
  userId: number;
  sessions: SessionActivityType[];

  constructor(userId: number, sessions: SessionActivityType[]) {
      this.userId = userId;
      this.sessions = sessions;
  }

  
  static fromApiResponse(data: any): UserActivity {
    return new UserActivity(
      data.userId,
      data.sessions
    );
  }
}