#pragma strict

static function isEditor(){
	if(Application.platform==RuntimePlatform.OSXEditor||Application.platform==RuntimePlatform.WindowsEditor){
		return true;
	}
	return false;
}

static function isComputer(){
	if(Application.platform==RuntimePlatform.OSXPlayer||Application.platform==RuntimePlatform.WindowsPlayer){
		return true;
	}
	return false;
}

static function isPad(){
	if(Application.platform==RuntimePlatform.IPhonePlayer||Application.platform==RuntimePlatform.Android){
		return true;
	}
	return false;
}