const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

const generateNodes = nodeCount => {
	let nodes = [];
	for (let index = 0; index < nodeCount; index++) {
		const node = {
			id: index,
			radius: getRandomInt(3, 40),
			x: getRandomInt(2, 700),
			y: getRandomInt(2, 400)
		};
		nodes.push(node);
	}
	return nodes;
};

const nodes = generateNodes(120);

export default nodes;
