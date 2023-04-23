function LargestNo(Arr) {
    var max = Arr[0];
    for (var cnt = 0; cnt < Arr.length; cnt++) {
        if (Arr[cnt] > max) {
            max = Arr[cnt];
        }
    }
    return max;
}
var ARR = [22, 89, 6, 26, 56, 45, 77, 32];
var ret = 0;
ret = LargestNo(ARR);
console.log(ret);
