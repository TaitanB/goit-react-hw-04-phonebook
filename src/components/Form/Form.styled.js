import styled from 'styled-components';

export const FormAddContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border: 1px solid rgb(82 93 143);
  border-radius: 20px;
  background-color: rgb(129 163 233);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  align-items: center;
`;

export const Input = styled.input`
  background-color: rgb(188 200 229);
  border: 1px solid rgb(82 93 143);
  border-radius: 5px;
  padding: 5px;
`;

export const BtnContact = styled.button`
  margin: auto;
  padding: 5px 10px;
  border: 1px solid rgb(82 93 143);
  border-radius: 5px;
  background-color: rgb(179 189 205);
  font-weight: 700;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1),
    0 0 30px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.1),
    0 0 50px rgba(0, 0, 0, 0.1), 0 0 75px rgba(0, 0, 0, 0.1);

  :hover,
  :focus {
    background-color: rgb(82 93 143);
    color: rgb(179 189 205);
    scale: 0.9;
  }
`;
