const hat = '^';
const hole = 'O';

const correctInput = (moveInput) => {
    const move = moveInput.toLowerCase();
    if (move === 'l' || move === "d" || move === "r" || move === "u") {
        return true;
    }
    return false;
}
const hatFound = (array, col, row) => {    
    if (array[row][col] === hat) {
        return true;
    }
    return false;
}

const onHole = (array, col, row) => {
    if (array[row][col] === hole) {
        return true;
    }
    return false;
}

const outSide = (array, col, row) =>{
    if (row <0 ||col <0 || row>array[0].length-1 || col>array.length-1){
        return true;
    }
    return false;
}




module.exports ={hatFound, onHole, correctInput, outSide};