function check(form){
	var e=form.elements;
	for(var i=0;i<e.length;i++){
		switch(e[i].name){
			
			case "name":
			if(checkNull(e[i].name)){ 
				alert("请输入用户名");
				return false;
			}	
			break;
			
			case "email":
			if(checkNull(e[i].name)){ 
				alert("请输入邮件地址");
				return false;
			}
			break;
			
			case "password":
			if(checkNull(e[i].name)){ 
				alert("请输入密码");
				return false;
			}
			else if(checkLength(e[i].name)){
				alert("密码至少为6位");
				return false;
			}
			break;
			
			case "confirmPassword":
			if(checkNull(e[i].name)){ 
				alert("请输入确认密码");
				return false;
			}
			else if(document.getElementById("password").value!=document.getElementById("confirmPassword").value){
				alert("两次输入的密码不相同");
				return false;
			}
			break;
			
			case "telephone":
			if(checkNull(e[i].name)){ 
				alert("请输入手机号");
				return false;
			}
			if(document.getElementById("telephone").value=="请输入11位手机号"){ 
				alert("请输入手机号");
				return false;
			}
			else if(checkLength2(e[i].name)){
				alert("手机号小于11位");
				return false;
			}
			break;
			
			case "agree":
			if(checkNull3(e[i].name)){ 
				alert("您暂未同意注册协议，无法注册");
				return false;
			}			
			setUserCookie(document.getElementById("name").value,document.getElementById("password").value);
		}
		
	}
}

function myfun1(){
	var telephone=document.getElementById("telephone").value;
	if(telephone=="请输入11位手机号"){
		document.getElementById("telephone").value="";
	}
}

function myfun2(){
	var password=document.getElementById("password").value;
	if(getLength(password)<6){
		document.getElementById("tishi").style.display="block";	
	}
	else{
		document.getElementById("tishi").style.display="none";	
	}
}


function checkNull(name){
	var ems=document.getElementsByName(name);
	if(ems[0].value==""){
		return true;
	}
	return false;
}

function checkLength(name){
	var ems=document.getElementsByName(name);	
	if(getLength(ems[0].value)<6){
		return true;
	}
	return false;
}

function checkLength2(name){
	var ems=document.getElementsByName(name);	
	if(getLength(ems[0].value)<11){
		return true;
	}
	return false;
}

function checkNull3(name){
	var ems=document.getElementsByName(name);
	if(ems[0].checked==false){
		return true;
	}
	return false;
}

function getLength(str) {
	var len=0;
	var source=new String(str);
	var temp;
	for (var i = 0; i < source.length; i++) {
		temp=source.charAt(i);
		if (temp.charCodeAt(0)>255 || temp.charCodeAt(0)<0) {
			len=len+2;
		} else {
			len=len+1;
		}
	}
	return(len);
}

function setUserCookie(name,password){
	var nameAndPassword = name+"/"+password;
	document.cookie = "User="+ nameAndPassword;
	alert("注册成功,请点击顶部哈票网返回主页！");
}

function checkLogin(form){
	var e=form.elements;
	for(var i=0;i<e.length;i++){
		switch(e[i].name){
			case "name":	
			if(checkNull(e[i].name)){ 
				alert("请输入用户名");
				return false;
			}
			break;
			case "password":	
			if(checkNull(e[i].name)){ 
				alert("请输入密码");
				return false;
			}
			break;
			default:
			var name=document.getElementById("name").value;
			var password=document.getElementById("password").value;
			getUserCookie(name,password);
		}
	}
}

function movie(){
	var url=location.href; 
	var tmp1=url.split("?")[1];
	var tmp2=tmp1.split("=")[1];
	var tmp3=tmp1.split(",")[1];
	var movieName=tmp2.split(",")[0];
	var price=tmp3.split("=")[1];
 	document.getElementById("system").innerHTML=movieName;
	document.getElementById("name").value=movieName;
	document.getElementById("price2").value=price;
	document.getElementById("seatContent").value="";
	document.getElementById("seat").value=0;
	document.getElementById("price").value=0;
	for(var i=0;i<=44;i++){
		document.getElementById(i).checked="";
	}
}

