function reformatDate(date){
	var dateTemp = new Date (date);
  	var monthTemp = (dateTemp.getMonth()+1) > 9 ? (dateTemp.getMonth()+1) : '0' + (dateTemp.getMonth()+1);
  	var dayTemp = dateTemp.getDate() > 9 ? dateTemp.getDate() : '0' + dateTemp.getDate();
	}	
	 reformatDate(1496851371222);
	 