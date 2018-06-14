//getSelect();

//function getSelect(){
	 var str
	if (window.getSelection){
		console.log('1');
		str = window.getSelection().toString();
	}else if (document.getSelection){
		console.log('2');
		str = document.getSelection().toString();
	}else {
		console.log('3');
		str = document.selection.createRange().text;

	}
	 var foo= str;foo;
	
//