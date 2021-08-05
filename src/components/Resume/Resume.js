import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Chengguang Li-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
	return (
		<Container fluid className="resume-section">
			<Particle />
			<Container>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank">
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
				<Row className="resume">
					<Col md={6} className="resume-left">
						<h3 className="resume-title"> Education</h3>
						<Resumecontent
							title="Monash University"
							date="2019 - present"
							content={[`Master of Information Technology`]}
						/>

						<Resumecontent
							title="Chengdu College of University of Electronic Science and Technology of China"
							date="2014 - 2018"
							content={[
								`Bachelor of Communication and Information Engineering`,
							]}
						/>
						<h3 className="resume-title">Extracurricular Activities</h3>
						<Resumecontent
							title="Bubble8Up Mall platform"
							date="2021"
							content={[
								"Worked on Creating the Frontend-End of the Website Using Next.js && Javascript",
								`Developed the Shipping Box Size Calculation Function && the Minimum Shipping Fee Calculation Function`,
							]}
						/>
					</Col>
					<Col md={6} className="resume-right">
						<h3 className="resume-title"> Ranks and Achivements</h3>
						<Resumecontent
							title=""
							content={[
								`Top Performance in LeetCode Weekly Contest:  200`,
								`June LeetCode Challenge Badge`,
								`July LeetCode Challenge Badge`,
								`Finished Problems in LeetCode:  260`,
								`Lan Qiao Cup Programming Contest：Third Prize`,
								`The Second Prize Scholarships Twice`,
								`Outstanding Graduates`,
								`CET-6`,
							]}
						/>
					</Col>
				</Row>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank">
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</Container>
	);
}
export default Resume;
