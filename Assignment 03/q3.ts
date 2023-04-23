class Circle
{
    Radius : number;
    Pi : number;

    constructor(No1 : number, No2 : number = 3.14)
    {
        this.Radius = No1;
        this.Pi = No2; 
    }
    Area(): number
    {
        let Ans : number = this.Pi * this.Radius * this.Radius
        return Ans;
    }
}

class CircleX extends Circle
{
    constructor(Data : number)
    {
        super(Data)
    }

    Circumference() : number
    {
        let Ans : number = 0;
        Ans = 2 * this.Pi* this.Radius
        return Ans;
    }
}

var ret : number = 0;

var obj5 = new CircleX(10)

ret = obj5.Area()
console.log(" Area is" +ret)

ret = obj5.Circumference()
console.log("circum is "+ret)