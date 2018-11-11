import styled from 'styled-components';
import { Button } from 'reactstrap';

import * as Colors from '../colors';

export const MyButton = styled(Button)`
	background-color: ${Colors.maroon};
	border: none;
	:hover {
		background-color: ${Colors.darkMaroon};
	}
`;