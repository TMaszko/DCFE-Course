function destroyer(arr) {
    var args = arguments;
    return arr.filter(function(el) {
        return numToDestroy(args,el);
    })
}

function numToDestroy(args,valueToDestroy){
    for(var i = 1 ; i< args.length; i++)
        if(args[i] == valueToDestroy) // check if args equal to element in orginal array
            return false;    // because of filter method
    return true;  
}
