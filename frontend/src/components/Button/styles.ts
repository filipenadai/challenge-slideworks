import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #fdfdfd;
  height: 56px;
  border-radius: 10px;
  padding: 0 16px;
  color: #3e6378;
  width: 100%;
  border: 0;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#fdfdfd')};
  }
`;
