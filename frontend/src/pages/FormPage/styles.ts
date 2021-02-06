import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0px;

  h1 {
    font-family: 'Poppins';
    font-weight: 500;
  }
`;

export const Content = styled.div`
  padding: 0 16px;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;

  form {
    margin-top: 24px;
  }
`;

export const InputForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
