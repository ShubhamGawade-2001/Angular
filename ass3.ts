function DisplayFactor(no : number) : void
{
    var cnt : number = 0;
    for(cnt =1; cnt <= no/2; cnt++)
    {
        if(no % cnt == 0)
        {
        console.log(cnt);
        }
    }
}

DisplayFactor(20)