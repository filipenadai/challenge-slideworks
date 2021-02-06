import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Container, Header, Content, InputForm } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface CreateCardForm {
  name: string;
  email: string;
}

const FormPage: React.FC = () => {
  const { addToast } = useToast();

  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: CreateCardForm) => {
      try {
        formRef.current?.setErrors({});

        setLoading(true);

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório!'),
          email: Yup.string()
            .email('Insira um email válido')
            .required('Email obrigatório!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('card', data);

        setLoading(false);

        addToast({
          title: 'Sucesso no registro',
          description: 'Registro do candidato finalizado com sucesso!',
        });

        formRef.current?.setData({
          name: '',
          email: '',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          addToast({
            title: 'Erro na validação',
            description: 'Verifique se as informações estão corretas',
          });

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          title: 'Erro na criação',
          description: 'Erro ao criar o registro do candidato',
        });

        setLoading(false);
      }
    },
    [addToast],
  );

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

          <Button type="submit" disabled={loading}>
            {loading ? 'Carregando...' : 'Enviar'}
          </Button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};

export default FormPage;
