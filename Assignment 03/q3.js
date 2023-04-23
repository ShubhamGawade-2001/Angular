var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(Data) {
        return _super.call(this, Data) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Ans = 0;
        Ans = 2 * this.Pi * this.Radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var ret = 0;
var obj5 = new CircleX(10);
ret = obj5.Area();
console.log(" Area is" + ret);
ret = obj5.Circumference();
console.log("circum is " + ret);
