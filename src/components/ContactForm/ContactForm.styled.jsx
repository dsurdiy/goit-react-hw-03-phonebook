import styled from 'styled-components';

export const Form = styled.form`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;

  label {
    display: block;
    align-items: center;
    margin-bottom: 15px;
    font-size: 24px;
  }
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  height: 40px;
  border: none;
  outline: 1px solid black;
  border-radius: 10px;
  font-size: 18px;

  :focus {
    outline: 2px solid tomato;
  }
`;

export const AddContactBtn = styled.button`
  display: block;
  width: 50%;
  height: 40px;
  margin: 0 auto;
  border-radius: 10px;
  border: none;
  background-color: tomato;
  font-size: 20px;
  cursor: pointer;
  transition: all 250ms linear;

  :hover,
  :focus {
    background-color: #a33c2a;
    color: #ffffff;
  }
`;
