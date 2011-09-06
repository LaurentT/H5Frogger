function Car(){
    this._x = null;
    this._y = null;
    this._direction = null;
    this._height = 50;
    this._width = 100;
    this._image = null;
    this._speed = 10;
    
    this.init = function(sprite,direction,posY){
        this._direction = direction;
        this._image = ASSET_MANAGER.getAsset(sprite);
        this._y = posY;
        this.initPosition();
        var speed=Math.floor(Math.random()*11);
        while(speed < 5) {
            speed=Math.floor(Math.random()*11);
        }
        this._speed = speed;
        gGameObjectManager.add(this);
    }
    
    this.initPosition = function() {
        if(this._direction === "RIGHT")
            this._x = -120;
        else
            this._x = gGameObjectManager._canvas.width;
    }
    
    this.update = function(){
        if(this._direction === "RIGHT") {
            this._x += this._speed;
            if(this._x > gGameObjectManager._canvas.width)
                this.initPosition();
        } else {
            this._x -= this._speed;
            if(this._x < -120)
                this.initPosition();
        }
    }
    
    this.draw = function(){
        gGameObjectManager._backBufferContext.drawImage(this._image, this._x, this._y, this._width, this._height);
    }
}