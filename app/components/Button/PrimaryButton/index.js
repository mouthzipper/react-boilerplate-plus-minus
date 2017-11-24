import styled from 'styled-components';

const PrimaryButton = styled.button`
  width: ${(props) => props.large ? '160px' : '152px'};
  height: ${(props) => props.large ? '44px' : '34px'};
  border-radius: 2px;
  cursor: pointer;
  background-color:  ${(props) => props.inverse ? '#ffffff' : '#974b97'};
  color: ${(props) => props.inverse ? '#974b96' : '#ffffff'};
  border: ${(props) => props.inverse ? 'solid 1px #974b97' : 'none'};
  &:hover {
    background-color: ${(props) => props.inverse ? '#ffffff' : '#623062'};
    color: ${(props) => props.inverse ? '#623062' : '#ffffff'};
    border: ${(props) => props.inverse ? 'solid 1px #623062' : 'none'};
  }
  &:disabled {
    background-color: ${(props) => props.inverse ? '#ffffff' : '#e2e2e2'};
    color: ${(props) => props.inverse ? '##e1e1e1' : '#ffffff'};
    border: ${(props) => props.inverse ? 'solid 1px ##e2e2e2' : 'none'};
  }
`;

export default PrimaryButton;
