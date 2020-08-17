function num(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    if (a == b) {
        return 0;
    }
}
var num1 = +prompt('Введите 1 число:');
var num2 = +prompt('Введите 2 число:');
alert(num(num1, num2));
