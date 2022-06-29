// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
let name;

// resets the array after every change.
beforeEach(function() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
})

// destructively append a cat to the end of the cats array
function destructivelyAppendCat(name){
   return cats.push(name);
}

// destructively preappend a cat to the beginning of the cats array
function destructivelyPrependCat(name){
    return cats.unshift(name);
}

// destructively remove the last cat from the array
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

function appendCat(name){
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name){
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){
    return cats.slice(1);
}

