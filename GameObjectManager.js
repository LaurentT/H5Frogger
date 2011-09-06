function GameObjectManager(){
    //Contains our game objects to be processed in the game loop
    this._gameObjects = new Array();
    //Contains a reference to the canvas
    this._canvas = null;
    //Contains a reference to the canvas' context
    this._context = null;
    //Contains the backbuffer canvas
    this._backBufferCanvas = null;
    //Contains the backbuffer canvas context
    this._backBufferContext = null;
    //Last time the canvas was rendered
    this._lastFrame = new Date().getTime();
    
    this._collisionManager = null;
    
    //Returns the GameObjectManager instance
    this.init = function(){
        //Get the canvas displayed on the page and its context
        this._canvas = document.getElementById("froggerGame");
        this._context = this._canvas.getContext('2d');
        this._collisionManager = new CollisionManager().init();
        
        //OnKeyDown
        document.onkeydown = function(event){gGameObjectManager.keyDown(event);}
        
        //Initialize the backbuffer and its context
        this._backBufferCanvas = document.createElement("canvas");
        this._backBufferCanvas.width = this._canvas.width;
        this._backBufferCanvas.height = this._canvas.height;
        this._backBufferContext = this._backBufferCanvas.getContext('2d');
        
        return this;
    }
    
    this.add = function(obj){
        this._gameObjects.push(obj);
        if(obj instanceof Frog){
            this._collisionManager._player = obj;
        }
        if(obj instanceof Car){
            this._collisionManager._gameObstacleObjects.push(obj);
        }
    }
    
    this.draw = function(){
        if(!this._collisionManager._collided){
            this._backBufferContext.clearRect(0, 0, this._backBufferCanvas.width, this._backBufferCanvas.height);
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
            for(i in this._gameObjects) {
                if(this._gameObjects[i].update)
                    this._gameObjects[i].update();
            }
            if(this._collisionManager.colliding())
                document.getElementById("boom").play();
            
            for(i in this._gameObjects){
                if(this._gameObjects[i].draw)
                    this._gameObjects[i].draw();
            }
            this._context.drawImage(this._backBufferCanvas, 0, 0);
        }
    }
    
    //This starts the game loop
    this.startGameLoop = function(){
        //call the gameObjectManager draw method every SECONDS_BETWEEN_FRAMES
        setInterval(function(){ gGameObjectManager.draw(); },SECONDS_BETWEEN_FRAMES * 1000);
    }
    
    this.keyDown = function(e) {
        for(i in this._gameObjects) {
            if(this._gameObjects[i].keyDown)
                this._gameObjects[i].keyDown(e);
        }
        //When there is a collision reset game by hitting space
        if (this._collisionManager._collided && e.keyCode == 32){
            this._collisionManager._collided = false;
            for(i in this._gameObjects) {
                if(this._gameObjects[i].initPosition)
                    this._gameObjects[i].initPosition();
            }
        }
    }
}