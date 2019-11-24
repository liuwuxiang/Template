function check2(form){
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
function checkNull2(name){
	var ems=document.getElementsByName(name);
	if(ems[0].checked==false){
		return true;
	}
	return false;
}
function checkNull(name){
	var ems=document.getElementsByName(name);
	if(ems[0].value==""){
		return true;
	}
	return false;
}

function setUserCookie(name,password){
	var nameAndPassword = name+"/"+password;
	document.cookie = "User="+ nameAndPassword;
	alert("注册成功,请点击顶部晨曦早餐返回主页！");
}
function setUserStateCookie(state){
	document.cookie = "State="+ state;
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
				setUserStateCookie(1);
			}
			else if((arr[1].indexOf(name) || arr[1].indexOf(password)) && nameAndPassword!=arr[1]){
				alert("账号或密码错误");	
			}
		}  
	}
}