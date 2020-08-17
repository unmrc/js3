function factorial(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
var number = +prompt('Введите число для вычисления факториала');
alert(factorial(number));
