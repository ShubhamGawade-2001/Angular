function CheckPrime(no) {
    var divider = 0;
    for (var cnt = 1; cnt <= no; cnt++) {
        if (no % cnt == 0) {
            divider++;
        }
    }
    if (divider == 2) {
        return true;
    }
    else {
        return false;
    }
}
var ret = false;
ret = CheckPrime(11);
if (ret == true) {
    console.log("it is prime");
}
else {
    console.log("it is non prime");
}
