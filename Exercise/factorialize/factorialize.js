function factorialize(n){
    var result = 1;  // 0! = 1
    for (var i = 1 ; i <= n; i++) {
        result *= i;
    }
    return result
}

function factorializeR(n){
    return (n == 1) ? 1 : n * factorializeR(n-1);  // 5! = 5 * 4! .... 
}