/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const A = styled.a`
  color: ${(props) => props.primary ? '#974b96' : '#000000'};
  text-decoration: ${(props) => props.primary ? 'none' : 'underline'};

  &:hover {
    color: ${(props) => props.primary ? '#623062' : '#974b96'};
    text-decoration: ${(props) => props.primary ? 'none' : 'underline'};    
  }

  &:disabled {
    color: #e1e1e1;
    text-decoration: ${(props) => props.primary ? 'none' : 'underline'};    
  }
`;

export default A;
