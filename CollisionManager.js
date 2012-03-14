function CollisionManager(){
    this._gameObstacleObjects = new Array();
    this._player = null;
    this._collided = null;
    this._inWater = null;
    
    this.init = function(){
        this._collided = false;
        this._inWater = false;
        return this;
    }

    this.colliding = function(){
        // This is used to check if the frog is in the water
        xBgPos = this._player._x/50;
        yBgPos = this._player._y/50;
        
        // Checks collision with a moving car
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
        
        // Checks if the frog is in the water
        if(background._tiles[yBgPos][xBgPos] === "L") {
            this._inWater = true;
            return true;
        }
        
        return false;
    }
    
    this.winning = function(){
        xBgPos = this._player._x/50;
        yBgPos = this._player._y/50;
        console.log("Current position of the frog on the background is: " + xBgPos + " and " + yBgPos);
        console.log(background._tiles[yBgPos][xBgPos]);
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