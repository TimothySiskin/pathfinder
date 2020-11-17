function primsMaze(grid, startNode, endNode){

let current = startNode;

let end = endNode;
let maze = [];
let walls = [];

//Random, hight number
let lowestWeight = 200;


//First step of algorithm: all cells must be walls
//Additionaly I added a weight to all grid cells
    for(let values of grid){
    for(let value of values){
        value.isWall = true;
        value.weight = Math.floor(
            Math.random() * 100
            ) +1 ;
    }
}




//secend step: chose a first cell and add it to the maze, next add neighbors to the walls:

current.isWall = false;
end.isWall = false;



primsAlgorithm(current);


//***************************************************************************************************** */

function primsAlgorithm (current) {

    maze.push(current);

    for(let value of current.neighbors){

        walls.push(value)
    
    }

    
    
    
    //third step: 
    
    while(walls.length > 0){
    
        let randomCell = Math.floor(Math.random() * (walls.length))
        let randomWall = walls[randomCell];


        for(let cell of walls){
            if(cell.weight < lowestWeight){

                lowestWeight = cell.weight 

            }
        }

        for(let cell of walls){

            //Cheking if only one cell neighbor is a path

            let neighborPath = 0;

            for(let value of cell.neighbors){
                if(value.isWall === false ){
                    neighborPath++ 
                }
                
            }

            //checking if cell weight is lowest from neighbours and it has only one neighbor that is path element

           if(cell.weight === lowestWeight && neighborPath === 1){

           cell.isWall = false;
           for (let values of cell.neighbors){
               walls.push(values)
           }

           //i must pop cell from walls[]

           walls.pop(walls.indexOf(cell), 1)

        }



        }

    }

// if (!(current.isWall && randomWall.isWall)){

//     randomWall.isWall = false;


// }



    //     if((current.isWall === false && randomWall.isWall !== false) || (current.isWall !== false && randomWall.isWall === false)){

            
    //         randomWall.isWall = false;
    //         walls = [];
    //         for(let value of randomWall.neighbors){
    //             walls.push(value)
    //         }
    
    //         // walls = walls.filter((values) => values !== randomWall)
    //         //         //  .filter((values) => {

    //         //         //     console.log(values)
    //         //         //     return (values.isWall === false);

    //         //         //   });
    //     }
    
        
    
        
    
        
    //     recursion++
    //     if(recursion === 25){

    //         return console.log("zjebałeś")
    //     }
    //     primsAlgorithm(randomWall);
    
    // }





}

}



//*********************************************************************** */



export default primsMaze