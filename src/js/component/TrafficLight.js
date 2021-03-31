import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		console.log(this.state);
		let redNewClass = "";
		if (this.state.clickedLight == "red") redNewClass = "selected";
		let yellowNewClass = "";
		if (this.state.clickedLight == "yellow") yellowNewClass = "selected";
		let greenNewClass = "";
		if (this.state.clickedLight == "green") greenNewClass = "selected";

		return (
			<div>
				<div id="trafficTop"></div>
				<div id="contenedor">
					<div
						className={"red light " + redNewClass}
						onClick={() =>
							this.setState({ clickedLight: "red" })
						}></div>
					<div
						className={"yellow light " + yellowNewClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}></div>
					<div
						className={"green light " + greenNewClass}
						onClick={() =>
							this.setState({ clickedLight: "green" })
						}></div>
				</div>
			</div>
		);
	}
}
