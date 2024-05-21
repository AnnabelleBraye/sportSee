export type SessionActivityType = {
  day: number,
  kilogram: number,
  calories: number
}

export type SessionAverageType = {
  day: number,
  sessionLength: number
}

export type KindMap = {
  [key: number]: string;
};

export type UserData = {
  value: number;
  kind: number;
};