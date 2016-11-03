
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

function move(obj,attr,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var iSpeed;
		var iSty;
		if(attr=='opacity'){
			iSty=Math.round(parseFloat(getStyle(obj,attr)*100));
		}else{
		iSty=parseInt(getStyle(obj,attr));			
		}
		iTarget-iSty>0?iSpeed=Math.ceil((iTarget-iSty)/8):iSpeed=Math.floor((iTarget-iSty)/8);
		if(iSty==iTarget){
			clearInterval(obj.timer);
		}else{
			if(attr=='opacity'){
					obj.style.opacity=(iSty+iSpeed)/100
					obj.style.filter='alpha(opacity='+(iSty+iSpeed)+')';
			}else{
			obj.style[attr]=iSty+iSpeed+'px';
			}
		}
	},30)

}

function lineMove(obj,attr,iTarget,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var iSpeed;
		var iSty;
		if(attr=='opacity'){
			iSty=Math.round(parseFloat(getStyle(obj,attr)*100));
		}else{
		iSty=parseInt(getStyle(obj,attr));			
		}
		iTarget-iSty>0?iSpeed=Math.ceil((iTarget-iSty)/8):iSpeed=Math.floor((iTarget-iSty)/8);
		if(iSty==iTarget){
			clearInterval(obj.timer);
			if(fn)fn();
		}else{
			if(attr=='opacity'){
					obj.style.opacity=(iSty+iSpeed)/100
					obj.style.filter='alpha(opacity='+(iSty+iSpeed)+')';
			}else{
			obj.style[attr]=iSty+iSpeed+'px';
			}
		}
	},30)

}

function perMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop=true;
		for(var attr in json){
		var iSpeed;
		var iSty;
		if(attr=='opacity'){
			iSty=Math.round(parseFloat(getStyle(obj,attr)*100));
		}else{
		iSty=parseInt(getStyle(obj,attr));			
		}
		json[attr]-iSty>0?iSpeed=Math.ceil((json[attr]-iSty)/8):iSpeed=Math.floor((json[attr]-iSty)/8);
		if(iSty!=json[attr]){
			bStop=false;
		}
		if(attr=='opacity'){
				obj.style.opacity=(iSty+iSpeed)/100
				obj.style.filter='alpha(opacity='+(iSty+iSpeed)+')';
		}else{
			obj.style[attr]=iSty+iSpeed+'px';
			}
		
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fn)fn();
		}

	},30)
}

function getClass(oparent,sClass){
	var ali=oparent.getElementsByTagName('*')
	var aResult=[];
		for(i=0;i<ali.length;i++){
		if(ali[i].className==sClass){
			aResult.push(ali[i]);
		}
	}
				return aResult;		
}