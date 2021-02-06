import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #fff;
  color: #666360;
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #adbbad;
      border-color: #adbbad;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #adbbad;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #fff;
    &::placeholder {
      color: #fdfdfd;
    }
  }

  @media (min-width: 700px) {
    & + div {
      margin-left: 16px;
    }
  }
`;
