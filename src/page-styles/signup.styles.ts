import styled from 'styled-components';

import { Container } from '../components/Container';

export const FormContainer = styled(Container)`
	margin-top: 100px;
	margin-bottom: 50px;
	overflow-y: hidden;
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media(min-width: 600px) {
		flex-direciton:row;
	}
`;

export const FlexItem = styled.div`

`;