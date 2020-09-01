import {Cell} from "../Components/Cell/Cell";
import {Grid} from "../Components/Grid/Grid";

 export class GameService {

    private gameGrid: Grid;

constructor() {
    this.gameGrid = new Grid(10, 10);
    this.createExpertGame();
}
public getGrid(){
    return this.gameGrid;
}
private createExpertGame() : void {
    const grid = document.getElementById("grid");
    const gameStatus:HTMLElement = document.createElement("h2");
    document.body.appendChild(gameStatus);
    const length:number = this.gameGrid.getScale()*this.gameGrid.getScale();
    for(let i = 0; i<length; i++) {
        const square:HTMLDivElement = document.createElement("div");
        square.id = i.toString();  
        grid?.appendChild(square);
       // this.OnLeftClick(gameStatus, square, i);
        //this.OnRightClick(i,gameStatus,square);
    }
}

public gameOnLeftClick(cell:Cell, img:string) : void {
    if(cell.getIsBomb()){
        img = '<img src="../../../img/bomb.png"/>'; 
    }
    else
        this.setImage(img, cell);
    
}
public gameOnRightClick(cell:Cell, img:string) : void {
    if(!cell.getIsFlagged() && !cell.getIsRevealed())
        {
            cell.setIsFlagged(true);
            img = '<img src="./img/flag2.0.png" />';
        }
        else if(!cell.getIsRevealed()) {
            img = "";
            cell.setIsFlagged(false);
        }
}
private setImage(img:string , cell: Cell) : void {
    if(cell.getIsBomb()){
        img = '<img src="../../../img/bomb.png"/>'; 
    }
    if(cell.getValue() === 0) {
        img = '<img src="../../../img/pink.png" />';
    }
    else {
        for(let i = 1; i<8; i++) {
            if(cell.getValue() === i) {
                img  = `<img src = "../../../img/${i}.png" />`;
            }
        }
    }
}
private revealAroundRecursion(gameArray: Array<Cell>, i: number, square: any) : void {
    const scale: number = Math.sqrt(gameArray.length);
    if(gameArray[i].getIsBomb()) {
        return;
    }
    if(gameArray[i].getIsRevealed()) {
        return;
    }
    if(gameArray[i].getValue() === 0) {
        this.setImage(gameArray,i,square);
        gameArray[i].setIsRevealed(true);
        if(!gameArray[i].isRightEdge(scale)) {
                this.revealAroundRecursion(gameArray, i+1, document.getElementById((i+1).toString()));
        }
        if(!gameArray[i].isLeftEdge(scale)) {
                this.revealAroundRecursion(gameArray, i-1, document.getElementById((i-1).toString()));
        }
        if(!gameArray[i].isBottomEdge(scale)) {
                this.revealAroundRecursion(gameArray, i+scale, document.getElementById((i+scale).toString()));
        }
        if(!gameArray[i].isTopEdge(scale)) { 
               this.revealAroundRecursion(gameArray, i-scale, document.getElementById((i-scale).toString()));
        }
        if(!gameArray[i].isTopEdge(scale) && !gameArray[i].isLeftEdge(scale)) {
                this.revealAroundRecursion(gameArray, i-(scale+1), document.getElementById((i-(scale+1)).toString()));
        }
        if(!gameArray[i].isBottomEdge(scale) &&!gameArray[i].isRightEdge(scale)) {
                this.revealAroundRecursion(gameArray, i+(scale+1), document.getElementById((i+(scale+1)).toString()));
        }
        if(!gameArray[i].isBottomEdge(scale) && !gameArray[i].isLeftEdge(scale)) {
                this.revealAroundRecursion(gameArray, i+(scale-1), document.getElementById((i+(scale-1)).toString()));
        }
        if (!gameArray[i].isTopEdge(scale) && !gameArray[i].isRightEdge(scale)) {
                this.revealAroundRecursion(gameArray, i-(scale-1), document.getElementById((i-(scale-1)).toString()));
        }
    } else {
        gameArray[i].setIsRevealed(true);
        this.setImage(gameArray,i,square);
        return;
    }
}
private checkForWin(gameArray: Array<Cell>) : string {
    let amountOfFlaggedBombs: number = 0;
    let amountOfRevealedCells: number = 0;
    for(let i = 0; i<gameArray.length; i++) {
        if(gameArray[i].getIsBomb() && gameArray[i].getIsRevealed()) {
            return "You Lose";
        }
        if(!gameArray[i].getIsBomb() && !gameArray[i].getIsRevealed()) {
            return "";
        }
        if(gameArray[i].getIsBomb() && gameArray[i].getIsFlagged()) {
            amountOfFlaggedBombs++;
        }
        if(gameArray[i].getIsRevealed() && !gameArray[i].getIsBomb()) {
            amountOfRevealedCells++;
        }
    }
    if(amountOfFlaggedBombs === 10) {
        return "You win!";
    }
        
    if(amountOfRevealedCells === 90) {
        return "You win!";
    }
    return "";
}

}