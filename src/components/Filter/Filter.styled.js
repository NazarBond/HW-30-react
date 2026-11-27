import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-bottom: 18px;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 15px;
  font-weight: 500;
  color: #374151;
`;

export const FilterInput = styled.input`
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
