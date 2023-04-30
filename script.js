function createTable() {
    //Write your code here
    let rows = prompt('Input number of rows'); 
	let columns = prompt('Input number of columns');

	let myTable = document.getElementById('myTable');

	for(let row=0;row<rows;row++){
		let tr = document.createElement('tr');
		for(let col=0;col<columns;col++){
			let td = document.createElement('td');
			td.innerText = `Row-${row} Column-${col}`;
			tr.appendChild(td);
		}
		myTable.appendChild(tr);
	}
	
	

	
}
