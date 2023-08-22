import React from "react";
  import NavBar from "../NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles.css";
import Slogan from "../Slogan";



function CoreExecutives({data}) {

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
							<h2>{data.assistantPortfolio}: {data.level}</h2>

							<h3>{data.description}</h3>
						</div>
					</Col>
					<Col xs={12} md={12} lg={6}>
						{" "}
						<div className="imageContainer">
							<img src={data.image} alt="" />
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


export default CoreExecutives;
