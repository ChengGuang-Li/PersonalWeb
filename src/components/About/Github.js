import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
	const colourTheme = {
		background: "transparent",
		text: "#ffffff",
		level0: "#ecd9fc",
		level1: "#c084f5",
		level2: "#b265f6",
		level3: "#b22ff4",
		level4: "#8400b8",
	};

	return (
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
			<h1 classNaem="project-heading" style={{ paddingBottom: "20px" }}>
				Days I <strong className="purple">Code</strong>
			</h1>

			<GitHubCalendar
				username="ChengGuang-Li"
				blockSize={15}
				blockMargin={5}
				fontSize={16}
				blockRadius={7}
				theme={colourTheme}
			/>
		</Row>
	);
}
export default Github;
