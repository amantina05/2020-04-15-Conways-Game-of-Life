class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }
  makeBoard() {
    let outerArr = [];
    for (let row = 0; row < this.height; row++) {
      let innerArr = [];
      for (let col = 0; col < this.width; col++) {
        innerArr.push(0);
      }
      outerArr.push(innerArr);
    }
    return outerArr;
  }
}
