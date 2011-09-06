function AssetManager() {
    this._nbrSuccess = null;
    this._nbrError = null;
    this._downloadQueue = null;
    this._cache = null;
    
    this.init = function(){
        this._nbrSuccess = 0;
        this._nbrError = 0;
        this._downloadQueue = [];
        this._cache = {};
        return this;
    }
    
    this.queueDownload = function(path){
        this._downloadQueue.push(path);
    };
    
    this.downloadResources = function(callbackFunction){
        for(var i=0;i<this._downloadQueue.length;i++){
            var imgPath = this._downloadQueue[i];
            var image = new Image();
            image.src = imgPath;
            image.addEventListener('load',function(){
                ASSET_MANAGER._nbrSuccess += 1;
                console.log('INFO: Successfully loaded ' + this.src);
                if(ASSET_MANAGER.isDone()){
                    callbackFunction();
                }
            },false);
            image.addEventListener('error',function(){
                ASSET_MANAGER._nbrError += 1;
                if(ASSET_MANAGER.isDone()){
                    callbackFunction();
                }
            },false);
            ASSET_MANAGER._cache[imgPath] = image;
        }
    };
    
    this.isDone = function(){
        return (this._downloadQueue.length === this._nbrSuccess + this._nbrError);
    };
    
    this.getAsset = function(path){
        return this._cache[path];
    };
}