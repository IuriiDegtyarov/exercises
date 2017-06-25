function calculateSaturdays(a, b) {
  for (let year = a; year <= b; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() === 6 ) {console.log(year);}
  }
}
calculateSaturdays(2001, 2020);
	