import { useState } from 'react';
import { NextPage } from 'next';
import RegisterPreForm from './RegisterPreForm';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface FormsModalProps {
  show: boolean
  closeModal: (val: any) => void
}

const FormsModal: NextPage<FormsModalProps> = ({ show, closeModal }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [currentForm, setCurrentForm] = useState(0);
  const showHideClassName = show ? '' : 'hidden'

  const forms = [<><LoginForm showDialog={setShowDialog} /><RegisterPreForm updateForm={setCurrentForm} /></>, <RegisterForm />]

  return (
    <div className={`${showHideClassName} flex fixed-full text-center bg-black bg-opacity-60`}>
      {/* Outside click handler */}
      <div className="fixed-full" onClick={closeModal} />
      <div className="flex z-20 flex-col rounded mx-auto mt-40 mb-auto bg-white w-3/5">
        {/* Modal header */}
        <div className="flex justify-end align-center rounded-t w-full bg-secondary h-7">
          <a className="text-gray-400 text-2xl font-bold mr-2 cursor-pointer" onClick={closeModal}>×</a>
        </div>
        {
          showDialog &&
          /*"Forget password" message */
          <div className="bg-yellow-100 text-left text-yellow-800 mx-8 mt-5 p-4 rounded border-1 border-yellow-200">
            É necessário enviar um e-mail válido para recuperar a senha
          </div> 
        }
        {/* Forms container */}
        <div className="flex justify-around align-center p-10 w-full">
          {
            forms[currentForm]
          }
        </div>
      </div>
    </div>
  );
};

export default FormsModal