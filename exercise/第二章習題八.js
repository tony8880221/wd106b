// JavaScript source code
var a;
function isPrime(a)
{
    var i = 1;
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
        console.log("true");
    }
    if (counter > 0)
    {
        console.log("false")
    }
}
isPrime(17);
