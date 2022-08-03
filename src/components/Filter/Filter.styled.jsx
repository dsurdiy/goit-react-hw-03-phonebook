import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;
  text-align: center;
  font-size: 20px;
`;

export const FilterInput = styled.input`
  display: block;
  width: 70%;
  margin: 0 auto;
  margin-top: 10px;
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
