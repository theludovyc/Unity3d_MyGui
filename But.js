class But extends BoxH{
	protected var press:boolean=false;

	protected var fOnPress:function();
	protected var fUnPress:function();
	protected var fPress:function();

	function But(posX:float, posY:float, width:float, height:float, text:String, normal:Texture2D, gs:GUIStyle){
		super(posX,posY,width,height,text,normal,gs);
	}

	function isPressed():boolean{
		if(press==true){
			return true;
		}
		return false;
	}

	function setOnPressAction(f:function()){
		this.fOnPress=f;
	}

	function setUnPressAction(f:function()){
		this.fUnPress=f;
	}

	function setPressAction(f:function()){
		this.fPress=f;
	}

	protected function onPress(){
		if(this.fOnPress!=null){
			fOnPress();
		}
	}

	protected function unPress(){
		if(this.fUnPress!=null){
			fUnPress();
		}
	}

	private function Press(){
		if(this.fPress!=null){
			fPress();
		}
	}

	private function invTex(){
		if(this.gs.hover.background!=null&&this.gs.active.background!=null){
			var tmp:Texture2D=this.gs.normal.background;
			this.gs.normal.background=this.gs.active.background;
			this.gs.active.background=tmp;
		}
	}

	protected function stayHover(){
		if(GetPlatform.isEditor()||GetPlatform.isComputer()){
			if(Input.GetMouseButtonDown(0)){
				if(press==false){
					press=true;
					invTex();
					onPress();
				}
			}else if(Input.GetMouseButton(0)){
				Press();
			}else if(press==true){
				press=false;
				invTex();
				unPress();
			}
		}

		super();
	}

	protected function exitHover(){
		if(press==true){
			press=false;
			invTex();
			unPress();
		}

		super();
	}

	function getGui(){
		super();
	}
}	