function  moveLayerBy(ye,x,y)  {  ye.style.left=(parseInt(ye.style.left)+x)+"px";  ye.style.top=(parseInt(ye.style.top)+y)+"px";  }
		function  getScrollX()  {  return  document.body.scrollLeft;  }
		function  getScrollY()  {  return  document.body.scrollTop;  }
		function  floatIt()  {
			 var  floatOffset=5;
			 var  ye=document.getElementById("floating");
			 if  (typeof(ye.sX)=="undefined")  {  ye.sX=-30;  }
			   if  (typeof(ye.sY)=="undefined")  {  ye.sY=-80;  }
			   var  sx=getScrollX(),  sy=getScrollY();
			   if  (ye.sX!=sx  ||  ye.sY!=sy)  {
				   var  mx=sx>ye.sX?Math.ceil:Math.floor,  my=sy>ye.sY?Math.ceil:Math.floor;
				   var  dx=mx((sx-ye.sX)/floatOffset),  dy=my((sy-ye.sY)/floatOffset);  ye.sX+=dx;  ye.sY+=dy;        moveLayerBy(ye,dx,dy);
			   }
			     setTimeout("floatIt()",50);
				 getCookie();
				 getUserStaetCookie();
		}


function car(){
	 document.getElementById("car").style.display="block";
	 document.getElementById("anniu").style.display="none";
}
function hiddenCar(){
	  document.getElementById("car").style.display="none";
	  document.getElementById("anniu").style.display="block";
}
function sum(price,zujian){
	var id=zujian.id;
	var value=zujian.value;
	var shanpin=document.getElementById("shanpin").value;
	var chk = document.getElementById(id);
	var sum=Number(document.getElementById("price").value);
	var price1=Number(price);
	if(chk.checked){
		sum=sum+price1;
		shanpin=shanpin+","+value;
	document.getElementById("price").value=sum;
	document.getElementById("shanpin").value=shanpin;
	setCookie("price",sum,"shanpin",shanpin);
	}
	else{
		sum=sum-price1;
		shanpin=shanpin.replace(","+value,"") ;
		document.getElementById("price").value=sum;
		document.getElementById("shanpin").value=shanpin;
		setCookie("price",sum,"shanpin",shanpin);
	}
}
var State;
function getUserStaetCookie(){
	var ck=document.cookie;
	var arrCookie=ck.split("; ");
	
	for(var i=0;i<arrCookie.length;i++){ 
		var arr=arrCookie[i].split("=");
		if("State"==arr[0]){ 
			if("1"==arr[1]){
				document.getElementById("login").style.display="none"; 
				document.getElementById("tishi").style.display="block"
				State=1;
			}
		}
	}
}
function setCookie(name,sum,shanpin1,shanpin){
	document.cookie = name + "="+ escape (sum);
	document.cookie = shanpin1 + "="+ shanpin;
}
function getCookie(){
	var ck=document.cookie;
	var arrCookie=ck.split("; ");
	var price=0;
	var shanpin="";
	for(var i=0;i<arrCookie.length;i++){ 
		var arr=arrCookie[i].split("="); 
		//找到名称为userId的cookie，并返回它的值
		if("price"==arr[0]){ 
		price=arr[1]; 
		/*break; */
		} 
		if("shanpin"==arr[0]){
			
			shanpin=arr[1];
			/*break;*/
		}
	}
	document.getElementById("price").value=price;
	document.getElementById('shanpin').value =shanpin;
	
}

function jiesuan(){
	var price=Number(document.getElementById("price").value);	
	var shanpin=document.getElementById("shanpin").value;
	if(price!=0 && shanpin!=""){
		alert("'结算成功！'您购买了："+shanpin+"  总价为："+price+"元");	
		setCookie("price",0,"shanpin","");
	}	
	else{
		alert("您的购物车中目前没有商品，请先添加您要选购的商品！");	
	}
}