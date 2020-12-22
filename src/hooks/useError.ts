import { ObjectIndex } from './../interfaces/index';
import { useState } from 'react';
import { ValidationProps } from './../contexts';

interface useErrorReturn {
  errors: ObjectIndex
  validate: (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  submittable: () => boolean
}

export const useError = ({ validations }: ValidationProps): useErrorReturn => {
  const [errors, setErrors] = useState<ObjectIndex>(getValidations({ validations }))

  const validate = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    
    let newErrors = { ...errors };
    newErrors[name] = validations[name](value);
    setErrors(newErrors);
  }

  const submittable = () => {
    let canSubmit = true;

    Object.values(errors).map(value => {
      if (!value.valid) {
        canSubmit = false;
      }
    })

    return canSubmit;
  }

  return { errors, validate, submittable }
}

const getValidations = ({ validations }: ValidationProps) => {
  let validationState: ObjectIndex = {};

  Object.keys(validations).map(key => {
    validationState[key] = {
      valid: true,
      message: ''
    }
  })

  return validationState;
}