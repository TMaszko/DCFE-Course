function fizzBuzz(){
    var output;
    for (var i = 1 ; i<=100 ; i++){
        output = "";
        if (i % 3 == 0){
            output+="Fizz";
        }
        if (i % 5 == 0) {
            output+="Buzz";
         }
        console.log(output || i);
    }
}
function woozyBoozy(config,times){    
    var output;
    for(var i = 1; i<=times ; i++){
        output = "";
        for(var prop in config){
            if(config.hasOwnProperty(prop)){
                if(i % config[prop] == 0){
                    output+= prop;
                }
            }
        }
        console.log(output || i);
    };
}