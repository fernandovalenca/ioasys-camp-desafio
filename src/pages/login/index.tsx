import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router';

import { api } from '../../services/api';

import { LoginWrapper } from './styles';
import logo from '../../assets/icons/logo-light.svg'

import { Header, Input } from "../../components";

export const Login: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  
  const handleSubmit = useCallback(({email, password})=>{
    api.post('/auth/sign-in', {
      email,
      password,
    }).then(response => {

      localStorage.setItem('Auth', JSON.stringify(response.headers));
      localStorage.setItem('Data', JSON.stringify(response.data));

      history.push('/home');
    }).catch(error => {
      console.log(error);
    })

  },[history]);

  return (
    <LoginWrapper>
      <main>
        <Header logo={logo} />
          <Form ref={formRef} initialData={{email: '', password: ''}} onSubmit={handleSubmit}>
            <Input name="email" title="Email" type="email" required />
            <Input name="password" title="Senha" type="password" required >
              <button type="submit">Entrar</button>
            </Input>
          </Form>
      </main>
    </LoginWrapper>
  )
}