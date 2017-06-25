function reformatDate(date){
  let dateTemp = new Date (date);
  let monthTemp = (dateTemp.getMonth()+1) > 9 ? (dateTemp.getMonth()+1) : '0' + (dateTemp.getMonth()+1);
  let dayTemp = dateTemp.getDate() > 9 ? dateTemp.getDate() : '0' + dateTemp.getDate();
}
reformatDate(1496851371222);
	 