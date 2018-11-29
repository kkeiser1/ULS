import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "reactstrap";

import { Header } from "../components/Header";
import { Footer } from '../components/Footer';
import { MyButton } from '../components/MyButton';
import { Center } from '../components/Center';
import { Container } from '../components/Container';

interface WelcomeProps {
  name: string;
}
const Welcome: React.SFC<WelcomeProps> = () => {
  return (
    <div id='Top'>
      <Header />
      <Jumbotron>
				<Center>
					<h2>Hello, Laundry!</h2>
					<p>Ready to sign up?</p>
					<MyButton>Get Started</MyButton>
				</Center>
      </Jumbotron>
      <Jumbotron>
				<Container>
        <h2>Laundry is a problem, we are your solution!</h2>
				<p>
					Ultimate Laundry Solutions can give you more time for the people & things you enjoy by freeing you from the burden of endless laundry. Laundry pick-up and delivery service at your convenience.
				</p>
				<p>
					Your time is valuable, spend it doing things you enjoy (which probably doesn’t include sorting clothes and flipping loads or hanging out at the laundromat). Go ahead, relax, we got this. Hello free time!!
				</p>
				<Center>
					<p>
						SIGN UP NOW
					</p>
				</Center>
				</Container>
      </Jumbotron>
      <Jumbotron>
			<Container>
        <h2>The laundry won't do itself... or will it?</h2>
				<p>
					Choose your service and schedule your pick-up day. We supply you with a laundry bag for your dirty duds. Fill it up - we don’t have a weight limit!
				</p>
				<p>
					Once your bags are stuffed, leave them in the pre-arranged location on pick up day. We will pick it up, and deliver fresh, crisp, folded laundry 2 days later.

				</p>
				<Center>
					<p>
						SIGN UP NOW
					</p>
				</Center>
				</Container>
      </Jumbotron>
      <Jumbotron>
			<Container>
        <h2>Wash, Dry, and Fold</h2>
				<p>
					Choose a regular laundry bag or a large laundry bag. Remember there’s no weight limit, stuff it full and we will wash it up! 
				</p>
				<p>
					We offer weekly, bi-weekly, or semester service. We also offer one-time or limited time service. Express 24 hour service available for an additional fee.
				</p>
				<p>
					Everything is returned two days later. Your laundry is clean, folded, ready to be put away or worn-it is that easy!
				</p>
				<p>
					Your laundry bag is returned ready for your next effortless pick up.
				</p>
				<Center>
					<p>
						SIGN UP NOW
					</p>
				</Center>
				</Container>
      </Jumbotron>
      <Jumbotron id="How">
			<Container>
        <h2>Get Started</h2>
				<p>
					Ready to free yourself from endless, time consuming chore of laundry?
				</p>
				<Center>
					<MyButton>START MY ACCOUNT</MyButton>
				</Center>
				</Container>
      </Jumbotron>
      <Jumbotron>
				<Center>
					<h2>Pricing</h2>
					<div>
                        <h3>Semester (students)</h3>
                            <p>$450 Regular bag, once a week pick up
                            </p>
                            <p>$750 Large bag, once a week pick up
                            </p>
                    </div>
                    <div>
                        <h3>One-Time</h3>
                            <p>$40 Regular bag, single pick up</p>
                            <p>$50 Large bag, single pick up</p>
                    </div>
                    <div>
                        <h3>Weekly</h3>
                            <p>$160 Regular bag, once a week pick up</p>
                            <p>$200 Large bag, once a week pick up</p>
                    </div>
                    <div>
                        <h3>Bi-weekly</h3>
                            <p>$320 Regular, twice a week pick up</p>
                            <p>$400 Large bag, twice a week pick up</p>
                    </div>
				</Center>
      </Jumbotron>

      <Jumbotron>
			<Container id = "FAQ">
					<h2>FAQ</h2>
					<ul>
						<li>How will I be billed?</li>
						<ul>
							<li>We accept cash, check, PayPal, Visa, MasterCard and Discover.</li>
							<li>We bill your credit or debit card monthly or for “One time” and “Semester” orders we will bill prior to start of services. We will email you a detailed invoice each time your card is billed.</li>
						</ul>
						<li>What does the wash/dry/fold service include?</li>
						<ul>
							<li>Pick up and drop off in 48 hours</li>
							<li>Loads are separated into whites, lights and darks</li>
							<li>Washed using professional-grade, odor-free detergent</li>
							<li>Dried on medium heat</li>
							<li>Clothes are folded, wrapped in plastic and placed back in your clean laundry bag for delivery</li>
						</ul>
						<li>Is there a weight limit to my laundry??</li>
						<ul>
							<li>No, there are no weight limits. Put as much of your laundry as you can fit inside of our provided laundry bags, we just ask that you are able to close the bag completely.</li>
						</ul>
						<li>What if there is no time that is convenient for me?</li>
						<ul>
							<li>We want to help you out, so we will do our best to work with your schedule.</li>
						</ul>
						<li>Where is laundry left for pickup/drop-off?</li>
						<ul>
							<li>Your pickup/drop-off location is up to you. It should be a spot protected from the elements if possible. Most customers leave their laundry on a front or back porch, in a garage or with their building manager. We also use common sense and watch the weather. If a storm or blizzard is coming, we’ll contact you and make alternate plans.</li>
						</ul>
						<li>How do I get my laundry bag?</li>
						<ul>
							<li>After you’re signed up, we’ll deliver a laundry bag before your first scheduled pickup.</li>
						</ul>
						<li>How can I get a replacement bag for my damaged laundry bag?</li>
						<ul>
							<li>We will inspect and wash each laundry bag upon arrival, if we find that one of our bags is getting damaged we will replace it for you.</li>
						</ul>
						<li>What if I need my laundry in 24 hours?</li>
						<ul>
							<li>Your laundry services are typically delivered two days after they’re picked up to ensure your laundry is properly processed. However we understand sometimes you need your laundry back in a hurry. 24 hour service is available for an additional fee. Contact us for details.</li>
						</ul>
						<li>What about my bulky items, (ex, comforters, heavy winter gear, ect)?</li>
						<ul>
							<li>We do not offer services for big bulky items like comforter or heavy winter gear.</li>
							<li>We are able to wash your towels and bed sheets as long as they fit into our provided laundry bags.</li>
						</ul>
						<li>Is there an extra charge for stain removal?</li>
						<ul>
							<li>There is no extra charge. If you have heavily stained items just place them in a small shopping bag and put it inside your laundry bag. We will try to remove the stains and apply extra detergent to the heavily stained areas. We do not guarantee stain removal but we will do our best.</li>
						</ul>
						<li>What happens if you lose/damage some garments?</li>
						<ul>
							<li>Your items are handled carefully but mistakes can happen. In the highly unlikely event that your laundry is damaged or lost while in our possession, please notify customer service within 48 hours of the laundry being returned to you. You’ll be promptly reimbursed if it cannot be repaired or located. Unfortunately we cannot be responsible for laundry that is lost or damaged by the weather after it’s delivered to you.</li>
						</ul>
						<li>Do I have to start at the beginning of a semester?</li>
						<ul>
							<li>No you can start right now! We operate year-round; we follow the academic calendar. We do not normally have campus service during major holidays and breaks (such as Winter Break and Easter) or when there are less than four days of classes in a week, unless otherwise requested.</li>
						</ul>
						<li>I don’t live on campus, but I am a student. Can I still use the semester rate?</li>
						<ul>
							<li>Of course! We want to serve all students regardless of whether you live on or off campus. Be sure to use your school email address when you sign up. (We also want to serve faculty, staff and alumni in our service area. We aren’t limiting this amazing serve just to students! We want to serve anyone interested in a pick-up/drop-off laundry service.)</li>
						</ul>
						<li>Oops! I forgot to leave my laundry out on pick up day. Now what?</li>
						<ul>
							<li>Contact Customer Service by calling 313.000.000.  If our drivers are still in your area, we will make every effort to arrange for a pickup</li>
						</ul>
						<li>Oops! I missed my pick up day. Is there a missed pickup fee?</li>
						<ul>
							<li>We will send a text to help make sure you don’t forget. However, if you do forget to leave your laundry as a Semester, weekly or bi-weekly customer, don’t worry about it. If you’re a “One-time “customer we do reserve the right to charge a $20.00 missed pickup fee to cover costs.</li>
						</ul>
						<li>Will my laundry be returned on time if there’s severe weather and the roads are unsafe?</li>
						<ul>
							<li>In the event of severe weather or other natural occurrences, we will return your laundry to you as soon as it’s safe to for our drivers to do so. We will keep you updated to any changes via phone, email and/or text</li>
						</ul>
						<li>Do you provide dry cleaning services?</li>
						<ul>
							<li>Currently, we do not provide dry cleaning services.</li>
						</ul>
					</ul>
			</Container>
      </Jumbotron>
			<Footer />
    </div>
  );
};

export default Welcome;
