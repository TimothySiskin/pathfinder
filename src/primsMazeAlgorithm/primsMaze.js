function primsMaze(grid, startNode, endNode){

let current = startNode;

let end = endNode;
let maze = [];
let walls = [];

let recursion = 0;




//First step of algorithm: all cells must be walls

for(let cells of grid){
    for(let value of cells){
        value.isWall = true;
    }
}

//secend step: chose a first cell and add it to the maze, next add neighbors to the walls:

current.isWall = false;
end.isWall = false;



primsAlgorithm(current);


//***************************************************************************************************** */

function primsAlgorithm (current) 
{

        maze.push(current);

        for(let value of current.neighbors){

            walls.push(value)
        
        }

        
        
        
        //third step: 
        
        if(walls.length > 0){
        

        
            for(let cell of walls)
            {

                //Cheking if only one cell neighbor is a path

                let neighborPath = 0;

                for(let value of cell.neighbors){
                    if(value.isWall === false ){
                        neighborPath++ 
                    }
                        
                }

               

                if(neighborPath === 1)
                {

                    cell.isWall = false;
                
                }

                for (let values of cell.neighbors){
                    walls.push(values)

                }



            }

        }

        /****************************************************************************************k */

            //Removing maze from walls
            
            for( let value of maze){

                walls.splice(walls.indexOf(value), 1)

            }


            //removing duplicates from walls array, (Set object will lets you store only unique elements)

            let unique = [...new Set(walls)];
            walls = unique;

            for(let value of walls){

                if(value.isWall === false){
                    walls.splice(walls.indexOf(value), 1)
                }
            }

        /**************************************************************************************** */
            let randomCell = Math.floor(Math.random() * (walls.length))
            let randomWall = walls[randomCell];

            if(recursion === 5){
                return;
            }

             recursion++;


            primsAlgorithm(randomWall);


    }

}







export default primsMaze