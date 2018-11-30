import * as React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { Header } from "../components/Header";
import * as Style from "../page-styles/signup.styles";

interface ISignUpPageProps {}

const SignUpPage: React.SFC<ISignUpPageProps> = () => {
  return (
    <div>
      <Header />
      <Style.FormContainer>
        <Form>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>First Name</Label>
                <Input type="text" placeholder="John" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Last Name</Label>
                <Input type="text" placeholder="Doe" />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  placeholder="JohnD123"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="j1doe2p3!ULS"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="passwords must match"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="1234 Main St"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input
              type="text"
              name="address2"
              id="exampleAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </FormGroup>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label for="exampleText">Notes</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Anything we need to know? (Door Code, Unit #, Laundry Location, etc.)"
            />
          </FormGroup>
          <Button>Sign Up</Button>
          
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              I agree.
            </Label>
          </FormGroup>
        </Form>
      </Style.FormContainer>
    </div>
  );
};
export default SignUpPage;