function getUserCookie(name,password){
	var ck=document.cookie;
	var arrCookie=ck.split("; ");
	var nameAndPassword = name+"/"+password;
	for(var i=0;i<arrCookie.length;i++){ 
		var arr=arrCookie[i].split("=");
		if("User"==arr[0]){ 
		 	if(nameAndPassword==arr[1]){
				setUserStateCookie('State',1);
			}
			else if((arr[1].indexOf(name) || arr[1].indexOf(password)) && nameAndPassword!=arr[1]){
				alert("账号或密码错误");	
			}
		}  
	}
}

function setUserStateCookie(name,state){
	document.cookie = name+"="+ state;
}

function getUserStaetCookie(){
	var ck=document.cookie;
	var arrCookie=ck.split("; ");
	for(var i=0;i<arrCookie.length;i++){ 
		var arr=arrCookie[i].split("=");
		if("State"==arr[0]){ 
			if("1"==arr[1]){
				document.getElementById("login").style.display="none"; 
				document.getElementById("tishi").style.display="block"
			}
		}
		else{
			document.getElementById("login").style.display="block"; 
			document.getElementById("tishi").style.display="none"	
		}
	}
}

function ticket(movieName,price){
	var parm1=movieName;
	var myurl="ticket.html"+"?"+"name="+parm1+",price="+price;
	window.location.href(myurl);
}

function addSeat(number){
	var seatNumber=number.value;
	var id=document.getElementById(number.id).checked;
	var priceD=Number(document.getElementById("price2").value);
	var seat=Number(document.getElementById("seat").value);
	var seatContent=document.getElementById("seatContent").value;
	var priceZ=Number(document.getElementById("price").value);
	if(id==true){
		document.getElementById("seat").value=seat+1;
		document.getElementById("price").value=priceZ+priceD;
		document.getElementById("seatContent").value=seatContent+","+seatNumber;
	}
	else if(id==false){
		document.getElementById("seat").value=seat-1;
		document.getElementById("price").value=priceZ-priceD;
		document.getElementById("seatContent").value=seatContent.replace(","+seatNumber,"") ;
	}
}

function settlement(){
	var seat=Number(document.getElementById("seat").value);
	var priceZ=Number(document.getElementById("price").value);
	var name=document.getElementById("name").value;
	var seatContent=document.getElementById("seatContent").value;
	var ck=document.cookie;
	var arrCookie=ck.split("; ");
	var arr;
	for(var i=0;i<arrCookie.length;i++){ 
		arr=arrCookie[i].split("=");
	}	
		if(seat!=0 && priceZ!=0){
		if("State"==arr[0] && "1"==arr[1]){ 
			var conf = confirm("确认结算吗？");
			if(conf==true){
				document.getElementById("name2").value=name;
				document.getElementById("seatContent2").value=seatContent;
				document.getElementById("price3").value=priceZ;
				document.getElementById("seat2").value=seat;
				document.getElementById("main").style.display="none";
				document.getElementById("main2").style.display="block";
			}
			else{
				document.getElementById("main").style.display="block";
				document.getElementById("main2").style.display="none";
			}
		}
		else{
			alert("您暂未登录，请先登录！");	
		}
	}
	else{
		alert("您目前暂无选座，请先选座后再结算！");	
	}
}

function pay(name){
	id=name.id;
	if(id=="back"){
		document.getElementById("main").style.display="block";
		document.getElementById("main2").style.display="none";
	}
	else if(id=="pay"){
		alert("支付成功！");
		document.getElementById("name2").value="";
		document.getElementById("seatContent2").value="";
		document.getElementById("price3").value=0;
		document.getElementById("seat2").value=0;
		document.getElementById("seat").value=0;
		document.getElementById("price").value=0;
		document.getElementById("seatContent").value="";
		document.getElementById("main").style.display="block";
		document.getElementById("main2").style.display="none";
		for(var i=0;i<=44;i++){
		document.getElementById(i).checked="";
		}
	}
}