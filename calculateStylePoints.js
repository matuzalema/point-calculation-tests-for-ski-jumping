const calculateStylePoints = (styleNotes) => {
	// let notes = ;
	const sortArray = [...styleNotes].sort();
	sortArray.shift();
	sortArray.pop();

	const sum = sortArray.reduce((a, b) => a + b);
	return sum;
};

module.exports = calculateStylePoints; 
