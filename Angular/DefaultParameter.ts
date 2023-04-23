//Default Parameter should be always trailing

function Percentage(Marks : number = 400,Outof : number = 500 ) : number
{
    let Ans : number = 0;

    

    Ans = (Marks / Outof) * 100;

    return Ans;
}

var Per : number = 0;

Per = Percentage(220,300);

console.log("Percentage is : "+Per);


Per = Percentage(220);

console.log("Percentage is : "+Per);


Per = Percentage();

console.log("Percentage is : "+Per);;