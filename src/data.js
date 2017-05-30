//this file generate random data for visualization

const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

export const transactionTypes = [
	"Groceries",
	"Mortgage & Rent",
	"Restaurants",
	"Shopping"
];

const getTransactionType = () => {
	return transactionTypes[
		Math.floor(Math.random() * transactionTypes.length)
	];
};
const generateNodes = nodeCount => {
	let nodes = [];
	for (let index = 0; index < nodeCount; index++) {
		const node = {
			id: index,
			amount: getRandomInt(1, 35),
			transactionType: getTransactionType()
		};
		nodes.push(node);
	}
	return nodes;
};

export const nodes = generateNodes(100);

