import styled from 'styled-components';
import { NavbarBrand } from 'reactstrap';
import * as Colors from '../colors';

export const Brand = styled(NavbarBrand)`
color: white;
:hover {
    color: ${Colors.maroon};
}
`;