import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Header, Content, InputForm } from './styles';

import Input from '../../components/Input';

const FormPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Header>
        <h1>My Trello Form</h1>
      </Header>
      <Content>
        <Form ref={formRef} onSubmit={() => alert('opa')}>
          <InputForm>
            <Input name="name" placeholder="Nome do Card" />
            <Input name="email" placeholder="Email do usuário" />
          </InputForm>
        </Form>
      </Content>
    </Container>
  );
};

export default FormPage;
