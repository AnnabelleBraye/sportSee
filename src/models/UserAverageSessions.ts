/* eslint-disable @typescript-eslint/no-explicit-any */
export default class UserAverageSessions {
  userId: number;
  sessions: { day: number; sessionLength: number; }[];

  constructor(userId: number, sessions: { day: number; sessionLength: number; }[]) {
    this.userId = userId;
    this.sessions = sessions;
  }

  static fromApiResponse(data: any): UserAverageSessions {
    return new UserAverageSessions(
      data.userId,
      data.sessions
    );
  }
}