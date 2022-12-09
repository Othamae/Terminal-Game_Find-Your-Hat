const prompt = require('prompt-sync')({ sigint: true });
const {hatFound, onHole, correctInput, outSide} = require('./utils')

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let gameOver = false;

class Field {
    constructor() {
        this._field = [];
        this._x = 0;
        this._y = 0;
    }
    print() {
        for (let i = 0; i < this._field.length; i++) {
            console.log(this._field[i].join(""));
        }
    }
    generateField(row, col) {
        if (typeof col != 'number' || typeof row != 'number' || col <= 0 || row <= 0) {
            throw error('ERROR: `row` and `col` must be a number greater than 0')
        } else {
            let field = []
            const cells = col * row;
            //Creating field
            for (let i = 0; i < cells; i++) {
                field.push(fieldCharacter);
            }
            //Setting holes in field
            let holes = []
            for (let i = 0; i < cells / 5; i++) {
                holes.push(Math.floor(Math.random() * cells));
            }
            for (let i = 0; i < holes.length; i++) {
                field[holes[i]] = hole;
            }
            //Setting hat
            const hatPosition = Math.floor(Math.random() * cells);
            field[hatPosition] = hat;
            //Setting userStartPosition
            let userStartPosition = null
            while (!userStartPosition || userStartPosition === hatPosition) {
                userStartPosition = Math.floor(Math.random() * cells);
            }
            field[userStartPosition] = pathCharacter;
            //Setting array
            let array = [];
            for (let i = 0; i< row; i++) {
                array[i] = []
                for(let j=0; j< col; j++){                    
                    array[i][j]=field.shift()                    
                }
            }            
            this._field = array;
            
            //Setting user Position
            let userCell = this._field.find(f=> f.includes(pathCharacter))            
            let userRow = this._field.indexOf(userCell)
            let userCol = this._field[userRow].indexOf(pathCharacter)
            this._x = userCol;
            this._y = userRow;
        }
    }
    //Getter
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    //Setter
    set x(newX) {
        this._x = newX;
    }
    set y(newY) {
        this._y = newY;
    }
    
    //GAME
    play() {
        this.print()
        while (!gameOver) {
            console.log('What direction do you choose? \n LEFT  -> l\n RIGHT -> r\n DOWN  -> d\n UP    -> u \n')
            let move = prompt('Enter your choose: ');
            while (!correctInput(move)) {
                move = prompt('Please enter a valid move: l, r, d, u \n');
            }
            let [x, y] = [0, 0];
            move = move.toLowerCase();
            switch (move) {
                case 'l': x--; break;
                case 'r': x++; break;
                case 'd': y++; break;
                case 'u': y--; break;
            }            
            this._x += x;
            this._y += y;            
            if (outSide(this._field,this._x, this._y) || onHole(this._field,this._x, this._y)) {
                console.log('GAME OVER');
                gameOver = true;
            } else if (hatFound(this._field, this._x, this._y )){                       
                console.log('YOU FOUND YOUR HAT');
                gameOver = true;
            } else {
                console.log()
                this._field[this._y][this._x]= pathCharacter;
                this.print()
            }
           
        }

    }
}




/**
 * EXECUTE
 */
const rows = 10;
const columns = 20;

const myField = new Field();
myField.generateField(rows , columns);
myField.play();




