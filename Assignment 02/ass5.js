function ChkString(str) {
    var cnt = 0;
    if (str.indexOf('Marvellous') > -1) {
        cnt++;
    }
    if (cnt == 1) {
        return true;
    }
    else {
        return false;
    }
}
var bRet = false;
var str = "pune kothrud Marvellous Infosystem";
bRet = ChkString(str);
if (bRet == true) {
    console.log("contains Marvellous");
}
else {
    console.log("no Marvellous in string");
}
