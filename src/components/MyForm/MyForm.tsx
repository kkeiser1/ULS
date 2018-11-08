import * as React from 'react';
import {
  Form,
  FormGroup,
  Input
} from 'reactstrap';

import { MyButton } from '../MyButton';
import { DropDownContainer } from './MyForm.styles';

export const MyForm: React.SFC = () => {
return(
  <div>
  <DropDownContainer>
    <Form>
      <FormGroup>
        {/* <Label for="exampleEmail">Email</Label> */}
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        {/* <Label for="examplePassword">Password</Label> */}
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      <MyButton>Login</MyButton>
    </Form>
  </DropDownContainer>
</div>
);
}