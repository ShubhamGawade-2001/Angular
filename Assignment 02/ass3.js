function LargestNo(Arr) {
    var max = Arr[0];
    for (var c = 0; c < Arr.length; c++) {
        if (Arr[c] > max) {
            max = Arr[c];
        }
    }
    var maxi = Arr[0];
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] > maxi && Arr[i] < max) {
            maxi = Arr[i];
        }
    }
    return maxi;
}
var ARR = [22, 89, 6, 29, 56, 45, 77, 32];
var ret = LargestNo(ARR);
console.log("SECOND LARGE NO =", +ret);
