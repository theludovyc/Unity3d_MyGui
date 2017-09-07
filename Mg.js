#pragma strict

class Mg{
	protected var rect:Rect;

	function Mg(posX:float, posY:float, width:float, height:float){
		this.rect=Rect(posX,posY,width,height);
	}

	function setLeft(x:float){
		this.rect.x=x;
	}

	function getLeft():float{
		return rect.x;
	}

	function setTop(y:float){
		this.rect.y=y;
	}

	function getTop():float{
		return rect.y;
	}

	function getBot():float{
		return rect.y+rect.height;
	}

	function setRight(x:float){
		this.rect.x=x-rect.width;
	}

	function getRight():float{
		return rect.x+rect.width;
	}

	function getMidX():float{
		return getLeft()+getW()/2;
	}

	function getMidY():float{
		return getTop()+getH()/2;
	}

	function setPos(posX:float, posY:float){
		setLeft(posX);
		setTop(posY);
	}

	function moveX(x:float){
		this.rect.x+=x;
	}

	function moveY(y:float){
		this.rect.y+=y;
	}

	function move(x:float, y:float){
		moveX(x);
		moveY(y);
	}

	function setW(width:float){
		this.rect.width=width;
	}

	function getW():float{
		return rect.width;
	}

	function getMidW():float{
		return rect.width/2;
	}

	function setH(height:float){
		this.rect.height=height;
	}

	function getH():float{
		return rect.height;
	}

	function getMidH():float{
		return rect.height/2;
	}

	function setWH(width:float, height:float){
		setW(width);
		setH(height);
	}

	function moveW(width:float){
		this.rect.width+=width;
	}

	function moveH(height:float){
		this.rect.height+=height;
	}

	function getGui(){
	}

	//Lab extends Mg
	function setText(text:String){
	}

	function getText():String{
		return "";
	}

	//BoxH extends of Box
	function setEnterHover(f:function()){
	}

	function setStayHover(f:function()){
	}

	function setExitHover(f:function()){
	}

	//But extends of BoxH
	function isPressed():boolean{
		return false;
	}

	function setOnPressAction(f:function()){
	}

	function setUnPressAction(f:function()){
	}

	function setPressAction(f:function()){
	}

	//Group extends of Mg
	function getTab():Mg[]{
	}

	function setAll(){
	}

	function setVerLeft(ecart:int){
	}

	function setVerMid(ecart:int){
	}

	function setVerRight(ecart:int){
	}

	function setHorTop(ecart:int){
	}

	function setHorMid(ecart:int){
	}

	function setHorBot(ecart:int){
	}

	//Tog extends of But
	protected function setToggle(b:boolean){
	}

	protected function isToggle():boolean{
		return false;
	}

	protected function setOnAction(f:function()){
	}

	protected function setOffAction(f:function()){
	}

	
}