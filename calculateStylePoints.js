const calculateStylePoints = (styleNotes) => {
	const min = Math.min(...styleNotes);
	const max = Math.max(...styleNotes);
	const newNotes = styleNotes.filter(note => note != min && note !=max);
	const sum = newNotes.reduce(function(a, b){return a + b});
	return sum;
};

module.exports = calculateStylePoints;
