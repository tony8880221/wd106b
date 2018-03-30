// JavaScript source code
function binary(a)
{
    var i=1;
    var a;
    var b=0;
    while (a >= 1)
    {
        b += (a % 2) * i;
        a /= 2;
        a=Math.floor(a);
        i = i * 10;
    }
    console.log("", b);

}
binary(6);
