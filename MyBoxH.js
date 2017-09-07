class MyBoxH extends BoxH{
	protected function setGsText(){
		this.gs.normal.textColor=Color.white;
		this.gs.alignment=TextAnchor.MiddleCenter;
		this.gs.richText=true;
	}

	protected function setGs(){
		setGsText();
		setGsBorder(6);
		setGsMargin(4);
	}

	function MyBoxH(posX:float, posY:float, width:float, height:float, text:String, normal:Texture2D){
		super(posX,posY,width,height,text,normal,GUIStyle());
		setGs();
		
		setEnterHover(function (){
			this.gs.normal.textColor=Color.red;
		});

		setExitHover(function (){
			this.gs.normal.textColor=Color.white;
		});
	}

	function MyBoxH(posX:float, posY:float, width:float, height:float, text:String){
		this(posX,posY,width,height,text,Resources.Load("Box/box",Texture2D));
	}

	function MyBoxH(width:float,height:float,text:String){
		this(0,0,width,height,text);
	}

	function MyBoxH(text:String){
		this(0,0,text);
	}
}