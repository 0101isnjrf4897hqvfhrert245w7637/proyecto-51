var space, spaceImg;
var spaceship, spaceshipImg;
var ovni, ovniImg;
var star, starImg;
var meteroid, meteroidImg

function Preload(){
    spaceImg = loadImage("SpaceBackGround.jpg");
    spaceshipImg = loadImage("SpaceShip.png");
    ovniImg = loadImage("OVNI.png");
    starImg = loadImage("StarPower.png");
    meteroidImg = loadImage("Meteroid.png")
}

function Setup(){
    space.AddImage = ("spaceImg");
    spaceship.AddImage = ("spaceshipImg");
    ovni.AddImage = ("ovniImg");
    star.AddImage = ("starImg");
    meteroid.AddImage = ("meteroidImg");
}

function Draw(){
    CreateCanvas(600,600);
    space = CraeteSprite(600,600);
    spaceship = CraeteSprite(500,300,20,50);
    ovni = CraeteSprite(100,300,10,40);
    star = CraeteSprite(50,120,5,20);
    meteroid = CraeteSprite(25,60,3,10)
}