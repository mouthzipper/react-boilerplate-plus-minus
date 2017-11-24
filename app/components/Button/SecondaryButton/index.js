import styled from 'styled-components';

const SecondaryButton = styled.button`
  width: 160px;
  height:34px;
  border-radius: 2px;
  cursor: pointer;
  border: solid 1px  #000000;
  color: #000000;
  background-color: #ffffff;
  &:hover {
    color: #974b96;
    border: solid 1px #974b97;
  }
  &:disabled {
    color: #e1e1e1;
    border: solid 1px #e2e2e2;
  }
`;

export default SecondaryButton;
