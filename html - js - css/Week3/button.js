function onClickFromJS(id){
	alert('Hi from button ' + id + '. With JS');
}

function onClickBtnConfirm(){
	var txt;
	var r = confirm("Press a button.");
	if (r == true) {
		txt = "You pressed OK";
	} else {
		txt = "You pressed Cancel";
	}
	alert(txt);
}

function changeColor(){
	var divElement1 = document.getElementById("div4");
	var divElement2 = document.getElementById("div5");
	
	var divElement1class = document.getElementById("div4").className;
	var divElement2class = document.getElementById("div5").className;
	
	//alert(divElement1class);
	
	if (divElement1class == "orangeback"){
		divElement1.className = "blueback";
	}else{
		divElement1.className = "orangeback";
	}
	
	if (divElement2class == "fuchsiaback"){
		divElement2.className = "yellowback";
	}else{
		divElement2.className = "fuchsiaback";
	} 
}

var x = 0;
function changeFont(){
	var divElement1 = document.getElementById("div4");
	var divElement2 = document.getElementById("div5");
	
	switch(x){
		case 0:
			divElement1.innerHTML = "Aquí está div 4"
			divElement2.innerHTML = "Aquí está div 5"
			x++;
		 break;
		case 1:
			divElement1.innerHTML = "这是4区"
			divElement2.innerHTML = "这是5区"
			x++;
		 break;
		case 2:
			divElement1.innerHTML = "Вот див 4"
			divElement2.innerHTML = "Вот див 5"
			x++;
		 break;
		case 3:
			divElement1.innerHTML = "Hier ist Div 4"
			divElement2.innerHTML = "Hier ist Div 5"
			x++;
		 break;
		default:
			divElement1.innerHTML = "Here is Div 4"
			divElement2.innerHTML = "Here is Div 5"
			x = 0;
		 break;
	}
}