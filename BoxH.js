class BoxH extends Box{
	protected var hover:boolean=false;

	protected var fOnHover:function();
	protected var fUnHover:function();
	protected var fHover:function();
	

	function BoxH(posX:float, posY:float, width:float, height:float, text:String, normal:Texture2D, gs:GUIStyle){
		super(posX,posY,width,height,text,normal,gs);
	}

	function setEnterHover(f:function()){
		this.fOnHover=f;
	}

	function setStayHover(f:function()){
		this.fHover=f;
	}

	function setExitHover(f:function()){
		this.fUnHover=f;
	}

	protected function enterHover(){
		if(this.gs.hover.background!=null){
			var tmp:Texture2D=this.gs.normal.background;
			this.gs.normal.background=this.gs.hover.background;
			this.gs.hover.background=tmp;
		}

		if(this.fOnHover!=null){
			fOnHover();
		}
	}

	protected function stayHover(){
		if(this.fHover!=null){
			fHover();
		}
	}

	protected function exitHover(){
		if(this.gs.hover.background!=null){
			var tmp:Texture2D=this.gs.normal.background;
			this.gs.normal.background=this.gs.hover.background;
			this.gs.hover.background=tmp;
		}

		if(this.fUnHover!=null){
			fUnHover();
		}
	}

	function getGui(){
		if(GetPlatform.isEditor()||GetPlatform.isComputer()){
			if(rect.Contains(Event.current.mousePosition)){
				if(hover==false){
					hover=true;
					enterHover();
				}
				stayHover();
			}else{
				if(hover==true){
					hover=false;
					exitHover();
				}
			}
		}

		super();
	}
}