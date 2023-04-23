class Circle
{
    Radius : number;
    Pi : number;

    constructor(No1 : number, No2 = 3.14)
    {
        this.Radius = No1;
        this.Pi = No2;
    }

    Area() : number
    {
        let Ans : number = this.Pi* this.Radius* this.Radius;
        return Ans
    }
}

var ret : number = 0;

var obj10 = new Circle(10)

ret = obj10.Area()
console.log("area of 10 radius is"+ret)


