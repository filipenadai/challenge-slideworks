import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Header, Content, InputForm } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { useToast } from '../../hooks/toast';

const FormPage: React.FC = () => {
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = () => {
    addToast({
      title: 'opa',
      description: 'teste',
    });
  };

  return (
    <Container>
      <Header>
        <h1>Seleção de candidatos</h1>
      </Header>
      <Content>
        <h5>
          Insira o nome e o email do candidato para coloca-lo na fila de espera.
        </h5>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputForm>
            <Input name="name" placeholder="Nome do candidato" />
            <Input name="email" placeholder="Email do candidato" />
          </InputForm>

          <Button type="submit">Enviar</Button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};

export default FormPage;
