import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiXcode,
	SiIntellijidea,
	SiHeroku,
	SiGithub,
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiIntellijidea />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiXcode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiHeroku />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithub />
			</Col>
		</Row>
	);
}

export default Toolstack;
