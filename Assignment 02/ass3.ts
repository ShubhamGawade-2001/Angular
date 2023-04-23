function LargestNo(Arr : number[]) : number
{
    var max : number =Arr[0];
    for(var c : number = 0 ; c<Arr.length; c++)
    {
        if(Arr[c] > max)
        {
            max = Arr[c]
        }
    }
    var maxi : number = Arr[0]
    for(var i : number =0;i<Arr.length;i++)
    {
        if(Arr[i] > maxi && Arr[i] < max)
        {
            maxi = Arr[i]
        }
    }
    return maxi
}

var ARR : number[] = [22,89,6,29,56,45,77,32]

var ret : number = LargestNo(ARR)

console.log("SECOND LARGE NO =",+ret)