import React, { PureComponent, PropTypes } from "react";
import * as d3 from "d3";
import data from "./data";
import colorData from "./colors";
const width = window.innerWidth;
const height = window.innerHeight;

class Beans extends PureComponent {
	center = { x: width / 2, y: height / 2 };
	nodes = data;
	colors = colorData;

	componentDidMount() {
		const renderBeans = () => {
			const forceStrength = 0.03;

			let svg = null;
			let beans = null;
			const charge = d => {
				console.log(d);
				return -Math.pow(d.amount, 2) * forceStrength;
			};

			const ticked = () => {
				beans
					.attr("cx", function(d) {
						return d.x;
					})
					.attr("cy", function(d) {
						return d.y;
					});
			};

			let simulation = d3
				.forceSimulation()
				.velocityDecay(0.2)
				.force(
					"x",
					d3.forceX().strength(forceStrength).x(this.center.x)
				)
				.force(
					"y",
					d3.forceY().strength(forceStrength).y(this.center.y)
				)
				.force("charge", d3.forceManyBody().strength(charge))
				.on("tick", ticked);

			simulation.stop();

			const colorCollection = this.colors;

			const fillColor = () => {
				return colorCollection[
					Math.floor(Math.random() * colorCollection.length)
				];
			};

			svg = d3
				.select("#vis")
				.append("svg")
				.attr("width", width)
				.attr("height", height);

			beans = svg.selectAll(".beans").data(this.nodes, function(d) {
				return d.id;
			});

			const bubble = beans
				.enter()
				.append("circle")
				.classed("beans", true)
				.attr("fill", function(d) {
					return fillColor(d.group);
				})
				.attr("stroke", "#888")
				.attr("stroke-width", 2);

			beans = beans.merge(bubble);

			beans.transition().duration(1000).attr("r", function(d) {
				return d.amount;
			});

			simulation.nodes(this.nodes);
			simulation.alpha(1).restart();
		};

		renderBeans();
	}

	render() {
		return (
			<div>
				hello. below is svg
				<div id="vis" />
			</div>
		);
	}
}

export default Beans;
