import { createContext, useState } from 'react';

export interface UserData {
  [key: string]: any

  firstName: string
  lastName: string
  username: string
  password: string
  email: string
  birthday: string
  terms: boolean
}

export interface UserValue {
  user: UserData
  setUser: any
} 

const defaultValue = {
  user: {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    repeatPass: '',
    email: '',
    repeatEmail: '',
    birthday: '',
    terms: false
  },
  setUser: null
}

export const UserContext = createContext<UserValue>(defaultValue);

export const UserProvider: React.FC = props => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    repeatPass: '',
    email: '',
    repeatEmail: '',
    birthday: '',
    terms: false
  });

  return (
    <UserContext.Provider value={{user, setUser}} >
      { props.children }
    </UserContext.Provider>
  );
};
