function createTable(rows, columns){
  const table = document.createElement('table');
  let row;
  table.setAttribute('border', '1px');
  table.style = 'text-align: center';
  for (let i = 0; i < rows; i++) {
	  table.appendChild(document.createElement('tr')); 	
    for (let j = 0; j < columns; j++) {
      if (i = 0){
    	  const headerCell = document.createElement('th');
    	  row = table.rows[i];
    	  row.appendChild(headerCell);
    	}else{
    	  const cell = document.createElement('td');
    	  row = table.rows[i];
    	  row.appendChild(cell);
    	}
    }
  }
  document.body.appendChild(table);
}