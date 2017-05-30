//this file generate random data for visualization

const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

const transactionTypes = [
	"Gas & Fuel",
	"Groceries",
	"Pharmacy",
	"Rental Car & Texi",
	"Fee and Charges",
	"Home Phone",
	"Investments",
	"Mortgage & Rent",
	"Uncategorized",
	"Hotel",
	"Air Travel",
	"Electronics & Software",
	"Restaurants",
	"Financial",
	"Fast Food",
	"Auto Insurance",
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

const nodes = generateNodes(110);

export default nodes;
