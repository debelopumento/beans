import React, { PureComponent, PropTypes } from "react";
import * as d3 from "d3";
import data from "./data";
import colorData from "./colors";

class Beans extends PureComponent {
	center = { x: 470, y: 300 };
	nodes = data;
	colors = colorData;

	componentDidMount() {
		const renderBeans = () => {
			const forceStrength = 0.03;

			let svg = null;
			let beans = null;
			const charge = d => {
				console.log(d);
				return -Math.pow(d.radius, 2) * forceStrength;
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

			const fillColor = function() {
				return colorCollection[
					Math.floor(Math.random() * colorCollection.length)
				];
			};

			svg = d3
				.select("#vis")
				.append("svg")
				.attr("width", 940)
				.attr("height", 600);

			beans = svg.selectAll(".beans").data(this.nodes, function(d) {
				return d.id;
			});

			var bubble = beans
				.enter()
				.append("circle")
				.classed("beans", true)
				.attr("fill", function(d) {
					return fillColor(d.group);
				})
				.attr("stroke", function(d) {
					return d3.rgb(fillColor(d.group)).darker();
				})
				.attr("stroke-width", 2);

			beans = beans.merge(bubble);

			beans.transition().duration(1000).attr("r", function(d) {
				return d.radius;
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
