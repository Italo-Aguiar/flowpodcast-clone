import { ValidatorResponse } from '../interfaces';

export const emailValidator = (email: string): ValidatorResponse => {
  const re = /\S+@\S+\.\S+/;

  if (re.test(email)) {
    return {
      valid: true,
      message: ''
    }
  }

  return {
    valid: false,
    message: 'Informe um e-mail válido'
  }
}

export const passwordValidator = (password: string): ValidatorResponse => {
  const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,25}/;

  if (re.test(password)) {
    return {
      valid: true,
      message: ''
    }
  }

  return {
    valid: false,
    message: 'A senha deve ter pelo menos uma letra minúscula, uma maiúscula e um número, e ter de 6 a 25 caracteres.'
  }
}

export const repeatEmailValidator = (email: string, repeat: string): ValidatorResponse => {
  if (email == repeat) {
    return {
      valid: true,
      message: ''
    }
  }

  return {
    valid: false,
    message: 'Esse e-mail não condiz com o e-mail informado.'
  }
}

export const repeatPasswordValidator = (password: string, repeat: string): ValidatorResponse => {
  if (password == repeat) {
    return {
      valid: true,
      message: ''
    }
  }

  return {
    valid: false,
    message: 'Essa senha não condiz com a senha informada.'
  }
}