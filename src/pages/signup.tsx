import * as React from "react";
<<<<<<< HEAD
import { Col, Row, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
=======
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
>>>>>>> adds some pkg, fixes the bugs, ty

import { Header } from "../components/Header";
import { MyButton } from "../components/MyButton";
import { SelectState, SelectDay, SelectTime } from "../components/SelectMenu";
import * as Style from "../page-styles/signup.styles";

interface ISignUpPageProps {};

const SignUpPage: React.SFC<ISignUpPageProps> = () => {
  return (
    <div>
      <Header />
      <Style.FormContainer>
        <Form>
          <Style.MyRow>
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
          </Style.MyRow>

          <Style.MyRow>
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  placeholder="For logging in"
                />
              </FormGroup>
            </Col>
          </Style.MyRow>
          <FormGroup>
          <Style.MyRow>
            <Col md={6}>
              <FormGroup>
                <Label for="userPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="userPassword"
                  placeholder="j1doe2p3!ULS"
                />
                <FormText>Must contain at least 8 characters and one uppercase</FormText>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="userPassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="confirmUserPassword"
                  placeholder="j1doe2p3!ULS"
                />
                <FormText>Passwords must match</FormText>
              </FormGroup>
            </Col>
          </Style.MyRow>
          </FormGroup>
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="userEmail"
              placeholder="johndoe@ULS.com"
            />
          </FormGroup>

          <FormGroup>
            <Label for="userPhone">Phone</Label>
            <Input
              type="text"
              name="phone"
              id="userPhone"
              placeholder="3131234567"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleAddress">Pick Up and Delivery Address</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="1234 Main St"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleAddress2">Pick Up and Delivery Address 2</Label>
            <Input
              type="text"
              name="address2"
              id="exampleAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </FormGroup>

          <Style.MyRow>
            <Col md={6}>
              <FormGroup>
                <Label for="addressCity">City</Label>
                <Input type="text" name="city" id="addressCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="addressState">State</Label>
                <SelectState id="addressState"/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="addressZip">Zip</Label>
                <Input type="text" name="zip" id="addressZip" />
              </FormGroup>
            </Col>
          </Style.MyRow>

          <FormGroup check>
            <Input type="checkbox" name="check" id="billingCheck" />
            <Label for="billingCheck" check>
              Is the billing address the same as the pick up and delivery address?
            </Label>
          </FormGroup>

          <FormGroup>
            <Label for="billingAddress">Billing Address</Label>
            <Input
              type="text"
              name="address"
              id="billingAddress"
              placeholder="1234 Main St"
            />
          </FormGroup>

          <FormGroup>
            <Label for="billingAddress2">Billing Address 2</Label>
            <Input
              type="text"
              name="address2"
              id="billingAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </FormGroup>

          <Style.MyRow>
            <Col md={6}>
              <FormGroup>
                <Label for="billingCity">City</Label>
                <Input type="text" name="city" id="billingCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="billingState">State</Label>
                <SelectState id="billingState" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="billingZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Style.MyRow>
          
          <FormGroup>
          <legend>Service</legend>  
            <Label for="exampleText" check>Type</Label>
            <Col sm={10}>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Student
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Resident
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Bag Size</Label>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Regular
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Large
              </Label>
            </FormGroup>
          </Col>
          </FormGroup>
          
          <legend>Subscription</legend>
          <FormGroup check>
          <Label for="exampleText">Billed Monthly</Label>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio3" />{' '}
                Weekly (once a week pickup)
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio3" />{' '}
                Biweekly (twice a week pickup)
              </Label>
            </FormGroup>
          </Col>
          </FormGroup>

          <FormGroup check>
          <Label for="exampleText">Billed Per Service</Label>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio3" />{' '}
                One time (one pickup)
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio3" />{' '}
                Semester service (weekly for 16 weeks)
              </Label>
            </FormGroup>
          </Col>
          </FormGroup>

          <Style.MyRow>
          <Col>
          <legend>Pickup</legend>
          <FormGroup check>
            <Style.ActionRow>
            <Col>
            <Label>Day</Label>
              <SelectDay id="pickUpDay"/>
            </Col>

            <Col>
            <Label>Time</Label>
              <SelectTime id="pickUpTime"/>
            </Col>
            </Style.ActionRow>
            </FormGroup>
          </Col>

          
          <Col>
          <legend>Drop Off</legend>
          <FormGroup check>
            <Style.ActionRow>
            <Col>
            <Label>Day</Label>
              <SelectDay id="dropOffDay"/>
            </Col>

            <Col>
            <Label>Time</Label>
              <SelectTime id="dropOffTime"/>
            </Col>
            </Style.ActionRow>
          </FormGroup>
          </Col>
          </Style.MyRow>

          <FormGroup>
            <legend>Notes</legend>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Anything we need to know? (Door code, laundry location, etc.)"
            />
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Terms and Conditions</Label>

          </FormGroup>

          <MyButton>Sign Up!</MyButton>

          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              I accept*
            </Label>
          </FormGroup>

        </Form>
      </Style.FormContainer>
    </div>
  );
};
export default SignUpPage;
