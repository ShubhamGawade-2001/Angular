var Circle = /** @class */ (function () {
    function Circle(No1, No2) {
        if (No2 === void 0) { No2 = 3.14; }
        this.Radius = No1;
        this.Pi = No2;
    }
    Circle.prototype.Area = function () {
        var Ans = this.Pi * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var ret = 0;
var obj = new Circle(10);
ret = obj.Area();
console.log("area of 10 radius is" + ret);
var obj = new Circle(5);
ret = obj.Area();
console.log("area of 5 radius is" + ret);
