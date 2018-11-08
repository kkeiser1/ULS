import * as React from 'react';
import { FooterLink, FooterContainer } from './Footer.styles';
import { Nav } from 'reactstrap';

export const Footer: React.SFC = () => {

	return(
		<FooterContainer>
					<FooterLink href=''>Contact Us</FooterLink>
					<FooterLink href=''>FAQ</FooterLink>
					<FooterLink href=''>Other</FooterLink>
		</FooterContainer>
	);

};