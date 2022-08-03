import styled from 'styled-components';

export const Contacts = styled.ul`
  width: 90%;
  margin: 0 auto;
  font-size: 20px;
`;

export const ContactsItem = styled.li`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
