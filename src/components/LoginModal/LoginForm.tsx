import { useContext, useState } from 'react';
import { NextPage } from 'next'
import { ValidationContext } from '../../contexts';
import { useError } from '../../hooks/useError';
import { hash } from '../../utils';

interface LoginFormProps {
  showDialog: (value: boolean) => void
}

const LoginForm: NextPage<LoginFormProps> = ({ showDialog }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validations = useContext(ValidationContext);
  const { errors, validate, submittable } = useError(validations)

  return (
    <form className="flex flex-col justify-center align-center border-1 border-secondary px-24 py-10"
      onSubmit={event => {
        event.preventDefault();
        console.log('Submitted LoginForm')

        if (submittable()) {
          console.log(`Email: ${username} - Password: ${password} HashPassword: ${hash(password)}`)
        }
      }}
    >
      <h1 className="text-gray-800 font-bold text-2xl mb-2 -mt-2">LOGIN</h1>
      <h3 className="text-gray-500">Preencha com seus dados de cadastro!</h3>
      <input 
        className="text-center text-sm m-1 py-2 px-19 border-1 border-secondary"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="E-mail, Username, CPF ou CNPJ"
        id="username"
        name="username" 
        type="text"
        spellCheck={false}
        autoFocus
        required
      />
      <input 
        className={`text-center text-sm m-1 py-2 px-19 border-1 ${'border-secondary'}`}
        value={password}
        onChange={
          event => {
            setPassword(event.target.value)
            
            if (!errors.password.valid) {
              validate(event);
            }
          }
        }
        onBlur={e => validate(e)}
        placeholder="Senha" 
        id="password"
        name="password" 
        type="password"
        spellCheck={false}
        required 
      />
      {!errors.password.valid && <span className="text-xs text-red-600 w-80">{errors.password.message}</span> }
      <u className="cursor-pointer text-gray-600 text-sm mt-3 mb-1" onClick={() => showDialog(true)}>Esqueceu sua senha?</u>
      <button className="btn-continuar" type="submit">CONTINUAR</button>
    </form>
  );
};

export default LoginForm