import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "reactstrap";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MyButton } from "../components/MyButton";
import { Container } from "../components/Container";
import { IUserProps } from "../definitions";

import * as MyNav from "../components/MyNav";
import { Center } from "../components/Center";
import { IOrderProps } from "../definitions/IOrderProps";

interface IDashboardProps {
  order: IOrderProps;
  user: IUserProps;
}

const Dashboard: React.SFC<IDashboardProps> = (props: IDashboardProps) => {
  return (
    <div>
      <Header />

      <Jumbotron>
        <Container>
          <h2>Welcome, {props.user.fname}!</h2>
          <h3>
            Next {props.order.action}: {props.order.time} on {props.order.date}
          </h3>
        </Container>
      </Jumbotron>
      <Jumbotron>
        <Container>
          <h2>History</h2>
          <h3>TODO: Build Table</h3>
        </Container>
      </Jumbotron>
      <Jumbotron>
        <Container>
          <h2>Subscription</h2>
          <p>Type: {props.order.subscription}</p>
          <p>Bag Size: {props.order.bagSize}</p>
          <p>
            Pickup: {props.order.weekday} between {props.order.time}
          </p>
          <p>
            Drop Off: {props.order.weekday} between {props.order.time}
          </p>
          <MyButton>Edit</MyButton>
        </Container>
      </Jumbotron>
      <Jumbotron>
        <Container>
          <h2>User Info</h2>
          <p>
            Name: {props.user.fname} {props.user.lname}
          </p>
          <p>Username: {props.user.username}</p>
          <p>Phone Number: {props.user.phone}</p>
          <p>Email: {props.user.email}</p>
          <p>Address: {props.user.billingAddress}</p>
        </Container>
      </Jumbotron>

      <Footer />
    </div>
  );
};

Dashboard.defaultProps = {
  order:{
  action: "Pickup",
  time: "4pm - 6pm",
  date: "Dec. 5th",
  address: "123 Easy St., Ypsilanti",
  subscription: "Weekly",
  bagSize: "Regular",
  weekday: "Thu"
  },
  user: {
    fname: "React",
    lname: "World",
    username: "123React",
    email: "123react@aol.com",
    billingAddress: "123 Easy St., Ypsilanti",
    phone: 123456789
  }
};
export default Dashboard;
