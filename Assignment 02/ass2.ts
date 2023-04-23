function Addition(Arr : number[]) : number
{
    var sum : number = 0

    for(var c : number = 0; c<Arr.length;c++)
    {
        sum =sum + Arr[c]
    }
    return sum
}

var ARR : number[] = [23,6,7,4,5,7]

var ret = Addition(ARR)

console.log("addition is ="+ret)