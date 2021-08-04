import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaBlog } from "react-icons/fa";
import {
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	function scrollHandler() {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	}

	window.addEventListener("scroll", scrollHandler);
	return (
		<Navbar
			expanded={expand}
			fixed="top"
			expand="md"
			className={navColour ? "sticky" : "navbar"}
		>
			<Container>
				<Navbar.Brand href="/">
					<h1 className="purple" style={{ fontSize: "1.2em" }}>
						ChengGuang
					</h1>
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => {
						updateExpanded(expand ? false : "expanded");
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
								<AiOutlineHome style={{ marginBottom: "2px" }} /> Home
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/about"
								onClick={() => updateExpanded(false)}
							>
								<AiOutlineUser style={{ marginBottom: "2px" }} /> About
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/project"
								onClick={() => updateExpanded(false)}
							>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: "2px" }}
								/>{" "}
								Projects
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/resume"
								onClick={() => updateExpanded(false)}
							>
								<CgFileDocument style={{ marginBottom: "2px" }} /> Resume
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								href="https://blogs.soumyajit.tech/"
								target="_blank"
								rel="noreferrer"
							>
								<FaBlog style={{ marginBottom: "2px" }} /> Blogs
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
