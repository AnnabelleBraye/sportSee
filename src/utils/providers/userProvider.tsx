import { ReactNode, createContext, useState } from "react";

export type User = {
  id: number,
  firstname: string
}

export type UserContextType = {
  globalUser: User;
  setGlobalUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // const [globalUser, setGlobalUser] = useState<User>({id: 12, firstname: 'Thomas'});
  const [globalUser, setGlobalUser] = useState<User>({id: 18, firstname: 'Ambre'});

  return (
    <UserContext.Provider value={{ globalUser, setGlobalUser }}>
      {children}
    </UserContext.Provider>
  );
};
