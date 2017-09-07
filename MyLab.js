class MyLab extends Lab{
	protected function setGsText(){
		this.gs.normal.textColor=Color.white;
		this.gs.alignment=TextAnchor.MiddleCenter;
		this.gs.richText=true;
	}

	function MyLab(posX:float, posY:float, width:float, height:float, text:String){
		super(posX,posY,width,height,text,GUIStyle());
		setGsText();
	}

	function MyLab(width:float, height:float, text:String){
		this(0,0,width,height,text);
	}

	function MyLab(text:String){
		this(0,0,0,0,text);
	}

	function MyLab(posX:float, posY:float, width:float, height:float, normal:Texture2D){
		super(posX,posY,width,height,normal,GUIStyle());
	}
}