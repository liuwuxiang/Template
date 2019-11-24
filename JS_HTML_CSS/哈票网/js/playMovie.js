function name2(name1){
	var parm1=name1;
	var myurl="playMovie.html"+"?"+"name="+parm1;
	open(myurl);
}

function hit(){
	document.getElementById("hit").style.display="block";
	document.getElementById("upcoming").style.display="none";
	document.getElementById("hit1").style.fontWeight="bold";
	document.getElementById("upcoming1").style.fontWeight="normal";
	document.getElementById("hit1").style.fontSize="25px";
	document.getElementById("upcoming1").style.fontSize="20px";
}

function upcoming(){
	document.getElementById("hit").style.display="none";
	document.getElementById("upcoming").style.display="block";
	document.getElementById("hit1").style.fontWeight="normal";
	document.getElementById("upcoming1").style.fontWeight="bold";
	document.getElementById("hit1").style.fontSize="20px";
	document.getElementById("upcoming1").style.fontSize="25px";
}

function find(type){
	
	if(type=="dz"){
		document.getElementById("dz").style.display="block";
		document.getElementById("mx").style.display="none";
		document.getElementById("aq").style.display="none";
		document.getElementById("xj").style.display="none";
		document.getElementById("jl").style.display="none";	
	}
	else if(type=="mx"){
		document.getElementById("dz").style.display="none";
		document.getElementById("mx").style.display="block";
		document.getElementById("aq").style.display="none";
		document.getElementById("xj").style.display="none";
		document.getElementById("jl").style.display="none";	
	}
	else if(type=="aq"){
		document.getElementById("dz").style.display="none";
		document.getElementById("mx").style.display="none";
		document.getElementById("aq").style.display="block";
		document.getElementById("xj").style.display="none";
		document.getElementById("jl").style.display="none";
	}
	else if(type=="xj"){
		document.getElementById("dz").style.display="none";
		document.getElementById("mx").style.display="none";
		document.getElementById("aq").style.display="none";
		document.getElementById("xj").style.display="block";
		document.getElementById("jl").style.display="none";
	}
	else if(type=="jl"){
		document.getElementById("dz").style.display="none";
		document.getElementById("mx").style.display="none";
		document.getElementById("aq").style.display="none";
		document.getElementById("xj").style.display="none";
		document.getElementById("jl").style.display="block";
	}
	else{
		document.getElementById("dz").style.display="block";
		document.getElementById("mx").style.display="block";
		document.getElementById("aq").style.display="block";
		document.getElementById("xj").style.display="block";
		document.getElementById("jl").style.display="block";
	}
}