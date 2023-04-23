var Week : number[] = [560,900,320,660,220,1325,470];

var Count : number = 0;

//While Loop
console.log("Data by the While loop : ")

while(Count < Week.length)
{
   console.log(Week[Count]);
   Count++;
}



//For Loop
console.log("Data by For Loop : ")

var i : number = 0;

for( i = 0;i<Week.length;i++)
{
    console.log(Week[i]);

}

//do - While Loop

console.log("Data by Do-While Loop : ")


var iCnt : number = 0;
do
{
    console.log(Week[iCnt]);
    iCnt++;

}while(iCnt < Week.length);