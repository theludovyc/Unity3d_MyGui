class Gr extends Mg{
	var tab:Mg[];

	function Gr(posX:float,posY:float,tab:Mg[]){
		super(posX,posY,0,0);
		this.tab=tab;
	}

	function Gr(tab:Mg[]){
		super(0,0,0,0);
		this.tab=tab;
	}

	function getTab():Mg[]{
		return this.tab;
	}

	function setAll(){
		for(var mg:Mg in tab){
			mg.move(getLeft(),getTop());
		}
	}

	function setVerLeft(ecart:int){
		for(var mg:Mg in tab){
			mg.setPos(getLeft(),getBot());

			if(getW()<mg.getW()){
				setW(mg.getW());
			}
			moveH(mg.getH()+ecart);
		}
	}

	function setVerMid(ecart:int){
		for(var mg:Mg in tab){
			if(getW()<mg.getW()){
				setW(mg.getW());
			}
		}

		for(var mg:Mg in tab){
			mg.setPos(getMidX()-mg.getMidX(),getBot());
			moveH(mg.getH()+ecart);
		}
	}

	function setVerRight(ecart:int){
		for(var mg:Mg in tab){
			if(getW()<mg.getW()){
				setW(mg.getW());
			}
		}

		for(var mg:Mg in tab){
			mg.setRight(getRight());
			mg.setTop(getBot());
			moveH(mg.getH()+ecart);
		}
	}

	function setHorTop(ecart:int){
		for(var mg:Mg in tab){
			mg.setPos(getRight(),getTop());
			moveW(mg.getW()+ecart);
		}
	}

	function setHorMid(ecart:int){
		for(var mg:Mg in tab){
			if(getH()<mg.getH()){
				setH(mg.getH());
			}
		}

		for(var mg:Mg in tab){
			mg.setPos(getRight(),getMidY()-mg.getMidY());
			moveW(mg.getW()+ecart);
		}
	}

	function setHorBot(ecart:int){
		for(var mg:Mg in tab){
			if(getH()<mg.getH()){
				setH(mg.getH());
			}
		}

		for(var mg:Mg in tab){
			mg.setPos(getRight(),getBot()-mg.getH());
			moveW(mg.getW()+ecart);
		}
	}

	function getGui(){
		for(var mg:Mg in tab){
			mg.getGui();
		}
	}
}