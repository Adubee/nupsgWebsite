import React from "react";
import NavBar from "../NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles.css";
import Slogan from "../Slogan";

function Halls({ data }) {
	return (
		<>
			<NavBar />
			<Container className="customContainer ">
				<Row>
					<Col xs={12} md={12} lg={6}>
						{" "}
						<div className="imageContainer">
							<img src={data.image} alt="" />
						</div>
					</Col>

					<Col xs={12} md={12} lg={6}>
						{" "}
						<div className="hallStyles">
							<h1>{data.title}</h1>
							<h2>
								{data.mainPortfolio}: {data.president}{" "}
							</h2>
							<h2>
								{data.assistantPortfolio}: {data.vicePresident}
							</h2>
							<h2>
								{data.assistantPortfolio2} {data.colon} {data.vicePresident2}
							</h2>
						</div>
					</Col>
				</Row>
			</Container>

			<div className="bottomFix">
				<Slogan />
			</div>
		</>
	);
}

export default Halls;
