// JavaScript source code
var a, b;
function countPrime(a, b)
{
    var i;
    var j;
    var count=0;
    for (i = a; i < b; i++)
    {
        for (j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                count++;
            }
        }
    }
    console.log("", count);

}
countPrime(3, 7);
