import { useField } from '@unform/core';
import React, { InputHTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  name: string;
  children?: ReactNode;
}

export const Input: React.FunctionComponent<InputProps> = ({title = 'default', children, name, ...props}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  },[fieldName, inputRef, registerField]);

  return (
    <S.InputWrapper>
      <label htmlFor={title} >{title}</label>
      <input id={title} ref={inputRef} defaultValue={defaultValue} {...props}  />
      {children}
    </S.InputWrapper>
  )
}