export class Cell {
    private id: number;
    private value: number = 0;
    private isBomb: boolean;
    private isRevealed: boolean;
    private isFlagged: boolean;

    constructor(id:number) {
        this.id = id;
        this.isBomb = false;
        this.isRevealed = false;
        this.isFlagged = false;
    }
    public setIsBomb(b: boolean) : void {
        this.isBomb = b;
    }
    public getIsBomb() : boolean {
        return this.isBomb;
    }
    public setIsRevealed(b: boolean) : void {
        this.isRevealed = b;
    }
    public getIsRevealed() : boolean  {
        return this.isRevealed;
    }
    public setIsFlagged(b: boolean) : void  {
        this.isFlagged = b;
    }
    public getIsFlagged() : boolean  {
        return this.isFlagged;
    }
    public setValue(value: number) : void  {
        this.value = value;
    }
    public getValue() : number  { 
        return this.value;
    }
    public setId(id: number) : void  {
        this.id = id;
    }
    public getId()  : number  {
        return this.id;
    }
    public isRightEdge(scale:number) : boolean  {
        return this.id % scale === (scale-1) ? true : false;
    }
    public isLeftEdge(scale:number) : boolean  {
        return this.id % scale === 0 ? true : false;
    }
    public isTopEdge(scale:number) : boolean  {
        return this.id < (scale-1) ? true : false;
    }
    public isBottomEdge(scale:number) : boolean  {
        return this.id >= (Math.pow(scale,2) - scale) ? true : false;
    }
}   

