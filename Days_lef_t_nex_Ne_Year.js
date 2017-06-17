function calculateDaysToNY() {
	var date = new Date();
	var newYear = new Date(date.getFullYear(), 11, 31);
	var dayMilis = 24 * 60 * 60 * 1000;
	return Math.ceil((newYear.getTime() - date.getTime()) / dayMilis);
};
calculateDaysToNY()