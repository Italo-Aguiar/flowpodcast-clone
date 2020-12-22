import { useState, useContext } from 'react';
import { NextPage } from 'next';
import { ValidationContext, UserContext } from '../../contexts';
import { useError } from '../../hooks/useError';

interface RegisterPreFormProps {
  updateForm: (value: number) => void
}

const RegisterPreForm: NextPage<RegisterPreFormProps> = ({ updateForm }) => {
  const [email, setEmail] = useState('')
  const [terms, setTerms] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const validations = useContext(ValidationContext);
  const { errors, validate, submittable } = useError(validations);

  return (
    <form className="flex flex-col justify-center align-center border-1 border-secondary px-24 py-10" 
      onSubmit={event => {
        event.preventDefault();
        console.log('Submitted RegisterPreForm')
        
        if (submittable()) {
          setUser({ ...user, email: email, terms: terms })
          console.log(`Email: ${email} - Termos: ${terms}`)
          updateForm(1)
        }
      }}
    >
      <h1 className="text-gray-800 font-bold text-2xl mb-2 -mt-2">CADASTRE-SE</h1>
      <h3 className="text-gray-500">Comece com seu endereço de e-mail!</h3>
      <input 
        className={`text-sm m-1 py-2 px-19 border-1 border-secondary text-center`}
        value={email}
        onChange={
          (event) => {
            setEmail(event.target.value)

            if (!errors.email.valid) {
              validate(event)
            }
          }
        }
        onBlur={e => validate(e)}
        placeholder="Digite seu e-mail" 
        id="email"
        name="email" 
        type="email" 
        spellCheck={false}
        autoFocus
        required
        />
        {!errors.email.valid && <span className="text-xs text-red-600 w-80">{errors.email.message}</span> }
        <div className="mt-2 mb-11 text-gray-600">
          <input 
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)} 
            type="checkbox"
            name="terms"
            id="terms"
          />
          <label htmlFor="terms" className="text-xs ml-2">Concordo com os <a href="/politicas/termos-de-uso" target="_blank" className="font-bold">TERMOS DE SERVIÇO</a></label>
        </div>
      <button className={`${!terms && 'bg-gray-500 text-black'} btn-continuar`} disabled={!terms} type="submit">CADASTRAR</button>
    </form>
  );
};

export default RegisterPreForm