import angular from "angular";
import 'angular-right-click';
import { GameService } from "./src/Services/GameService";
import { cellComponent } from "./src/Components/Cell/cell.component"
import { gridComponent } from "./src/Components/Grid/grid.component";
require('angular-right-click');


angular.module('MineSweeper', ['ngRightClick'])
.service('gameService', GameService)
.component('cell-component', new cellComponent)
.component('grid-component', new gridComponent)
