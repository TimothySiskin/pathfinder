function primsMaze(grid, startNode, endNode){

let current = startNode;

let end = endNode;
let maze = [];
let walls = [];

let save = 0;




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
end.weight = 0;
maze.push(current);

//console.log(maze)





primsAlgorithm(current);


//***************************************************************************************************** */

function primsAlgorithm (current) {
    
    let lowestWeight = 200;

        for(let value of current.neighbors){

            walls.push(value)     
           
        }

    let randomCell = Math.floor(Math.random() * (walls.length))
    let randomWall = walls[randomCell];

    //third step: 
    
    if(walls.length > 0){


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


                //Coś jest nie tak z tą pętlą, warunek logiczny wydaje się nie łapać wszystkiego

            if(cell.weight === lowestWeight && neighborPath === 1 && cell.isWall){


              
                cell.isWall = false;
                maze.push(cell);

                for (let values of cell.neighbors){
                    walls.push(values)
                    
                }



                

                //removing duplicates from walls array, (Set object will lets you store only unique elements)

                let unique = [...new Set(walls)];
                walls = unique;


               console.log(`to jest wall po usunieciu elementow ktore sa w maze`)
                for(let value of walls){

                   console.log(value)
                }

               
                console.log(`to jest maze`)

                for( let value of maze){
                    console.log(value)

                }

            }


        }

        save++;

        if(save === 50 ){
            //console.log("przekroczono limit")
            return;
        }

        
        for( let value of maze){


            //TEN DZIAŁA

            walls.splice(walls.indexOf(value), 1)


        }

        for(let value of walls){

            if(value.isWall === false){
                walls.splice(walls.indexOf(value), 1)
            }
        }

        current = randomWall;
        primsAlgorithm(current);

    }


}

}



//*********************************************************************** */



export default primsMaze