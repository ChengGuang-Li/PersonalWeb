import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eradicationAnimal from "../../Assets/projects/feralAnimal.png";
import movieAndroid from "../../Assets/projects/movieAndroid.png";
import cm from "../../Assets/projects/CM.png";
import movieApple from "../../Assets/projects/movieApple.jpg";
function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple"> Works</strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={6} className="project-card">
						<ProjectCard
							imgPath={eradicationAnimal}
							isBlog={false}
							title="Eradication Unwanted Animals in VIC"
							description="TTT"
							link="https://github.com/ChengGuang-Li/IE-iteration3Web"
						/>
					</Col>
					<Col md={6} className="project-card">
						<ProjectCard
							imgPath={cm}
							isBlog={false}
							title="Customer Management System"
							description="TTT"
							link="https://github.com/ChengGuang-Li/CustomerManagementWebApp"
						/>
					</Col>
					<Col md={6} className="project-card">
						<ProjectCard
							imgPath={movieAndroid}
							isBlog={false}
							title="Movie Memoir"
							description="TTT"
							link="https://github.com/ChengGuang-Li/MovieMemoir"
						/>
					</Col>
					<Col md={6} className="project-card">
						<ProjectCard
							imgPath={movieApple}
							isBlog={false}
							title="Movie Lover"
							description="TTT"
							link="https://github.com/ChengGuang-Li/FIT5140FinalApp.git"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Projects;
