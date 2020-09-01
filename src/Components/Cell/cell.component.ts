import { Cell } from "./Cell";
import { GameService } from "../../Services/GameService";

export class cellController implements ng.IComponentController {
    public static $inject = ["GameService"];
    public img: string = "";
    private gridLeftClick: any;
    private gridRightClick: any;
    private getCellId: any;
     ;
    constructor(private cell: Cell, private gameService: GameService, ) {
        
    }
    public cellLeftClick() : void {
       this.getCellId(this.cell.getId());
    }
    public cellRightClick() : void {
        this.gridRightClick(this.img, this.cell);
    }

}
export class cellComponent implements ng.IComponentOptions {
    public templateUrl =  "./cell.html";
    public controller = cellController;
    public bindings  = {
        gridLeftClick: "=",
        gridRightClick: "=",
        getCellId: "="
    };

}