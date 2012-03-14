function Background(){
    this._tiles= null;
    this._backgroundCanvas = null;
    this._backgroundCanvasContext = null;
    this._Gimage = null;
    this._Timage = null;
    this._Bimage = null;
    this._Simage = null;
    this._Wimage = null;
    
    this.init = function(){
        var canvas = document.getElementById("froggerGame");
        
        this._tiles=[
                 ["W","L","L","L","W","L","L","L","W","L","L","L","W","L","L","L","W","L","L","L"],
                 ["T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T"],
                 ["B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B"],
                 ["S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S"],
                 ["T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T"],
                 ["B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B"],
                 ["S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S"],
                 ["T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T"],
                 ["B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B"],
                 ["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"]
                ];
    
        //Initialize the background buffer
        this._backgroundCanvas = document.createElement("canvas");
        this._backgroundCanvas.width = canvas.width;
        this._backgroundCanvas.height = canvas.height;
        this._backgroundCanvasContext = this._backgroundCanvas.getContext('2d');
        
        //Load images
        this._Gimage = ASSET_MANAGER.getAsset('images/grass.png');
        this._Timage = ASSET_MANAGER.getAsset('images/topRoad.png');
        this._Bimage = ASSET_MANAGER.getAsset('images/bottomRoad.png');
        this._Simage = ASSET_MANAGER.getAsset('images/sand.png');
        this._Limage = ASSET_MANAGER.getAsset('images/water.png');
        
        //parse tiles
        for(var i=0; i<this._tiles.length; i++){
            for(var j=0; j<this._tiles[i].length;j++){
                switch(this._tiles[i][j])
                {
                    case "G":
                        this._backgroundCanvasContext.drawImage(this._Gimage, j*50, i*50);
                        break;
                    case "T":
                        this._backgroundCanvasContext.drawImage(this._Timage, j*50, i*50)
                        break;
                    case "B":
                        this._backgroundCanvasContext.drawImage(this._Bimage, j*50, i*50)
                        break;
                    case "S":
                        this._backgroundCanvasContext.drawImage(this._Simage, j*50, i*50)
                        break;
                    case "W":
                        this._backgroundCanvasContext.drawImage(this._Gimage, j*50, i*50)
                        break;
                    case "L":
                        this._backgroundCanvasContext.drawImage(this._Limage, j*50, i*50)
                        break;
                }
            }
            console.log("created one rowTile");
        }
        gGameObjectManager.add(this);
        return this;
    }
    
    this.draw = function(){
        gGameObjectManager._backBufferContext.drawImage(this._backgroundCanvas,0,0);
    }
}