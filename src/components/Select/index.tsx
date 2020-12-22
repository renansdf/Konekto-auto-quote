import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  type?: string;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  name, children, ...rest
}) => {
  const inputRef = useRef(null);
  const {
    fieldName, defaultValue, registerField, error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <select
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      >
        {children}
      </select>
      {error && (
        <span>{error}</span>
      )}
    </Container>
  );
};

export default Select;
