function max(n1, n2, n3) {
	if(!isNaN(n1 + n2 + n3)){
		var biggest;
		if(n1 >= n2){
			biggest = n1;
		} else {
		   biggest = n2;
		}
		
		if(n3 >= biggest){
			biggest = n3;
		}
		
		console.log(biggest);
	}
}

max(1,2,1);