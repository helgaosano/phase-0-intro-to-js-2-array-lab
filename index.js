// Write your solution here//

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop("Ralph");
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo");
}
function appendCat(cat){
    const newCats = [...cats];
    newCats.push(cat);
    return newCats;
}
function prependCat(cat){
    const newcats1 = [...cats];
    newcats1.unshift(cat);
    return newcats1;
}
function removeLastCat(cat){
    const deleteCats1 = [...cats];
    deleteCats1.pop(cat);
    return deleteCats1;
}
function removeFirstCat(cat){
    const deleteCats2 = [...cats];
    deleteCats2.shift(cat);
    return deleteCats2;
}
