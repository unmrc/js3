function simpleNumber(num) {
    for (var i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return alert('Не простое');
        }
    }
    return alert('Простое');
}
alert(simpleNumber(50));
