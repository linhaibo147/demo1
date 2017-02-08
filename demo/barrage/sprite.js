function sprite(name,painter,behaviors){
	
	//为当前的对象添加属性 
	this.name = name;
	//添加绘制器 
	this.painter = painter;
	
	//弹幕的行为
	this.behaviors = behaviors || [];
	
	//弹幕的速度
   this.vx = null;
   
   //弹幕随机出现的位置
   this.rdY = null;
}


sprite.prototype = { 

	//设定更新对象行为的方法  
	update:function(cxt,time) { 

		//遍历行为中的操作方法 
		for(var i=0;i<this.behaviors.length;i++){ 
			this.behaviors[i].execute(this,cxt,time);
		}

	},

	//绘制方法 
	paint:function(context) { 
		//判断 
		if(this.painter !== undefined){ 

			this.painter.paint(this,context);
		}

	},
	
	//随机出现的方法
	random:function(){
				
				return this.rdY =  Math.floor(40 + (Math.random() * (360-40 +1)));
			}



}