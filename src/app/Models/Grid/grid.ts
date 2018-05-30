
// Grid model is an extended array prototype to implement a grid
// Which structured [row][columns].
// This model can also check and return the total live nighborhood cells in a grid
export class Grid extends Array  {
    constructor(private _rows: number, private _columns: number) {
        super();
        Object.setPrototypeOf(this, Grid.prototype);
        this._build();
    }

    get getRows(){
        return this._rows;
    }

    get getColumn(){
        return this._columns;
    }

    set setRows(rows){
        this._rows = rows;
    }

    set setColumn(columns){
        this._columns = columns;
    }

    _build() {
        for (let i = 0; i < this._rows; i++) {
            this[i] = [];
        }
    }
    // add up the total values for the surrounding cells
    checkSurroundingsCells(row, column) {
        let totalCells = 0;
        totalCells += this[row - 1][column - 1] || 0; // top left
        totalCells += this[row - 1][column] || 0; // top center
        totalCells += this[row - 1][column + 1] || 0; // top right

        totalCells += this[row][column - 1] || 0; // middle left
        totalCells += this[row][column + 1] || 0; // middle right

        totalCells += this[row + 1][column - 1] || 0; // bottom left
        totalCells += this[row + 1][column] || 0; // bottom center
        totalCells += this[row + 1][column + 1] || 0; // bottom right
        return totalCells;
    }

    // check surronding cells left & right
    checkSituationCells(row, column, rule){
        let situation = 0;

        situation += (this[row][column - 1] || 0); // left
        situation += (this[row][column] || 0) * 2;
        situation += (this[row][column + 1] || 0) * 4; // right

        return rule[situation];
        
    }


}
