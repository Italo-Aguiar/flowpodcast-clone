import { NextPage } from 'next';
import { useState, useContext } from 'react';
import { ValidationContext, UserContext } from '../../contexts';
import { useError } from '../../hooks/useError';

interface LabelProps {
  forHtml: string,
  text: string
}

const Label: NextPage<LabelProps> = ({ forHtml, text }) => {
  return (
    <div className="flex">
      <label htmlFor={forHtml} className="text-black ml-2"><span className="text-red-700">* </span>{text}</label>
    </div>
  )
}

const RegisterForm: React.FC = () => {
  let days = [''];
  let months = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  let years = [''];

  for (let i=1; i<=31; i++) {
    days.push(`${i < 10 ? `0${i}` : `${i}`}`)
  }

  for (let i=2020; i>=1901; i--) {
    years.push(`${i}`);
  }

  const { user, setUser } = useContext(UserContext);
  
  const [formUser, setFormUser] = useState(user)
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const validations = useContext(ValidationContext);
  const { errors, validate, submittable } = useError(validations);

  return (
    <form className="flex flex-col justify-center align-center w-full" 
      onSubmit={event => {
        event.preventDefault();
        console.log('Submitted RegisterForm')
        
        if (submittable()) {
          console.log({ ...formUser, birthday: `${day}/${month}/${year}`})
          setUser({ ...formUser, birthday: `${day}/${month}/${year}`})
        }
      }}
    >
      <h1 className="text-gray-800 text-3xl mb-2 -mt-2">CRIAR CONTA</h1>
      <h1 className="text-gray-600 mb-2 -mt-2"><span className="text-red-700">*</span> Campo obrigatório</h1>
      
      <Label forHtml="firstname" text="Primeiro Nome" />
      <input
        className="text-sm m-1 py-2 px-4 border-1 border-secondary w-full"
        value={formUser.firstName}
        onChange={e => setFormUser({ ...formUser, firstName: e.target.value})}
        id="firstname"
        name="firstname"
        type="text"
        spellCheck={false}
        autoFocus
        required
      />

      <Label forHtml="lastname" text="Último Nome" />
      <input
        className="text-sm m-1 py-2 px-4 border-1 border-secondary w-full"
        value={formUser.lastName}
        onChange={e => setFormUser({ ...formUser, lastName: e.target.value})}
        id="lastname"
        name="lastname"
        type="text"
        spellCheck={false}
        required
      />

      <Label forHtml="username" text="Username" />
      <input
        className="text-sm m-1 py-2 px-4 border-1 border-secondary w-full"
        value={formUser.username}
        onChange={e => setFormUser({ ...formUser, username: e.target.value})}
        id="username"
        name="username"
        type="text"
        spellCheck={false}
        required
      />

      <Label forHtml="password" text="Senha" />
      <input
        className="text-sm m-1 py-2 px-4 border-1 border-secondary w-full"
        value={formUser.password}
        onChange={
          event => {
            console.log('dafuq?')
            console.log(event.target.value)
            console.log(formUser.password)
            console.log(errors)
            setFormUser({ ...formUser, password: event.target.value})
            
            if (!errors.password.valid) {
              validate(event)
            }
          }
        }
        onBlur={e => validate(e)}
        id="password"
        name="password"
        type="password"
        spellCheck={false}
        required
      />
      {!errors.password.valid && <span className="text-xs text-red-600 w-80">{errors.password.message}</span> }

      <Label forHtml="repeatPass" text="Confirmar Senha" />
      <input
        className="text-sm m-1 py-2 px-4 border-1 border-secondary w-full"
        value={formUser.repeatPass}
        onChange={e => setFormUser({ ...formUser, repeatPass: e.target.value})}
        id="repeatPass"
        name="repeatPass"
        type="password"
        spellCheck={false}
        required
      />

      <Label forHtml="email" text="E-mail" />
      <input
        className="text-sm m-1 py-2 px-4 border-1 border-secondary w-full"
        value={formUser.email}
        onChange={
          (event) => {
            setFormUser({ ...formUser, email: event.target.value })

            if (!errors.email.valid) {
              validate(event)
            }
          }
        }
        onBlur={e => validate(e)}
        id="email"
        name="email"
        type="email"
        spellCheck={false}
        required
      />
      {!errors.email.valid && <span className="text-xs text-red-600 w-80">{errors.email.message}</span> }
        
      <Label forHtml="repeatEmail" text="E-mail" />
      <input
        className="text-sm m-1 py-2 px-4 border-1 border-secondary w-full"
        value={formUser.repeatEmail}
        onChange={e => setFormUser({ ...formUser, repeatEmail: e.target.value })}
        id="repeatEmail"
        name="repeatEmail"
        type="email"
        spellCheck={false}
        required
      /> 

      <Label forHtml="birthday" text="Data de nascimento" />
      <div className="flex mb-4" id="birthday">
        <select 
          className="border-1 border-secondary text-black text-md mx-1 p-2" 
          onChange={e => setDay(e.target.value)}
          name="day" 
          id="day" 
          required
        >
          {
            days.map(d => <option className="text-black text-md" value={d}>{d}</option>)
          }
        </select>

        <select 
          className="border-1 border-secondary text-black text-md mx-1 p-2" 
          onChange={e => setMonth(e.target.value)}
          name="month" 
          id="month" 
          required
        >
          {
            months.map(m => <option className="text-black text-md" value={m}>{m}</option>)
          }
        </select>

        <select 
          className="border-1 border-secondary text-black text-md mx-1 p-2" 
          onChange={e => setYear(e.target.value)}
          name="year" 
          id="year" 
          required
        >
          {
            years.map(y => <option className="text-black text-md" value={y}>{y}</option>)
          }
        </select>
      </div>


      <button className={`${!formUser.terms && 'bg-gray-500 text-black'} btn-continuar`} disabled={!formUser.terms} type="submit">CADASTRAR</button>
    </form>
  );
};



export default RegisterForm