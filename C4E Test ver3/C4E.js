
function isPrime(number){
    if(number < 2){
        return false;
    }
    for(var i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

function sumMath(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    var sum = 0;
    for(var i = a; i <= b; i++){
        if(isPrime(i)){
            sum += i;
        }
    }

    document.getElementById("result").innerHTML = "Tổng các số nguyên tố trong khoảng " + a + " và " + b + " là: " + tong;
}




