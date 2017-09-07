class MyBut extends But{
	protected function setGsText(){
		this.gs.normal.textColor=Color.white;
		this.gs.alignment=TextAnchor.MiddleCenter;
		this.gs.richText=true;
	}

	protected function setGs(){
		setGsText();
		setGsBorder(6,6,6,4);
		setGsMargin(4);
		setGsPadding(4);
	}

	protected function onPress(){
		this.gs.normal.textColor=Color.yellow;
		super();
	}

	protected function unPress(){
		this.gs.normal.textColor=Color.white;
		super();
	}

	function MyBut(posX:float, posY:float, width:float, height:float, text:String, normal:Texture2D){
		super(posX,posY,width,height,text,normal,GUIStyle());
		setGs();
	}

	function MyBut(posX:float, posY:float, width:float, height:float, text:String){
		this(posX,posY,width,height,text,Resources.Load("But/but"));
		gs.hover.background=Resources.Load("But/butHover");
		gs.active.background=Resources.Load("But/butActive");
	}

	function MyBut(width:float, height:float, text:String){
		this(0,0,width,height,text);
	}

	function MyBut(text:String){
		this(0,0,text);
	}
}