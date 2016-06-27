function reverseString(str){
    var output = "";
    for (var i = str.length-1; i >= 0; i--)
        output +=str.charAt(i);
    return output
}

function reverseStringR(str){
    if(str.length == 1)
        return str;
    else {
        return reverseStringR(str.slice(1)) +str.charAt(0); // reversed Hi =  i+H ,H = str[0]
    }
}

function reverseStringR2(str){
    if(str.length == 1)
        return str;
    else {
        return str.charAt(str.length-1) + reverseStringR2(str.slice(0,str.length-1)); // reversed dwa = a + reversed(dw);
    }
}