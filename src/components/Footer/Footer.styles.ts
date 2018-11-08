import styled from 'styled-components';
import { Link } from '../MyNav';

import * as Colors from '../colors';
 
export const FooterLink = styled(Link)`
color: black;
:hover {
    color: ${Colors.maroon};
}
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding: 32px;
`;