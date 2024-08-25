function Car(color="red", weight=8) {
  this.color = color;
  this.weight = weight;
  this.engineRunning = false;

}

Car.prototype.startEngine = function () {
  this.engineRunning = true;
};
const myCar = new Car("blue", 1)
const yourCar = new Car()
// console.log(myCar);

function Copy() {
  this.some =new Car("yk", 200)
}
Copy.prototype.renameColor = function() {
  this.some.color = "Maloko"
}

const newCopy = new Copy;
newCopy.renameColor()

function Size(width=80, height=60) {
  this.width=width;
  this.height=height
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}


function Position(x=0, y=0) {
  this.x=x;
  this.y=y
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

function ProgramWindow() {
  this.screenSize = new Size(800, 600);
  this.size = new Size();
  this.position = new Position()
}
ProgramWindow.prototype.resize = function(newSize) {
  // this.size.width = param.width >= 1 ? param.width : 1;
  // this.size.height = param.height >= 1 ? param.height : 1;
  if(newSize.width < 1) newSize.width = 1
    if(newSize.height < 1) newSize.height = 1
    if( newSize.width > this.screenSize.width)
      newSize.width = this.screenSize.width - this.position.x
    if( newSize.height > this.screenSize.height)
      newSize.height = this.screenSize.height - this.position.y
    this.size.height = newSize.height
    this.size.width = newSize.width
}
ProgramWindow.prototype.move = function (newPosition) {
  
  if (newPosition.x < 0) newPosition.x = 0;
  if (newPosition.y < 0) newPosition.y = 0;
  
  if (newPosition.x + this.size.width > this.screenSize.width) {
    // console.log("age");
    newPosition.x = this.screenSize.width - this.size.width;
  }
  if (newPosition.y + this.size.height > this.screenSize.height) {
    // console.log("aje");
    newPosition.y = this.screenSize.height - this.size.height;
  }
  this.position.x = newPosition.x;
  this.position.y = newPosition.y;
};

function changeWindow(programWindow) {
  const newSize = new Size(400, 300)
  const newPosition = new Position(100,150)
  
  programWindow.resize(newSize)
  programWindow.move(newPosition)
  
  return programWindow
}



const programWindow = new ProgramWindow();
const newPosition = new Position(710, 525);
programWindow.move(newPosition);
const newSize = new Size(1000, 1000);
programWindow.resize(newSize);

// const programWindow = new ProgramWindow();
// const newSize = new Size(100, 100);
// programWindow.resize(newSize);
// const newPosition = new Position(750, 650);
// programWindow.move(newPosition);


// console.log(programWindow);