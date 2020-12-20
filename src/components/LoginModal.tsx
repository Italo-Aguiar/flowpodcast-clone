import React, { useState } from 'react';

interface LoginModalProps {
  show: boolean
  closeModal: (val: any) => void
}

//TODO: implementar form control e validações

const LoginModal = ({ show, closeModal }: LoginModalProps) => {
  const showHideClassName = show ? '' : 'hidden'

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [termos, setTermos] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <form className={showHideClassName} onSubmit={(e) => e.preventDefault}>
      
      <div className="fixed z-10 inset-0 text-center overflow-y-auto bg-black bg-opacity-60">
        <div className="flex h-screen w-screen">
          <div className="flex flex-col rounded mx-auto mt-40 mb-auto bg-white w-3/5">
            {/* Modal header */}
            <div className="flex justify-end align-center rounded-t w-full bg-secondary h-7">
              <div className="text-gray-400 text-2xl font-bold mr-2 cursor-pointer" onClick={closeModal}>
                <a>×</a>
              </div>
            </div>
            {
              showDialog &&
              <div className="bg-yellow-100 text-left text-yellow-800 mx-8 mt-5 p-4 rounded border-1 border-yellow-200">
                É necessário enviar um e-mail válido para recuperar a senha
              </div> 
            }
            <div className="flex justify-around align-center p-10 w-full">
              {/* Login */}
              <div className="flex flex-col justify-center align-center border-1 border-secondary px-24 py-10">
                <h1 className="text-gray-800 font-bold text-2xl mb-2 -mt-2">LOGIN</h1>
                <p className="text-gray-500">Preencha com seus dados de cadastro!</p>
                <input name="username" type="text" placeholder="E-mail, Username, CPF ou CNPJ" className="text-center text-sm m-1 py-2 px-19 border-1 border-secondary"/>
                <input name="password" type="text" placeholder="Senha" className="text-center text-sm m-1 py-2 px-19 border-1 border-secondary"/>
                <u className="cursor-pointer text-gray-600 text-sm mt-3 mb-1" onClick={() => setShowDialog(true)}>Esqueceu sua senha?</u>
                <button className="text-white bg-secondary mx-1 py-1 rounded" type="submit">CONTINUAR</button>
              </div>
              {/* Cadastre-se */}
              <div className="flex flex-col justify-center align-center border-1 border-secondary px-24 py-10">
                <h1 className="text-gray-800 font-bold text-2xl mb-2 -mt-2">CADASTRE-SE</h1>
                <p className="text-gray-500">Comece com seu endereço de e-mail!</p>
                <input name="username" type="email" placeholder="Digite o seu e-mail" className="text-center text-sm m-1 py-2 px-19 border-1 border-secondary"/>
                <div className="mt-2 mb-12">
                  <input type="checkbox"/>
                  <span className="text-gray-600 text-xs ml-2">Concordo com os <a href="/politicas/termos-de-uso" target="_blank" className="font-bold">TERMOS DE SERVIÇO</a></span>
                </div>
                <button className={`text-black ${termos ? 'bg-secondary': 'bg-gray-500'} mx-1 py-1 rounded`} disabled={!termos} type="submit">CADASTRAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </form>
  );
};

export default LoginModal