const calculateStylePoints = (styleNotes) => {
	const notes = styleNotes;
	const sortArray = styleNotes.sort();
	sortArray.shift();
	sortArray.pop();

	const sum = notes.reduce((a, b) => a + b);
	return sum;
}

module.exports = calculateStylePoints; 
