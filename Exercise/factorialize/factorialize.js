function factorialize(n){
    var result = 1;  // 0! = 1
    for (var i = 1 ; i <= n; i++) {
        result *= i;
    }
    return result
}