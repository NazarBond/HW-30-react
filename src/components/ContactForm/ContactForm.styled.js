import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 15px;
  font-weight: 500;
  color: #374151;
`;

export const Input = styled.input`
  padding: 10px 12px;
  font-size: 15px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #2563eb;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 16px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background-color: #2563eb;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;
