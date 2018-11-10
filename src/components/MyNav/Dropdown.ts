import styled from 'styled-components';
import { DropdownToggle } from 'reactstrap';
import * as Colors from '../colors';

export const Dropdown = styled(DropdownToggle)`
	color: white;
	:hover {
		color: ${Colors.maroon};
	}
`;