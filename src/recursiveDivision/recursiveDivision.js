function recursiveDivision(grid, startNode, endNode){

let maze = []
let wals = []

//1. All grid is not walls => this is a orginal chamber

gridIsWall(grid);
createBox(maze);
createChamber();

//2. divide chamber in two / more walls with single passage in dandom spot
//3. continue until each chamber has witdh of one




function gridIsWall(grid){
    for(let cell of grid){
        maze.push(cell)
    }

    for(let cell of maze)
    {
        cell.isWall = false;
    }
};


}
export default recursiveDivision