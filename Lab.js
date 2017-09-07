class Lab extends Mg{
	protected var gs:GUIStyle;

	protected var text:String;
	protected var imp:String;

	protected function setGsBorder(i:int,i1:int,i2:int,i3:int){
		if(this.gs!=null){
			this.gs.border.left=i;
			this.gs.border.right=i1;
			this.gs.border.top=i2;
			this.gs.border.bottom=i3;
		}
	}

	protected function setGsBorder(i:int){
		setGsBorder(i,i,i,i);
	}

	protected function setGsMargin(i:int,i1:int,i2:int,i3:int){
		if(this.gs!=null){
			this.gs.margin.left=i;
			this.gs.margin.right=i1;
			this.gs.margin.top=i2;
			this.gs.margin.bottom=i3;
		}
	}

	protected function setGsMargin(i:int){
		setGsMargin(i,i,i,i);
	}

	protected function setGsPadding(i:int,i1:int,i2:int,i3:int){
		if(this.gs!=null){
			this.gs.padding.left=i;
			this.gs.padding.right=i1;
			this.gs.padding.top=i2;
			this.gs.padding.bottom=i3;
		}
	}

	protected function setGsPadding(i:int){
		setGsPadding(i,i,i,i);
	}

	protected function setGsOverflow(i:int,i1:int,i2:int,i3:int){
		if(this.gs!=null){
			this.gs.overflow.left=i;
			this.gs.overflow.right=i1;
			this.gs.overflow.top=i2;
			this.gs.overflow.bottom=i3;
		}
	}

	protected function setGsOverflow(i:int){
		setGsOverflow(i,i,i,i);
	}

	protected function setGsText(){
	}

	protected function setGs(){
	}

	function Lab(posX:float, posY:float, width:float, height:float, text:String, gs:GUIStyle){
		super(posX,posY,width,height);
		this.text=text;
		this.gs=gs;
	}

	function Lab(width:float, height:float, text:String, gs:GUIStyle){
		this(0,0,width,height,text,gs);
	}

	function Lab(text:String, gs:GUIStyle){
		this(0,0,0,0,text,gs);
	}

	function Lab(posX:float, posY:float, width:float, height:float, normal:Texture2D, gs:GUIStyle){
		super(posX,posY,width,height);
		this.gs=gs;
		this.gs.imagePosition=ImagePosition.ImageOnly;
		this.gs.normal.background=normal;
	}

	protected function makeImporter(imp:String){
		this.imp=imp;

		switch(imp[0]){
			case '-':
				this.type=1;
				text=text.Substring(1);
				this.gs.normal.background=Resources.Load(imp,Texture2D);
				break;

			case '&':
				this.type=1;
				text=text.Substring(1);
				this.gs.normal.background=Resources.Load(imp+"/normal", Texture2D);
				break;
		}
	}

	/*
	function setText(text:String){
		if(text[0]=='-'){
			this.type=1;
			text=text.Substring(1);
			setGuiStyle();
			this.gs.normal.background=Resources.Load(text,Texture2D);
		}else if(text[0]=='€'){
			this.type=1;
			text=text.Substring(1);
			setGuiStyle();
			this.gs.normal.background=Resources.Load(text+"/normal", Texture2D);
			this.gs.hover.background=Resources.Load(text+"/hover", Texture2D);
			this.gs.active.background=Resources.Load(text+"/active", Texture2D);
		}else if(text[0]=='&'){
			this.type=1;
			text=text.Substring(1);
			setGuiStyle();
			this.gs.normal.background=Resources.Load(text+"/normal", Texture2D);
		}else if(text[0]=='$'){
			this.type=1;
			setGuiStyle();
		}else{
			this.text=text;
		}
	}
	*/

	function setText(text:String){
		this.text=text;
	}

	function getText():String{
		return this.text;
	}

	function getGui(){
		GUI.Label(rect,text,this.gs);
	}
}