var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans = this.No1 - this.No2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans = this.No1 * this.No2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans = this.No1 / this.No2;
        return Ans;
    };
    return Arithmetic;
}());
var ret = 0;
var obj = new Arithmetic(11, 10);
ret = obj.Addition();
console.log("Addition is :" + ret);
ret = obj.Substraction();
console.log("Substraction  is :" + ret);
ret = obj.Multiplication();
console.log("Multiplication  is :" + ret);
ret = obj.Division();
console.log("Division is :" + ret);
