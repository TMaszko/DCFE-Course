function destroyer(arr) {
    var args = arguments;
    return arr.filter(function(el) {
        return isNotANumToDestroy(args, el);
    })
}

function isNotANumToDestroy(arr,valueToDestroy){
    for(var i = 1 ; i < arr.length; i++)
        if (arr[i] == valueToDestroy) { // check if args equal to element in orginal array
            return false;           // because of filter method
        }
    return true;  
}
