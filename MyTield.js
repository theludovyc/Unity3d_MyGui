class MyTield extends Tield{
	protected function setGsText(){
		this.gs.normal.textColor=Color.white;
		this.gs.hover.textColor=Color.white;
		this.gs.active.textColor=Color.white;
		this.gs.alignment=TextAnchor.MiddleLeft;
		this.gs.clipping=TextClipping.Clip;
	}

	protected function setGs(){
		this.setGsText();
		this.setGsBorder(6);
		this.setGsMargin(4);
		this.setGsPadding(3,2,0,0);
	}

	function MyTield(posX:float, posY:float, width:float, height:float, text:String){
		super(posX,posY,width,height,text,GUIStyle());
		this.gs.normal.background=Resources.Load("Tield/tield");
		this.gs.hover.background=Resources.Load("Tield/tieldHover");
		this.gs.active.background=Resources.Load("Tield/tieldActive");
		setGs();
	}

	function MyTield(width:float, height:float, text:String){
		this(0,0,width,height,text);
	}
}