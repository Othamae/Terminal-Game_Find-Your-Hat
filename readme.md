#### BACK-END ENGINEER
# Terminal Game - Find Your Hat 

### The scenario
The player has lost his hat in a field full of holes, and he must navigate back to it without falling down one of the holes or stepping outside of the field.

## How to play:

### Installation
   
- Clone repository:

```
git clone https://github.com/Othamae/Terminal-Game_Find-Your-Hat
```
- If you prefer, you can download to your computer.

### Choose the size

The size of the field is set up by default to 10x20.
If you want to change the size, go to the bottom of the `main.js` and change the value of columns and rows

```
/**
 * EXECUTE
 */
const rows = 10;
const columns = 20;

const myField = new Field();
myField.generateField(rows , columns);
myField.play();

```
### Run it

```
node main.js
```



