//This defines the number of frames per seconds
var FPS = 30;

//This defines the number of milliseconds between frames
var SECONDS_BETWEEN_FRAMES = 1 / FPS;

//This will be the global reference to the game object manager
//The game object manager will have access to every object in the game and process them in the game loop
var gGameObjectManager = null;

var ASSET_MANAGER = new AssetManager().init();

ASSET_MANAGER.queueDownload('images/bluecar.png');
ASSET_MANAGER.queueDownload('images/whitecar.png');
ASSET_MANAGER.queueDownload('images/grass.png');
ASSET_MANAGER.queueDownload('images/topRoad.png');
ASSET_MANAGER.queueDownload('images/bottomRoad.png');
ASSET_MANAGER.queueDownload('images/sand.png');
ASSET_MANAGER.queueDownload('images/water.png');
ASSET_MANAGER.queueDownload('images/frog.png');

//This method will be called when all elements are loaded in the document
function initFrogger() {
    //Initializes the gameObjectManager
    gGameObjectManager = new GameObjectManager().init();
    //Load all game elements we need in the game manager
    background = new Background().init();
    new Car().init("images/bluecar.png", "LEFT", 50);
    new Car().init("images/whitecar.png", "RIGHT", 100);
    
    
    new Car().init("images/bluecar.png", "LEFT", 200);
    new Car().init("images/whitecar.png", "RIGHT", 250);
    
    
    new Car().init("images/bluecar.png", "LEFT", 350);
    new Car().init("images/whitecar.png", "RIGHT", 400);
    
    new Frog().init();
    //Start the gameloop (update/draw)
    gGameObjectManager.startGameLoop();
}

window.onload = function(){
    ASSET_MANAGER.downloadResources(initFrogger);
};