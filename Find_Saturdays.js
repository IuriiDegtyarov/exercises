function calculateSaturdays(a, b) {
for (var year = a; year <= b; year++) {
	var date = new Date(year, 0, 1);
if (date.getDay() === 6 ) {console.log(year);}
}
}
	calculateSaturdays(2001, 2020);
	