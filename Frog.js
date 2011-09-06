function Frog(){
    this._x = null;
    this._y = null;
    this._direction = null;
    this._height = 50;
    this._width = 50;
    this._image = null;
    
    this.init = function(){
        this._image = ASSET_MANAGER.getAsset('images/frog.png');
        this.initPosition();
        gGameObjectManager.add(this);
    }
    
    this.initPosition = function() {
        this._x = (gGameObjectManager._canvas.width/2) - this._width;
        this._y = gGameObjectManager._canvas.height - this._height;
    }
    
    this.update = function(){
        if (this._direction === "LEFT")
            this._x -= 50;
        if (this._direction === "RIGHT")
            this._x += 50;
        if (this._direction === "DOWN")
            this._y += 50;
        if (this._direction === "UP")
            this._y -= 50;
        this._direction = null;
    }
    
    this.draw = function(){
        gGameObjectManager._backBufferContext.drawImage(this._image, this._x, this._y, this._width, this._height);
    }
    
    this.keyDown = function(e){
        if (e.keyCode === 37 && this._x > 0)
            this._direction = "LEFT";
        if (e.keyCode === 39 && this._x < (gGameObjectManager._canvas.width - this._width))
            this._direction = "RIGHT";
        if (e.keyCode === 40 && this._y < (gGameObjectManager._canvas.height - this._height))
            this._direction = "DOWN";
        if (e.keyCode === 38 && this._y > 0)
            this._direction = "UP";
    }
}