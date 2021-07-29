import { Stack } from '@storyofams/react-ui';
import styled from 'styled-components';

export const Form = styled(Stack)`
  [submit-error] {
    color: ${(p) => p.theme.colors.error};
  }

  [submit-success] {
    color: ${(p) => p.theme.colors.success};
  }
`;

export const Input = styled.input`
  background-color: ${(p) => p.theme.colors.white};
  height: 48px;
  width: 100%;
  font-size: 18px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.black};
  border: 1px solid ${(p) => p.theme.colors.grey300};
  padding: 10px 24px;
  border-radius: 8px;
  appearance: none;
  margin-top: 8px;
  margin-bottom: 24px;
  transition: border 0.18s ease-in-out;

  ::placeholder {
    color: ${(p) => p.theme.colors.grey500};
  }

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.grey500};
  }

  &:focus {
    border: 1px solid ${(p) => p.theme.colors.primary500};
  }
`;

export const Textarea = styled.textarea`
  background-color: ${(p) => p.theme.colors.white};
  width: 100%;
  font-size: 18px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.black};
  border: 1px solid ${(p) => p.theme.colors.grey300};
  padding: 10px 24px;
  border-radius: 8px;
  appearance: none;
  margin-top: 8px;
  margin-bottom: 24px;
  transition: border 0.18s ease-in-out;

  ::placeholder {
    color: ${(p) => p.theme.colors.grey500};
  }

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.grey500};
  }

  &:focus {
    border: 1px solid ${(p) => p.theme.colors.primary500};
  }
`;
