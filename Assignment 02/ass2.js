function Addition(Arr) {
    var sum = 0;
    for (var c = 0; c < Arr.length; c++) {
        sum = sum + Arr[c];
    }
    return sum;
}
var ARR = [23, 6, 7, 4, 5, 7];
var ret = Addition(ARR);
console.log("addition is =" + ret);
