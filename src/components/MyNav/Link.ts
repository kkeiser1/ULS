import styled from 'styled-components';
import { NavLink } from 'reactstrap';

import * as Colors from '../colors';

export const Link = styled(NavLink)`
color: white;
:hover {
    color: ${Colors.maroon};
}
`;