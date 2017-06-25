function calculateDaysToNY() {
  let date = new Date();
  let newYear = new Date(date.getFullYear()+1, 0, 1);
  const dayMilis = 24 * 60 * 60 * 1000;
  return Math.ceil((newYear.getTime() - date.getTime()) / dayMilis);
}
calculateDaysToNY()