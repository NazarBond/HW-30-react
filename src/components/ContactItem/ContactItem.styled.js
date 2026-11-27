import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
`;

export const ContactInfo = styled.span`
  font-size: 15px;
  color: #1f2937;
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  background-color: #ef4444;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dc2626;
  }
`;
