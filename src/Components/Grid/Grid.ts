import {Cell} from "../Cell/Cell"
export class Grid {
    private scale: number;
    private amountOfBombs: number;
    private gridArray: Array<Cell>;
    
    constructor(scale: number, amountOfBombs: number) {
        this.scale = scale;
        this.amountOfBombs = amountOfBombs;
        this.gridArray = new Array(this.scale*this.scale);
        this.createGrid(this.gridArray,this. amountOfBombs);
    }
    public getGridArray(): Array<Cell> {
        return this.gridArray;
    }
    public getCellFromGrid(index :number) : Cell {
        return this.gridArray[index];
    }
    
    private createGrid(gameArray: Array<Cell>, amountOfB: number) : void {
        for(let i = 0; i<gameArray.length;i++) {
            gameArray[i] = new Cell(i);
            gameArray[i].setId(i);
        }
        this.insertBombs(amountOfB, gameArray);
        this.insertValues(gameArray);
    }
    
    private insertBombs(amountOfB: number, gameArray: Cell[]) : void
    {
        let bombsLeft = amountOfB;
        while(bombsLeft > 0) {
            for(let i = 0; i<gameArray.length; i++) {
                if(bombsLeft>0) {
                    let x = Math.floor(Math.random() * 10)
                    if(x === 0) {
                        bombsLeft--;
                        gameArray[i].setIsBomb(true);
                    }
                }
            } 
        }
    }
    private insertValues(gameArray: Array<Cell>) : void {
        for(let i = 0; i<gameArray.length; i++) {
            if(!gameArray[i].getIsBomb()) {
                let totalBombs = 0;
                if(gameArray[i].getId() > 0 && !gameArray[i].isLeftEdge(this.scale) && gameArray[i - 1].getIsBomb()) {
                    totalBombs++;
                }
                if(!gameArray[i].isRightEdge(this.scale) && gameArray[i + 1].getIsBomb()) {
                    totalBombs++;
                }
                if(!gameArray[i].isTopEdge(this.scale) && gameArray[i - this.scale].getIsBomb()) {
                    totalBombs++;
                }
                if(!gameArray[i].isBottomEdge(this.scale) && gameArray[i + this.scale].getIsBomb()) {
                    totalBombs++;
                }
                if(!gameArray[i].isLeftEdge(this.scale) && !gameArray[i].isTopEdge(this.scale) && gameArray[i - (this.scale+1)].getIsBomb()) {
                    totalBombs++;
                }
                if(!gameArray[i].isRightEdge(this.scale) && !gameArray[i].isTopEdge(this.scale) && gameArray[i - (this.scale-1)].getIsBomb()) {
                    totalBombs++;
                }
                if(!gameArray[i].isLeftEdge(this.scale) && !gameArray[i].isBottomEdge(this.scale) && gameArray[i + (this.scale-1)].getIsBomb()) {
                    totalBombs++;
                }
                if(!gameArray[i].isRightEdge(this.scale) && !gameArray[i].isBottomEdge(this.scale) && gameArray[i + (this.scale+1)].getIsBomb()) {
                    totalBombs++;
                }
                    gameArray[i].setValue(totalBombs);
            }
            else {
                gameArray[i].setValue(666);
            }
                
        }
    }
    public getScale(): number {
        return this.scale;
    }

}
