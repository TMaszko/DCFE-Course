function findLongestWorld(str){
    var strArray = str.split(" ");
    return maxStrLength(strArray);

}

function maxStrLength(array){
    var max = array[0];
    array.forEach(function(el){
        if(el.length > max.length)
            max = el;
    });
    return max; 
}