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
            <Col md={4}>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  placeholder="For logging in"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="userPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="userPassword"
                  placeholder="j1doe2p3!ULS"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="userPassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="confirmUserPassword"
                  placeholder="passwords must match"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="userEmail"
              placeholder="with a placeholder"
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

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="addressCity">City</Label>
                <Input type="text" name="city" id="addressCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="addressState">State</Label>
                <Input type="text" name="state" id="addressState" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="addressZip">Zip</Label>
                <Input type="text" name="zip" id="addressZip" />
              </FormGroup>
            </Col>
          </Row>

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

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="billingCity">City</Label>
                <Input type="text" name="city" id="billingCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="billingState">State</Label>
                <Input type="text" name="state" id="billingState" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="billingZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Row>

          
          

          
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


          

          <Row>
          <Col>
          <legend>Pickup</legend>
          <FormGroup check>
            <Row>
            <Col>
            <Label>Day</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Sun
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Mon
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Tue
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Wed
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Thu
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Fri
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Sat
                </Label>
              </FormGroup>
            </Col>

            <Col>
            <Label>Time</Label>
            <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  8am - 10am
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  10am - 12pm
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  12pm - 2pm
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  2pm - 4pm
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  4pm - 6pm
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  6pm - 8pm
                </Label>
              </FormGroup>
            </Col>
            </Row>
            </FormGroup>
          </Col>

          
          <Col>
          <legend>Drop Off</legend>
          <FormGroup check>
            <Row>
            <Col>
            <Label>Day</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Sun
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Mon
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Tue
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Wed
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Thu
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Fri
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  Sat
                </Label>
              </FormGroup>
            </Col>

            <Col>
            <Label>Time</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  8am - 10am
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  10am - 12pm
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  12pm - 2pm
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  2pm - 4pm
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  4pm - 6pm
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio8" />{' '}
                  6pm - 8pm
                </Label>
              </FormGroup>
            </Col>
            </Row>
          </FormGroup>
          </Col>
          </Row>








          <FormGroup>
            <legend>Notes</legend>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Anything we need to know? (Door Code, Unit #, Laundry Location, etc.)"
            />
          </FormGroup>














          <FormGroup>
          <Label for="exampleText">Terms and Conditions</Label>

          </FormGroup>

          <Button>Sign Up</Button>

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
