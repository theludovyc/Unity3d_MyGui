class Box extends Lab{
	function Box(posX:float, posY:float, width:float, height:float, text:String, normal:Texture2D, gs:GUIStyle){
		super(posX,posY,width,height,text,gs);
		this.gs.normal.background=normal;
	}
}