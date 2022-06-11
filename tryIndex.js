function findShortestPath(vectors){
    let shortpath = Number.MAX_VALUE, index = 0;
    for(let i = 0; i < vectors.length; i++){
        const sum = vectors[i].reduce((initial, item) => item + initial)
        if( shortpath > sum ){
            shortpath = sum;
            index = i;
        }
    }
    return vectors[index]
}

var vectors = [[2,2,2], [1,1,1], [3,3,3]]
var shortpath = findShortestPath(vectors);

console.log(shortpath);

// 5


function update(element, value){
    const element = document.getElementById(element);
    const elementValue = parseInt(element.taget.value);
    const elementMax = parseInt(element.taget.max);


    const newSize = elementValue + value;
    return newSize == elementMax;
}