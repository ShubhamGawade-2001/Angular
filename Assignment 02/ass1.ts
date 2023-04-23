function LargestNo(Arr : number[]) : number
{
    var max : number = Arr[0];
    for(var cnt: number = 0; cnt < Arr.length;cnt++)
    {
        if(Arr[cnt]> max)
        {
            max = Arr[cnt]
        }
    }
    return max
}
var ARR : number[] = [22,89,6,26,56,45,77,32]
var ret : number = 0;

ret = LargestNo(ARR)
console.log(ret)