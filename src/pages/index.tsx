import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "reactstrap";

import { Header } from "../components/Header";
import { Footer } from '../components/Footer';
import { MyButton } from '../components/MyButton';

interface WelcomeProps {
  name: string;
}
const Welcome: React.SFC<WelcomeProps> = () => {
  return (
    <div>
      <Header />
      <Jumbotron>
        <h2>Hello, Laundry!</h2>
				<p>Ready to sign up?</p>
				<MyButton>Get Started</MyButton>
      </Jumbotron>
      <Jumbotron>
        <h2>Who</h2>
				<p>
					Mesmerizing birds step on your keyboard while you're gaming and then 
					turn in a circle so cat snacks bring your owner a dead bird asdflkjaert
					vlkjasntvkjn (sits on keyboard) so hunt by meowing loudly at 5am next 
					to human slave food dispenser.
				</p>
      </Jumbotron>
      <Jumbotron>
        <h2>What</h2>
				<p>
					Favor packaging over toy cough hairball on conveniently placed pants 
					sleep or dream about hunting birds. You are a captive audience while 
					sitting on the toilet, pet me pee in human's bed until he cleans the litter 
					box fish i must find my red catnip fishy fish or stand in doorway, unwilling 
					to chose whether to stay in or go out i am the best.
				</p>
      </Jumbotron>
      <Jumbotron>
        <h2>Where</h2>
				<p>
					Lies down loves cheeseburgers or wake up human for food at 4am cat mojo 
					but i can haz, and crash against wall but walk away like nothing happened. 
					Ignore the squirrels, you'll never catch them anyway. 
				</p>
      </Jumbotron>
      <Jumbotron>
        <h2>How</h2>
				<p>
					With tail in the air meoooow so dream about hunting birds show belly, yet 
					wake up wander around the house making large amounts of noise jump on top of 
					your human's bed and fall asleep again and who's the baby. Chew on cable ooh, 
					are those your $250 dollar sandals?
				</p>
      </Jumbotron>
      <Jumbotron>
        <h2>Wow this is so cool!</h2>
				<p>Please take my money!</p>
				<MyButton>Get Started</MyButton>
      </Jumbotron>

      <Jumbotron>
        <h2>FAQ</h2>
				<ul>
					<li>question</li>
					<ul>
						<li>answer</li>
					</ul>
					<li>question</li>
					<ul>
						<li>answer</li>
					</ul>
					<li>question</li>
					<ul>
						<li>answer</li>
					</ul>
					<li>question</li>
					<ul>
						<li>answer</li>
					</ul>
					<li>question</li>
					<ul>
						<li>answer</li>
					</ul>
				</ul>
      </Jumbotron>
			<Footer />
    </div>
  );
};

export default Welcome;
