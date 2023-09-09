import Footer from "./Footer";
import NavBar from "./NavBar";
import Slogan from "./Slogan";
import '../App.css'
import { Col, Row, Container } from "react-bootstrap";

function MainPage() {
	return (
		<>
			<NavBar />

			<div className="background">
				<div className="textContainer">
					<h1>WELCOME</h1>
					<h6 className="flanella">to</h6>
					<h2 className="underlineText">NUPS-G</h2>
					<h2>
						{" "}
						<span>UG LOCAL</span>
					</h2>
				</div>
			</div>

			<div className="devotion">
				<h1>...HAVE YOU HAD YOUR DEVOTION?</h1>
			</div>

			<div className="sectionTwo">
				<img loading="lazy" src="/nupsglogo.png" alt="" />
				<img loading="lazy" src="/presby.png" alt="" />
				<div className="worshipWithUs">
					<h2>
						Worship <span> with us every</span> Sunday
					</h2>
				</div>

				<div id="temp"></div>
			</div>
			<Slogan />

			<div className="sectionTwo sectionFour subgroupTitle">
				<div className="worshipWithUs ">
					<h2>
						<span> Join our</span> wonderful{" "}
						<span>
							<br /> subgroups
						</span>
					</h2>
				</div>
			</div>
			<Slogan />

			<Container>
				<Row className="counselling">
					<Col className="imageCol" xs={12} md={6}>
						<img loading="lazy" src="/counselling.png" alt="" />
					</Col>
					<Col className="imageCol" xs={12} md={6}>
						<div>
							<h2>
								<span>Are you</span> troubled? <br /> <span>Do you need</span>{" "}
								counselling? <br /> <span>We are</span> here{" "}
								<span>for you!</span>
							</h2>
							<h4>Contact our Counselling and Visitation Team</h4>
						</div>
					</Col>
				</Row>
			</Container>

			<div className="sectionTwo sectionThree">
				<img loading="lazy" src="/nupsglogo.png" alt="" />
				<img loading="lazy" src="/presby.png" alt="" />
				<div className="worshipWithUs">
					<h2>
						<span> A</span> family{" "}
						<span>
							like <br /> no other
						</span>
					</h2>
				</div>
			</div>

			<Container>
				<Row className="counselling">
					<Col className="imageCol" xs={12} md={6}>
						<div>
							<h2>
								<span>Having</span> difficulty? <br />{" "}
								<span>We've got you</span> <br /> <span>Join our</span> <br />{" "}
								endowment <span>fund</span>
							</h2>
							<h4>Contact our Welfare Committee</h4>
						</div>
					</Col>
					<Col className="imageCol" xs={12} md={6}>
						<img loading="lazy" src="/welfare.png" alt="" />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default MainPage;
