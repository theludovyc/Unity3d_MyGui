class Tield extends Lab{
	protected var length=0;

	function Tield(posX:float, posY:float, width:float, height:float, text:String, length:int, gs:GUIStyle){
		super(posX,posY,width,height,text,gs);
		this.length=length;
	}

	function Tield(posX:float, posY:float, width:float, height:float, text:String, gs:GUIStyle){
		super(posX,posY,width,height,text,gs);
	}

	function Tield(width:float, height:float, text:String, gs:GUIStyle){
		this(0,0,width,height,text,gs);
	}

	function Tield(text:String, gs:GUIStyle){
		this(0,0,0,0,text,gs);
	}

	function Tield(gs:GUIStyle){
		this(0,0,0,0,"",gs);
	}

	function getGui(){
		if(length!=0){
			this.text=GUI.TextField(rect,this.text,length,this.gs);
		}else{
			this.text=GUI.TextField(rect,this.text,this.gs);
		}
	}
}