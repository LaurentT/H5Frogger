function CollisionManager(){
    this._gameObstacleObjects = new Array();
    this._player = null;
    this._collided = false;
    
    this.init = function(){
        this._collided = false;
        return this;
    }

    this.colliding = function(){
        for(i in this._gameObstacleObjects) {
            //horizontal collision top frog with cars
            if(this._player._y >= this._gameObstacleObjects[i]._y && this._player._y < (this._gameObstacleObjects[i]._y +this._gameObstacleObjects[i]._height)){
                return this.horizontalCollision(this._gameObstacleObjects[i]);
            }
            //horizontal collision bottom frog with cars
            if((this._player._y + this._player._height) > this._gameObstacleObjects[i]._y && (this._player._y + this._player._height) <= (this._gameObstacleObjects[i]._y +this._gameObstacleObjects[i]._height)){
                return this.horizontalCollision(this._gameObstacleObjects[i]);
            }
        }
        return false;
    }
    
    this.horizontalCollision = function(obj){
        if(this._player._x >= obj._x && this._player._x < (obj._x + obj._width)){
            this._collided = true;
            return true;
        }
        
        if((this._player._x + this._player._width) >= obj._x && (this._player._x + this._player._width) <= (obj._x + obj._width)){
            this._collided = true;
            return true;
        }
        return false;
    }
    
}