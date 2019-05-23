const calculateDistancePoints = (distance, hillSize, kPoint) => {

	let initialPoints = 60;
	if(hillSize === 'mamucia'){
		initialPoints = 120;
	}

	const kPointDistance = distance - kPoint;

	const pointsForDistance = function() {
		if(hillSize==="normal"){
			return 2;
		} else if (hillSize==="large") {
			return 1.8;
		} else if (hillSize==="mamucia"){
			return 1.2;
		}
	};

	const distanceTotalPoints = initialPoints + (pointsForDistance()*kPointDistance);
	return distanceTotalPoints; 

};

module.exports = calculateDistancePoints;