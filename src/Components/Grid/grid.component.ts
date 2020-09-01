import { GameService } from "../../Services/GameService";
import { Grid } from "./Grid";
import { Cell } from "../Cell/Cell";
export class gridController implements ng.IComponentController {
    public static $inject = ["GameService"];
    public cells: Cell[];
    constructor(private grid: Grid, private gameService: GameService) {
        this.grid = new Grid(10,10);
        this.cells = this.grid.getGridArray();
    }
    public gridLeftClick(img: string, cell: Cell){
        this.gameService.gameOnLeftClick(cell, img);
    }
    public gridRightClick(img: string, cell: Cell){
        this.gameService.gameOnRightClick(cell, img);
    }
    public getCellId(id:number){
        return id;
    }
}
export class gridComponent implements ng.IComponentOptions {
    public templateUrl =  "./grid.html";
    public controller = gridController;
    public bindings  = {};

}