function Max(A : number, B : number, C : number)
{
    if(A > B && A > C)
    {
        console.log(A+" is max")
    }
    else if(B > A && B > C )
    {
        console.log(B+" is max")
    }
    else{
        console.log(C+" is max")
    }
}

Max(54,21,87)