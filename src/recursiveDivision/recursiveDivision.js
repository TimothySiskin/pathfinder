function recursiveDivision(grid, startNode, endNode){

let maze = []
let walls = []

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


    function createBox(maze)
    {
        //I must creata a "row of isWall = true" on (0, Y) axis, (X, 0) axis, (max X, Y), (X, max Y)
        
        for(let cell of maze)
        {
            
            if((cell.y === 0))
            {
                cell.isWall = true
            }
            else if ((cell.x === 0))
            {
                cell.isWall = true
            }
            else if (cell.y === (maze.length - 1))
            {
                cell.isWall = true
            }
            else if (cell.x === (maze.length - 1))
            {
                cell.isWall = true
            }
            


            // return (cell.y === 0) ? cell.isWall = true 
            // : (cell.x === 0) ? cell.isWall = true
            // : (cell.y === (maze.length - 1)) ? cell.isWall = true
            // : (cell.x === (maze.length - 1)) ? cell.isWall = true
            // : null

        }

        //Simplify logic with OR ( || )
        
    }
        
    function createChamber()
    {
        
        //I must divide chamber into two seperate chambers, divided by wall with single opening cell
        
    }

    return {maze, walls}
}

export default recursiveDivision