function primsMaze(grid, startNode, endNode){

let current = startNode;

let end = endNode;
let maze = [];
let walls = [];
let visited = [];



let recursion = 0;




//First step of algorithm: all cells must be walls

for(let cells of grid){
    for(let value of cells){
        value.isWall = true;
    }
}

//secend step: chose a first cell and add it to the maze, next add neighbors to the walls:

current.isWall = false;
end.isWall = true;

maze.push(current);

        for(let value of current.neighbors){

            walls.push(value)
        
        }



primsAlgorithm(current);


//***************************************************************************************************** */

function primsAlgorithm (current) 
{
 
        //third step: 
        
        if(walls.length > 0){
        

        
            

                //Cheking if only one cell neighbor is a path

                let neighborPath = 0;

                for(let value of current.neighbors){
                    if(value.isWall === false ){
                        neighborPath++ 
                    }
                        
                }

               

                if(neighborPath === 1)
                {

                    current.isWall = false;
                    maze.push(current)
                    for (let values of current.neighbors){
                        walls.push(values)
    
                    }
    
                
                }

                


            

        }

        /****************************************************************************************k */

            


            //removing duplicates from walls array, (Set object will lets you store only unique elements)

            let unique = [...new Set(walls)];
            walls = unique;

            //Removing maze from walls
            
            

           walls =  walls.filter( (element) => {
                return !maze.includes(element)
            })

           

        /**************************************************************************************** */




 /*********************************************************************************************** */

            let randomCell = Math.floor(Math.random() * (walls.length))
            let randomWall = walls[randomCell];

            recursion++;

            if(recursion === 600){
                
                return maze;
            }

             

            primsAlgorithm(randomWall);


    

    }

    end.isWall = false;

    return maze;

}







export default primsMaze