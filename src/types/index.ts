export type SessionActivityType = {
  day: number,
  kilogram: number,
  calories: number
}

export type SessionAverageType = {
  day: number,
  sessionLength: number
}

export type KindMapType = {
  [key: number]: string;
};

export type UserType = {
  value: number;
  kind: number;
};