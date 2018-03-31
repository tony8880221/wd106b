var a;
var count2;
function isPrime(a)
{
    var i = 2;
    var counter=0;
    for (i = 2; i < a;i++)
    {
        if (a % i == 0)
        {
            counter++;
        }
    }
    if (counter == 0)
    {
        count2++;
    }

}
function primecount(b,c)
{
    var j;
    for(j=b;j<=c;j++)
    {
        isPrime(j);

    }
    console.log("",count2);
}
primecount(3,7);

