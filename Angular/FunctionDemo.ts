

//Positional Parameters
function Display(No1 :  number,No2 : number) : void
{
     console.log("Value of No1 is : "+ No1);    //function body
     console.log("Value of No2 is : "+ No2);
}


console.log("First Line of Application : ")

var A : number = 11;
var B : number = 22;

Display(A,B);          // function call
Display(11,22);

//function ha keyword aahe
//Display he nav aahe
//No1 ani No2 Parameter

function MultiPlication(A : number,B :number,C : number) : number
{
    let Ans : number = 0;

    Ans = A * B * C;


    return Ans;
}


var No1 : number = 10;
var No2 : number = 20;
var No3 : number = 30;

var Ret : number = 0;

Ret = MultiPlication(No1,No2,No3);

console.log("Multiplication is : "+Ret);
