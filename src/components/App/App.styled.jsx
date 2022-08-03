import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
  background-color: #f9f7ec;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const AppTitle = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  svg {
    margin-left: 5px;
  }
`;

export const ContactsTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;
