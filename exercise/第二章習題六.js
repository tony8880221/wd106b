// JavaScript source code
function gcd(a, b)
{
    while (b != 0)
    {
        c = a % b;
        a = b;
        b = c;
    }
    console.log("", a);
}
gcd(12,15)
