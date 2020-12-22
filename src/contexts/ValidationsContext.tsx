import { createContext } from 'react';
import { ValidatorResponse } from '../interfaces';
import { emailValidator, passwordValidator } from '../utils';

export interface ValidationProps {
  validations: {
    [key: string]: any;

    email: (email: string) => ValidatorResponse
    password: (password: string) => ValidatorResponse
  }
}

const value = {
  validations: {
    email: emailValidator,
    password: passwordValidator,
  }
}

export const ValidationContext = createContext<ValidationProps>(value);

export const ValidationsProvider: React.FC = props => {
  return (
    <ValidationContext.Provider value={value} >
      { props.children }
    </ValidationContext.Provider>
  );
};
