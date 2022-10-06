let random = Math.floor(Math.random() * 100); {
    return random;
}

function f1(num) {
    if (num < 10) {
        num++;
        return f1(num);
    } else if (num > 10) {
        num--;
        return f1(num);
    } if (num === 10) {
        let sum = num * 200;
        console.log(sum);
    }
    console.log(num);
    
}
