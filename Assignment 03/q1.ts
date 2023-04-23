class Arithmetic
{
    No1 : number;
    No2 : number;

    constructor(A: number, B:number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition() : number
    {
        let Ans = this.No1 + this.No2;
        return Ans;
    }
    Substraction() : number
    {
        let Ans = this.No1 - this.No2
        return Ans
    }
    Multiplication() : number
    {
        let Ans = this.No1 * this.No2
        return Ans
    }
    Division() : number
    {
        let Ans = this.No1/ this.No2
        return Ans
    }
}

var ret : number =0;

var obj= new Arithmetic(11,10)

ret = obj.Addition()
console.log("Addition is :"+ret)

ret = obj.Substraction()
console.log("Substraction  is :"+ret)

ret = obj.Multiplication()
console.log("Multiplication  is :"+ret)

ret = obj.Division()
console.log("Division is :"+ret)