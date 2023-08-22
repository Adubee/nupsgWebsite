import NavBar from "../NavBar";

import { Container, Row, Col } from "react-bootstrap";
import "../../styles.css";
import Slogan from "../Slogan";

function Wings({ data }) {


	const meetingElements = data.meetingDays.map((meeting, index) => (
		<h3 key={index}>{meeting.day} - {meeting.time}, {meeting.venue}</h3>
	))


	return (
		<>
			<NavBar />
			<Container className="customContainer ">
				<Row>
					<Col xs={12} md={12} lg={6}>
						{" "}
						<div>
							<h1>{data.title}</h1>
							<h2>{data.mainPortfolio}: {data.president} </h2>
							<h2>{data.assistantPortfolio}: {data.vicePresident}</h2>
							<h2>{data.assistantPortfolio2} {data.colon} {data.vicePresident2}</h2>

							<h3>{data.description}</h3>
							<h3>{data.slogan}</h3>
							<span>{data.slogan2}</span>
						</div>
					</Col>
					<Col xs={12} md={12} lg={6}>
						{" "}
						<div className="imageContainer">
							<img src={data.image} alt="" />
						</div>
					</Col>
				</Row>

				<Row>
					<Col className="meetingDays" xs={12} md={12} lg={12}>
						<h1>Meeting Days</h1>
						{meetingElements}
					</Col>
				</Row>
			</Container>

			<div className="bottomFix">
				<Slogan />
			</div>
		</>
	);
}

export default Wings;
